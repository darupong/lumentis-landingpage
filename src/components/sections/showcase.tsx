"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { BrainCircuit, CloudCog, ShieldCheck } from "lucide-react";
import { useDictionary } from "@/stores/language-store";

const icons = [CloudCog, BrainCircuit, ShieldCheck];

function Scene({
  index,
  count,
  progress,
  active,
  title,
  body,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
  active: boolean;
  title: string;
  body: string;
}) {
  const reduced = useReducedMotion();
  const start = index / count;
  const end = (index + 1) / count;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    progress,
    [start, start + 0.08, mid, end - 0.04, end],
    [index === 0 ? 1 : 0, 1, 1, index === count - 1 ? 1 : 0, index === count - 1 ? 1 : 0],
  );
  const y = useTransform(progress, [start, start + 0.1], [index === 0 ? 0 : 48, 0]);
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      aria-hidden={!active}
      style={{ opacity, y: reduced ? 0 : y, visibility: active ? "visible" : "hidden" }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
    >
      <div className="mb-8 flex size-16 items-center justify-center rounded-2xl border border-border/70 bg-card/70 shadow-[0_0_60px_-12px_rgb(var(--glow)/0.5)] sm:size-20">
        <Icon className="size-8 text-lumen sm:size-10" aria-hidden />
      </div>
      <h2 className="font-display max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
        {body}
      </p>
    </motion.div>
  );
}

export function Showcase() {
  const t = useDictionary();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scenes = t.showcase.scenes;
  const [activeScene, setActiveScene] = useState(0);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextScene = Math.min(scenes.length - 1, Math.floor(latest * scenes.length));
    setActiveScene((current) => (current === nextScene ? current : nextScene));
  });

  return (
    <section id="platform" ref={ref} className="relative" style={{ height: "300svh" }}>
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden">
        <p className="absolute top-20 z-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {t.showcase.eyebrow}
        </p>

        {/* Rotating light ring backdrop */}
        <motion.div
          aria-hidden
          style={{ rotate: ringRotate, scale: ringScale }}
          className="absolute size-[110vmin] rounded-full opacity-40"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, rgb(var(--glow)/0.35) 12%, transparent 30%, transparent 55%, rgb(var(--glow)/0.2) 70%, transparent 85%)",
              filter: "blur(60px)",
            }}
          />
        </motion.div>

        <div className="relative h-full w-full max-w-5xl">
          {scenes.map((scene, i) => (
            <Scene
              key={i}
              index={i}
              count={scenes.length}
              progress={scrollYProgress}
              active={i === activeScene}
              title={scene.title}
              body={scene.body}
            />
          ))}
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-10 flex gap-2" aria-hidden>
          {scenes.map((_, i) => (
            <Dot key={i} index={i} count={scenes.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot({
  index,
  count,
  progress,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const start = index / count;
  const end = (index + 1) / count;
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
    [0.3, 1, 1, 0.3],
  );

  return (
    <motion.span style={{ opacity }} className="size-1.5 rounded-full bg-foreground" />
  );
}
