"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/sections/hero-background";
import { useDictionary } from "@/stores/language-store";

export function Hero() {
  const t = useDictionary();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.75], [0, 80]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4"
    >
      <HeroBackground />

      {/* Ambient light field */}
      <div className="glow-orb absolute -top-1/4 left-1/2 size-[80vmin] -translate-x-1/2 rounded-full" />
      <div className="glow-orb absolute -bottom-1/3 -left-1/4 size-[60vmin] rounded-full opacity-60" />

      <motion.div
        style={reduced ? undefined : { opacity, scale, y }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 rounded-full border border-border/80 bg-card/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="font-display text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span
            className="block"
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.title1}
          </motion.span>
          <motion.span
            className="text-lumen-gradient block pb-2"
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.title2}
          </motion.span>
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group h-12 rounded-full px-7 text-[0.9375rem]">
            <a href="#contact">
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="h-12 rounded-full px-7 text-[0.9375rem] text-muted-foreground hover:text-foreground"
          >
            <a href="#platform">{t.hero.ctaSecondary}</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#platform"
        aria-label={t.hero.scrollHint}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-xs text-muted-foreground"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span>{t.hero.scrollHint}</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
