"use client";

import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Eye,
  Network,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "motion/react";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";

import { HeroCtas } from "./hero-ctas";
import { achievements, portfolio, skillCategories } from "@/lib/portfolio";

type StoryCard = {
  eyebrow: string;
  title: string;
  details: string;
  icon: "brain" | "network" | "activity";
};

type StoryStep = {
  id: "intro" | "focus" | "impact";
  card: StoryCard;
};

const STORY_STEPS: readonly StoryStep[] = [
  {
    id: "intro",
    card: {
      eyebrow: "AI / Applied AI Engineer",
      title: "LLMs · RAG · Agents",
      details: "Production-minded systems, designed for real-world use.",
      icon: "brain",
    },
  },
  {
    id: "focus",
    card: {
      eyebrow: "System design focus",
      title: "From retrieval to action",
      details: "Grounded AI workflows with robust orchestration and evaluation.",
      icon: "network",
    },
  },
  {
    id: "impact",
    card: {
      eyebrow: "Applied outcomes",
      title: "Built for measurable impact",
      details: "Reliable AI infrastructure, automation, and computer vision.",
      icon: "activity",
    },
  },
];

const CARD_ICONS = {
  brain: BrainCircuit,
  network: Network,
  activity: Activity,
};

const DEFAULT_STORY_STEP = STORY_STEPS[0]!;

export function Hero(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const portraitX = useSpring(pointerX, { stiffness: 90, damping: 20 });
  const portraitY = useSpring(pointerY, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!current) return;
        const index = sectionRefs.current.findIndex(
          (section) => section === current.target
        );
        if (index >= 0) setActiveIndex(index);
      },
      { threshold: [0.35, 0.6, 0.8], rootMargin: "-20% 0px -30% 0px" }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>): void => {
    if (prefersReducedMotion || !visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 12);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 12);
  };

  const resetPointer = (): void => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const activeStep = STORY_STEPS[activeIndex] ?? DEFAULT_STORY_STEP;

  return (
    <section className="relative w-full" aria-label="Introduction">
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 px-6 pt-24 sm:px-10 sm:pt-32 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] lg:gap-12 lg:px-12 lg:pt-0 xl:px-16">
        <div className="order-2 min-w-0 lg:order-1">
          <HeroVisual
            activeStep={activeStep}
            portraitX={portraitX}
            portraitY={portraitY}
            prefersReducedMotion={prefersReducedMotion}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            className="mb-12 lg:hidden"
          />

          <HeroPanel ref={(node) => { sectionRefs.current[0] = node; }}>
            <p className="text-foreground/80 text-[18px] font-medium tracking-tight sm:text-[20px]">
              Hey<span aria-hidden="true">!</span>, I&rsquo;m Vraj
            </p>
            <h1 className="text-foreground mt-5 max-w-[11ch] font-serif text-[clamp(3rem,7vw,6.7rem)] leading-[0.94] font-medium tracking-[-0.055em]">
              <span className="block">Building Intelligent</span>
              <span className="block">AI Systems</span>
              <span className="text-foreground/68 mt-3 block text-[0.68em] leading-[1.02] tracking-[-0.045em]">
                That Solve Real-World Problems
              </span>
            </h1>
            <p className="text-foreground/65 mt-8 max-w-[35ch] text-[18px] leading-[1.45] tracking-tight sm:text-[21px]">
              {portfolio.hero.subtitle}
            </p>
            <div className="mt-8"><HeroCtas /></div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-foreground/10 pt-6 text-[13px] tracking-tight text-foreground/58 sm:gap-x-12 sm:text-[14px]">
              <span><strong className="text-foreground">AI</strong> · Focus area</span>
              <span><strong className="text-foreground">5</strong> · Featured systems</span>
              <span><strong className="text-foreground">Mumbai</strong> · India</span>
            </div>
          </HeroPanel>

          <HeroPanel ref={(node) => { sectionRefs.current[1] = node; }}>
            <PanelEyebrow index="02" label="Core capabilities" />
            <h2 className="text-foreground mt-5 max-w-[13ch] font-serif text-[clamp(2.5rem,5vw,5.4rem)] leading-[0.98] font-medium tracking-[-0.05em]">
              AI systems that reason, retrieve, and act.
            </h2>
            <p className="text-foreground/65 mt-7 max-w-[40ch] text-[18px] leading-[1.5] tracking-tight sm:text-[20px]">
              I combine model capabilities with dependable software design to turn AI experiments into production-oriented workflows.
            </p>
            <div className="mt-10 grid max-w-160 gap-3 sm:grid-cols-2">
              {skillCategories.slice(0, 9).map((category, index) => (
                <article key={category.name} className="border-foreground/8 bg-foreground/2 rounded-3xl border p-5">
                  <span className="text-foreground/38 text-[12px] font-medium tracking-widest">0{index + 1}</span>
                  <h3 className="text-foreground mt-6 text-[18px] font-semibold tracking-tight">{category.name}</h3>
                  <p className="text-foreground/58 mt-2 text-[13px] leading-relaxed tracking-tight">{category.skills.slice(0, 8).join(" · ")}</p>
                </article>
              ))}
            </div>
          </HeroPanel>

          <HeroPanel ref={(node) => { sectionRefs.current[2] = node; }}>
            <PanelEyebrow index="03" label="Applied impact" />
            <h2 className="text-foreground mt-5 max-w-[13ch] font-serif text-[clamp(2.5rem,5vw,5.4rem)] leading-[0.98] font-medium tracking-[-0.05em]">
              Technical depth with measurable outcomes.
            </h2>
            <div className="mt-10 grid max-w-160 gap-3 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <article key={achievement.value} className="border-foreground/8 bg-background/70 rounded-3xl border p-5">
                  <p className="text-foreground font-serif text-[clamp(2.3rem,5vw,4rem)] leading-none font-medium tracking-[-0.05em]">{achievement.value}</p>
                  <p className="text-foreground/62 mt-3 max-w-[20ch] text-[14px] leading-snug tracking-tight">{achievement.label}</p>
                </article>
              ))}
            </div>
            <a href="/about" className="focus-ring text-foreground group mt-9 inline-flex items-center gap-2 text-[15px] font-medium tracking-tight">
              Explore my experience
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </HeroPanel>
        </div>

        <HeroVisual
          ref={visualRef}
          activeStep={activeStep}
          portraitX={portraitX}
          portraitY={portraitY}
          prefersReducedMotion={prefersReducedMotion}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          className="order-1 hidden self-start lg:sticky lg:top-6 lg:order-2 lg:flex lg:h-[calc(100svh-3rem)] lg:items-center"
        />
      </div>
    </section>
  );
}

