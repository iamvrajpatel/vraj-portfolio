import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { JsonLd } from "@/components/seo/json-ld";
import { FadeIn } from "@/components/ui/motion-primitives";
import Shuffle from "@/components/Shuffle";
import { createMetadata } from "@/lib/metadata";
import { projectsStructuredData } from "@/lib/structured-data";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClickSpark from "@/components/ClickSpark";

export const metadata: Metadata = createMetadata({
  title: "AI, Data Science & Full Stack Projects",
  description:
    "Explore Vraj Patel's AI, Data Science, and Full Stack Engineering projects across LLMs, RAG, agents, computer vision, APIs, voice AI, and supply-chain automation.",
  path: "/projects",
  keywords: [
    "AI Engineer projects",
    "Data Science projects",
    "Full Stack Engineering projects",
    "RAG projects",
    "supply chain automation",
  ],
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <JsonLd data={projectsStructuredData} />
      <ClickSpark
        sparkColor="var(--foreground)"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-16 sm:px-10 sm:pt-60 sm:pb-20">
          <FadeIn className="flex flex-col items-center gap-5 text-center">
            <Shuffle
              text="Selected AI, Data Science & Full Stack work"
              tag="h1"
              className="text-foreground font-serif text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[3.25rem] lg:text-[3.75rem]"
              shuffleDirection="right"
              textAlign="center"
              animationMode="evenodd"
              stagger={0.025}
              duration={0.4}
              triggerOnce
              triggerOnHover={true}
            />
            <p className="text-foreground/65 max-w-[33ch] text-[20px] leading-[1.4] tracking-tight sm:text-[22px]">
              Production systems spanning AI, Data Science, full-stack engineering,
              retrieval, agents, computer vision, and backend APIs.
            </p>
          </FadeIn>
        </section>
        <Projects />
        <ContactCard />
        <div className="h-12 sm:h-16" />
      </ClickSpark>
    </main>
  );
}
