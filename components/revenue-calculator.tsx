"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SlidingNumber } from "@/components/ui/sliding-number";
import { cn } from "@/lib/utils";

export function RevenueCalculator() {
  const [adSpend, setAdSpend] = useState(1000);

  // Calculate revenue recovery (18.7% monthly recovery rate)
  const monthlyRecovery = Math.round(adSpend * 0.187);
  const annualRecovery = monthlyRecovery * 12;

  return (
    <section className="px-3 py-16">
      <Container className="max-w-2xl">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2">Calculator</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Calculate your wasted ad spend
          </h2>
          <p className="text-lg text-muted-foreground">
            Spoiler alert: it&apos;s more than you think.
          </p>
        </div>

        <Card className="p-8 space-y-6">
          {/* Input Section */}
          <div className="space-y-4">
            <label className="text-lg font-medium text-foreground">
              Your Monthly Ad Spend
            </label>
            <div className="text-4xl font-bold text-foreground flex items-center gap-1">
              $<SlidingNumber value={adSpend} />
            </div>

            {/* Slim Slider */}
            <div className="relative">
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Average additional revenue by using our platform
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* Annual Card */}
              <Card className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">ANNUALLY</p>
                <div className="text-3xl font-bold text-foreground flex items-center justify-center gap-1">
                  $<SlidingNumber value={annualRecovery} />
                </div>
              </Card>

              {/* Monthly Card */}
              <Card className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">MONTHLY</p>
                <div className="text-3xl font-bold text-foreground flex items-center justify-center gap-1">
                  $<SlidingNumber value={monthlyRecovery} />
                </div>
              </Card>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground">
            Brands spending ${adSpend.toLocaleString()} on ads recover on
            average ${monthlyRecovery.toLocaleString()}/month with our 60% total
            recovery rate and reduced ad waste.
          </p>

          {/* CTA Button */}
          <Button size="lg" className="w-full">
            Start earning today
          </Button>
        </Card>
      </Container>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 3px solid hsl(var(--background));
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 3px solid hsl(var(--background));
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
}
