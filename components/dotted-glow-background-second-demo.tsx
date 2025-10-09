import React from "react";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export function DottedGlowBackgroundDemoSecond() {
  return (
    <section className="px-3">
      <Container className="relative flex w-full items-center justify-center">
        <DottedGlowBackground
          className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
          opacity={1}
          gap={10}
          radius={1.6}
          colorLightVar="--color-muted-foreground"
          glowColorLightVar="--color-primary"
          colorDarkVar="--color-muted-foreground"
          glowColorDarkVar="--color-primary"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />

        <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-6 px-8 py-16 text-center md:flex-row">
          <div>
            <h2 className="text-center text-4xl font-normal tracking-tight text-foreground sm:text-5xl md:text-left">
              Ready to buy <span className="font-bold">Aceternity Pro</span>?
            </h2>
            <p className="mt-4 max-w-lg text-center text-base text-muted-foreground md:text-left">
              Unlock premium components, advanced animations, and exclusive
              templates to build stunning modern interfaces.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="outline" size="lg" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
