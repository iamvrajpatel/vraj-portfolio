import type { ReactNode } from "react";
import Shuffle from "../Shuffle";
import { achievements } from "@/lib/portfolio";

export function Achievements(): ReactNode {
  return (
    <section className="flex flex-col gap-3">
      <Shuffle text="Selected impact" tag="h3" className="font-serif text-[1.125rem] font-semibold tracking-tight text-foreground sm:text-[1.25rem]" shuffleDirection="right" textAlign="left" animationMode="evenodd" stagger={0.03} duration={0.35} triggerOnce triggerOnHover />
      <div className="grid gap-2 sm:grid-cols-2">
        {achievements.map((achievement) => (
          <article key={achievement.value} className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-3xl border p-4">
            <p className="text-foreground font-serif text-3xl font-medium tracking-tight">{achievement.value}</p>
            <p className="text-foreground/65 mt-1 text-[13px] leading-snug tracking-tight">{achievement.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
