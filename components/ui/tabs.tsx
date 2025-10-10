"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: {
    title: string;
    value: string;
    content?: React.ReactNode;
    icon?: React.ReactNode;
    description?: string;
  }[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    height: number;
  }>({ left: 0, width: 0, height: 0 });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeTab = tabRefs.current[activeIndex];
      if (activeTab) {
        const { offsetLeft, offsetWidth, offsetHeight } = activeTab;
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  return (
    <div className={cn("relative", containerClassName)}>
      <div className="flex items-stretch w-full gap-4 overflow-x-auto">
        {propTabs.map((tab, idx) => (
          <Button
            key={tab.value}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            onClick={() => {
              setActive(tab);
              setActiveIndex(idx);
            }}
            variant={active.value === tab.value ? "default" : "outline"}
            className={cn(
              "relative transition-all duration-200 ease-out cursor-pointer px-3 py-3 flex-shrink-0 min-w-fit",
              "md:flex-1",
              tabClassName,
              active.value === tab.value && activeTabClassName
            )}
          >
            <div className="flex flex-col items-center gap-2 justify-center ">
              {tab.icon && (
                <div className="size-12 flex items-center justify-center bg-background/20 backdrop-blur-sm rounded p-3 shadow border border-border/50">
                  {tab.icon}
                </div>
              )}
              <span className="text-sm font-semibold">{tab.title}</span>
              {tab.description && (
                <span className="hidden text-xs text-center leading-tight lg:block">
                  {tab.description}
                </span>
              )}
            </div>
          </Button>
        ))}
      </div>

      <div className={cn("mt-4", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {active.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
