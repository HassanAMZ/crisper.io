"use client";

import MuxEmbed from "@/components/mux-embed";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/animate/avatar-group";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

interface HeroProps {
  heading?: string;
  subheading?: string;
  videoEmbedId?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showAvatars?: boolean;
  showRating?: boolean;
  ratingText?: string;
}

export default function Hero({
  heading = "Transform Your Business with Our Powerful Solution",
  subheading = "We help businesses achieve their goals faster with our proven system. Experience the difference with our comprehensive platform designed for growth.",
  videoEmbedId = "2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY",
  primaryButtonText = "Start 14 Days Free Trial",
  primaryButtonLink = "#get-started",
  secondaryButtonText = "Book a Demo",
  secondaryButtonLink = "#book-demo",
  showAvatars = true,
  showRating = true,
  ratingText = "100+ Businesses Trust Us | 24h Support",
}: HeroProps) {
  // Placeholder avatar data
  const placeholderAvatars = [
    { id: "1", name: "John Doe", image: "/placeholder.svg" },
    { id: "2", name: "Jane Smith", image: "/placeholder.svg" },
    { id: "3", name: "Mike Johnson", image: "/placeholder.svg" },
    { id: "4", name: "Sarah Williams", image: "/placeholder.svg" },
    { id: "5", name: "Alex Brown", image: "/placeholder.svg" },
    { id: "6", name: "Emily Davis", image: "/placeholder.svg" },
    { id: "7", name: "Chris Wilson", image: "/placeholder.svg" },
    { id: "8", name: "Lisa Anderson", image: "/placeholder.svg" },
  ];

  return (
    <section className="px-3 relative">
      <Container className="grid gap-4 rounded bg-muted px-2 py-6 relative overflow-hidden">
        <div className="mx-auto grid max-w-5xl place-content-center gap-6 md:gap-8 relative z-10">
          <h2 className="mx-auto text-center">
            Losing 60% of ad spend?{" "}
            <span className="font-bold underline">
              Get every conversion back.
            </span>
          </h2>

          <MuxEmbed embedId={videoEmbedId} className="mx-auto max-w-4xl" />

          <h4 className="mx-auto max-w-2xl text-center">{subheading}</h4>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button size="lg" asChild>
              <Link href={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="hidden md:flex"
            >
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          </div>

          {(showAvatars || showRating) && (
            <div className="mx-auto flex flex-col items-center gap-2">
              {showAvatars && (
                <AvatarGroup>
                  {placeholderAvatars.map((avatar) => (
                    <div key={avatar.id}>
                      <Avatar className="border-2 border-primary bg-background">
                        <Image
                          src={avatar.image}
                          alt={`@${avatar.name}`}
                          width={1080}
                          height={1080}
                          className="aspect-square size-full object-cover"
                        />
                        <AvatarFallback>{avatar.name[0]}</AvatarFallback>
                        <AvatarGroupTooltip>
                          <p>{avatar.name}</p>
                        </AvatarGroupTooltip>
                      </Avatar>
                    </div>
                  ))}
                </AvatarGroup>
              )}

              {showRating && (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-center text-sm text-muted-foreground">
                    {ratingText}
                  </h4>
                </div>
              )}
            </div>
          )}
        </div>
        <BackgroundBeams />
      </Container>
    </section>
  );
}