const HeroPanel = forwardRef<HTMLElement, { children: ReactNode }>(
  function HeroPanel({ children }, ref): ReactNode {
    return (
      <article
        ref={ref}
        className="flex min-h-[78svh] flex-col justify-center py-14 sm:min-h-[82svh] sm:py-20 lg:min-h-svh lg:py-28"
      >
        {children}
      </article>
    );
  }
);

function PanelEyebrow({ index, label }: { index: string; label: string }): ReactNode {
  return <p className="text-foreground/52 text-[12px] font-medium tracking-[0.18em] uppercase"><span className="text-foreground/90">{index}</span> — {label}</p>;
}

const HeroVisual = forwardRef<HTMLDivElement, {
  activeStep: StoryStep;
  portraitX: MotionValue<number>;
  portraitY: MotionValue<number>;
  prefersReducedMotion: boolean | null;
  onPointerMove: (event: PointerEvent<HTMLDivElement>) => void;
  onPointerLeave: () => void;
  className?: string;
}>(function HeroVisual(
  { activeStep, portraitX, portraitY, prefersReducedMotion, onPointerMove, onPointerLeave, className },
  ref
): ReactNode {
  const Icon = CARD_ICONS[activeStep.card.icon];

  return (
    <div ref={ref} aria-hidden="true" className={`relative w-full ${className ?? ""}`} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className="relative mx-auto aspect-[0.79] w-full max-w-165 overflow-hidden rounded-[2rem] border border-foreground/12 bg-foreground/[0.035] p-2 shadow-2xl sm:rounded-[2.5rem] sm:p-3 lg:h-full lg:w-auto lg:max-w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(255,255,255,0.18),transparent_22%),radial-gradient(circle_at_28%_78%,rgba(255,255,255,0.09),transparent_36%)]" />
        <div className="absolute inset-[8%] rounded-[1.7rem] border border-foreground/15" />
        <div className="absolute -right-[30%] bottom-[9%] h-[60%] w-[86%] rounded-full border border-foreground/15" />
        <div className="absolute left-[12%] top-[18%] h-20 w-20 rounded-full border border-foreground/12 sm:h-28 sm:w-28" />
        <div className="absolute right-8 top-8 grid grid-cols-3 gap-2 opacity-55 sm:right-10 sm:top-10"><span className="h-1.5 w-1.5 rounded-full bg-foreground" /><span className="h-1.5 w-1.5 rounded-full bg-foreground" /><span className="h-1.5 w-1.5 rounded-full bg-foreground" /><span className="h-1.5 w-1.5 rounded-full bg-foreground" /><span className="h-1.5 w-1.5 rounded-full bg-foreground" /><span className="h-1.5 w-1.5 rounded-full bg-foreground" /></div>

        <motion.div style={{ x: prefersReducedMotion ? 0 : portraitX, y: prefersReducedMotion ? 0 : portraitY }} className="absolute inset-x-[5%] bottom-0 top-[5%]">
          <Image src={portfolio.person.portrait} alt="" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-contain object-bottom" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeStep.id} initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8, scale: prefersReducedMotion ? 1 : 0.97 }} transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }} className="absolute left-2 top-[10%] max-w-[43%] rounded-xl border border-white/18 bg-black/72 px-2 py-1.5 text-white shadow-2xl backdrop-blur-md sm:left-4 sm:max-w-[45%] sm:px-2.5 sm:py-2 lg:left-5 lg:px-3 lg:py-2.5">
            <div className="flex items-center gap-1.5 sm:gap-2"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/20 bg-white/8 sm:h-7 sm:w-7 lg:h-8 lg:w-8"><Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5" /></span><div><p className="text-[7px] font-medium tracking-[0.1em] text-white/55 uppercase sm:text-[8px] lg:text-[9px]">{activeStep.card.eyebrow}</p><p className="mt-0.5 text-[clamp(0.65rem,1.2vw,0.82rem)] leading-tight font-semibold tracking-tight">{activeStep.card.title}</p></div></div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div key={`${activeStep.id}-detail`} initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 8, scale: prefersReducedMotion ? 1 : 0.97 }} transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-[7%] right-2 max-w-[43%] rounded-xl border border-white/18 bg-black/72 px-2 py-1.5 text-white shadow-2xl backdrop-blur-md sm:right-4 sm:max-w-[45%] sm:px-2.5 sm:py-2 lg:right-5 lg:px-3 lg:py-2.5">
            <div className="flex items-start gap-1.5 sm:gap-2"><span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-md bg-white/10 sm:h-6 sm:w-6 lg:h-7 lg:w-7"><Eye className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5" /></span><p className="text-[clamp(0.57rem,1vw,0.74rem)] leading-snug tracking-tight text-white/82">{activeStep.card.details}</p></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});

HeroVisual.displayName = "HeroVisual";
