import type { ReactNode } from "react";
import Shuffle from "../Shuffle";
import { certifications } from "@/lib/portfolio";

export function Certifications(): ReactNode {
  return (
    <section className="flex flex-col gap-3">
      <Shuffle text="Certifications" tag="h3" className="font-serif text-[1.125rem] font-semibold tracking-tight text-foreground sm:text-[1.25rem]" shuffleDirection="right" textAlign="left" animationMode="evenodd" stagger={0.03} duration={0.35} triggerOnce triggerOnHover />
      <ul className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 grid gap-2 rounded-4xl border p-2 sm:grid-cols-2 sm:p-4">
        {certifications.map((certification) => (
          <li key={certification} className="bg-background border-foreground/5 rounded-2xl border px-4 py-3 text-[13px] leading-snug tracking-tight text-foreground/80 sm:text-[14px]">{certification}</li>
        ))}
      </ul>
    </section>
  );
}
