"use client";

import dynamic from "next/dynamic";
import { FC, memo } from "react";
import Video from "next-video";

// Dynamically import MuxPlayer to avoid SSR issues
const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center rounded bg-muted">
      <div className="text-muted-foreground">Loading video player...</div>
    </div>
  ),
});

interface MuxEmbedProps {
  embedId: string;
  className?: string;
  id?: string;
  verticalVideo?: boolean;
  controls?: boolean;
  poster?: string;
}

const MuxEmbed: FC<MuxEmbedProps> = ({
  embedId,
  className,
  id,
  verticalVideo = false,
  controls = true,
  poster,
}) => {
  if (!embedId || embedId === "null" || embedId === "undefined") {
    return null;
  }

  // Build Mux URLs from the embedId
  const streamUrl = `https://stream.mux.com/${embedId}.m3u8`;
  const posterUrl = poster || `https://image.mux.com/${embedId}/animated.gif`;

  return (
    <div className={className} id={id}>
      <div className="relative overflow-hidden">
        <Video
          streamType="on-demand"
          playbackId={embedId}
          poster={posterUrl}
          muted
          playsInline
          style={{
            borderRadius: "0.5rem",
            aspectRatio: verticalVideo ? "9/16" : "16/9",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default memo(MuxEmbed);
