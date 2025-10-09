import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoGridThirdDemo } from "@/components/bento-grid-third-demo";
import { DottedGlowBackgroundDemoSecond } from "@/components/dotted-glow-background-second-demo";
import { RevenueCalculator } from "@/components/revenue-calculator";
import { FeatureTabs } from "@/components/feature-tabs";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <div className="min-h-screen space-y-4">
      <Navbar />
      <Hero />
      <BentoGridThirdDemo />
      <DottedGlowBackgroundDemoSecond />
      {/* <RevenueCalculator /> */}
      <FeatureTabs />
      <FAQ />
    </div>
  );
}
