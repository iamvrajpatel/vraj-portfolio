import { Achievements } from "@/components/about/achievements";
import { Certifications } from "@/components/about/certifications";
import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import ClickSpark from "@/components/ClickSpark";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { portfolio } from "@/lib/portfolio";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Learn about Vraj Patel's AI engineering experience across LLMs, RAG, agentic AI, computer vision, and production systems.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <ClickSpark
        sparkColor="var(--foreground)"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <section className="mx-auto w-full max-w-160 px-6 pt-44 pb-16 sm:px-10 sm:pt-56 sm:pb-24">
          <FadeIn delay={0.3}>
            <div className="border-foreground/5 bg-foreground/1.5 dark:bg-foreground/3 rounded-4xl border p-8 sm:p-12">
              <h1 className="text-foreground font-serif text-[1.75rem] font-medium tracking-tight sm:text-[2rem]">
                Hello! I&rsquo;m{" "}
                <span className="border-foreground/30 border-b pb-0.5">
                  Vraj Patel
                </span>
                .
              </h1>

              <div className="text-foreground/75 mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight sm:text-[18px]">
                <p>
                  I&rsquo;m an <strong className="text-foreground font-semibold">AI / Applied AI Engineer</strong> based in Mumbai, India, focused on reliable intelligent systems that move from experimentation into production.
                </p>

                <p>
                  {portfolio.about}
                </p>

                <p>
                  I care about technically credible systems, measurable outcomes, and practical AI that helps people make better decisions.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="mx-auto w-full max-w-160 px-6 pb-20 sm:px-10 sm:pb-28">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-10">
              <Experience />
              <Education />
              <Skills />
              <Stack />
              <Achievements />
              <Certifications />
            </div>
          </FadeIn>
        </section>

        <ContactCard />
        <div className="h-12 sm:h-16" />
      </ClickSpark>
    </main>
  );
}
