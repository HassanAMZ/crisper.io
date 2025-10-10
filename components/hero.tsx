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
import { Card } from "./ui/card";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam-platforms-demo";

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
      <Container className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 relative z-10">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start gap-4 w-full md:max-w-xl">
            <h1 className="text-center md:text-left">
              Losing 60% of ad spend?{" "}
              <span className="underline decoration-primary">
                Get every conversion back.
              </span>
            </h1>

            <h4 className="text-center md:text-left">{subheading}</h4>
            <div className="flex flex-row items-center justify-center md:justify-start gap-4 flex-wrap">
              <Button size="lg" asChild className="w-fit">
                <Link href={primaryButtonLink}>{primaryButtonText}</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="w-fit">
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            </div>

            {(showAvatars || showRating) && (
              <div className="flex flex-col items-center md:items-start gap-2">
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
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={`star-${index}`}
                          className="size-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                      {ratingText}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <AnimatedBeamMultipleOutputDemo />
        </div>
        <BackgroundBeams />
      </Container>
    </section>
  );
}
