import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoGridThirdDemo } from "@/components/bento-grid-third-demo";
import { DottedGlowBackgroundDemoSecond } from "@/components/dotted-glow-background-second-demo";
import { RevenueCalculator } from "@/components/revenue-calculator";
import { FeatureTabs } from "@/components/feature-tabs";
import { FAQ } from "@/components/faq";
import { OrbitingCirclesDemo } from "@/components/orbiting-circles-platforms-demo";
import { Container } from "@/components/ui/container";
import { AnimatedBeamMultipleOutputDemo } from "@/components/animated-beam-platforms-demo";
import { AnimatedListDemo } from "@/components/magic-ui/animated-list-demo";
import { Footer } from "@/components/footer";
import { BentoDemo } from "@/components/magic-ui/bento-demo";

export default function Home() {
  return (
    <div className="min-h-screen space-y-4">
      <Navbar />

      <Hero />
      <BentoDemo />
      {/* <RevenueCalculator /> */}
      <DottedGlowBackgroundDemoSecond />
      <BentoGridThirdDemo />
      <Container className="grid md:grid-cols-2 gap-4 grid-cols-1">
        <OrbitingCirclesDemo />
        <AnimatedListDemo />
      </Container>
      <FeatureTabs />
      <FAQ />
      <Footer />
    </div>
  );
}
