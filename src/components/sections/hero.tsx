"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDictionary } from "@/stores/language-store";

/* Brand slogan — stays in English across locales */
const SLOGAN = "Bring Possibilities to Light";

export function Hero() {
  const t = useDictionary();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.75], [0, 80]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* Brand light beam — converges toward the wordmark, per CI cover.
          Entrances are CSS animations so first paint never waits for hydration. */}
      <div
        aria-hidden
        className="beam-in pointer-events-none absolute right-0 top-1/2 w-[85vw] max-w-[1100px] sm:w-[60vw]"
      >
        <Image
          src="/lumentis-beam.png"
          alt=""
          width={900}
          height={375}
          priority
          sizes="(min-width: 640px) 60vw, 85vw"
          className="h-auto w-full"
        />
      </div>

      <motion.div
        style={reduced ? undefined : { opacity, y }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        {/* fixed-width column so the wordmark, slogan, and subtitle share the same edges;
            centered on mobile, left-aligned from sm up */}
        <div className="mx-auto w-full max-w-[20rem] text-center sm:mx-0 sm:max-w-[28rem] sm:text-left lg:max-w-[38rem]">
          <div className="hero-in">
            <Image
              src="/lumentis-wordmark.png"
              alt="LUMENTIS"
              width={985}
              height={92}
              priority
              sizes="(min-width: 1024px) 608px, (min-width: 640px) 448px, 320px"
              className="h-auto w-full dark:invert"
            />
          </div>

          <h1
            className="hero-in mt-4 text-base font-medium uppercase text-foreground/80 [text-align-last:justify] sm:mt-5 sm:text-xl lg:text-2xl"
            style={{ animationDelay: "0.1s" }}
          >
            {SLOGAN}
          </h1>

          <p
            className="hero-in mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.18s" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="hero-in mt-10 flex flex-col items-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.26s" }}
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
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#platform"
        aria-label={t.hero.scrollHint}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground"
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
