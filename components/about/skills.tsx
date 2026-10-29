import type { ReactNode } from "react";
import Shuffle from "../Shuffle";
import { skillCategories } from "@/lib/portfolio";

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <Shuffle
        text="AI engineering toolkit"
        tag="h3"
        className="font-serif text-[1.125rem] font-semibold tracking-tight text-foreground sm:text-[1.25rem]"
        shuffleDirection="right"
        textAlign="left"
        animationMode="evenodd"
        stagger={0.03}
        duration={0.35}
        triggerOnce
        triggerOnHover
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <section key={category.name} className="rounded-4xl border border-foreground/5 bg-foreground/2 p-4 dark:bg-foreground/5">
            <h4 className="text-foreground text-[15px] font-semibold tracking-tight">{category.name}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-foreground/8 bg-background px-3 py-1.5 text-[12px] tracking-tight text-foreground/80 sm:text-[13px]">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
