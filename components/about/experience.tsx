"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import Shuffle from "../Shuffle";
import { experience } from "@/lib/portfolio";

export type ExperienceProps = { withHeadline?: boolean };

export function Experience({ withHeadline = false }: ExperienceProps): ReactNode {
  const [open, setOpen] = useState(false);
  const visibleEntries = withHeadline && !open ? experience.slice(0, 2) : experience;

  return (
    <div className="flex flex-col gap-3">
      {withHeadline ? (
        <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
          <Shuffle text="Experience" tag="h2" className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]" shuffleDirection="right" textAlign="center" animationMode="evenodd" stagger={0.025} duration={0.4} triggerOnce triggerOnHover threshold={0} />
          <p className="text-foreground/65 max-w-[37ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
            Building applied AI systems from model evaluation and retrieval to production-grade automation.
          </p>
        </FadeIn>
      ) : (
        <Shuffle text="Experience" tag="h3" className="font-serif text-[1.125rem] font-semibold tracking-tight text-foreground sm:text-[1.25rem]" shuffleDirection="right" textAlign="left" animationMode="evenodd" stagger={0.03} duration={0.35} triggerOnce triggerOnHover />
      )}

      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {visibleEntries.map((entry, index) => (
            <motion.li key={`${entry.company}-${entry.role}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="bg-background border-foreground/5 rounded-3xl border p-4">
              <div className="flex items-start gap-3">
                <span className="border-foreground/10 bg-foreground/3 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border" aria-hidden="true">
                  <Sparkles className="h-4 w-4 text-foreground/70" />
                </span>
                <div className="min-w-0">
                  <h4 className="text-foreground text-[16px] font-semibold tracking-tight sm:text-[18px]">{entry.company}</h4>
                  <p className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                    {entry.role}<span className="text-foreground/30 mx-2">•</span><span className="text-foreground/55">{entry.period}</span>
                  </p>
                </div>
              </div>
              {!withHeadline || open ? (
                <ul className="text-foreground/65 mt-4 space-y-2 pl-5 text-[13px] leading-relaxed tracking-tight sm:text-[14px]">
                  {entry.highlights.map((highlight) => <li key={highlight} className="list-disc pl-1">{highlight}</li>)}
                </ul>
              ) : null}
            </motion.li>
          ))}
        </ul>
        {withHeadline ? (
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="focus-ring text-foreground mt-3 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl py-2 text-[14px] font-medium tracking-tight">
            {open ? "Show less" : "View full experience"}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}><ChevronDown className="h-4 w-4" aria-hidden="true" /></motion.span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
