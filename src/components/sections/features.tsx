"use client";

import {
  BrainCircuit,
  CloudCog,
  Code2,
  RefreshCw,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useDictionary } from "@/stores/language-store";

const icons = [CloudCog, BrainCircuit, Code2, ShieldCheck, RefreshCw, ServerCog];

export function Features() {
  const t = useDictionary();

  return (
    <section id="solutions" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-lumen-deep dark:text-lumen">
          {t.features.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {t.features.title}
        </h2>
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
          {t.features.subtitle}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-shadow duration-500 hover:shadow-[0_8px_40px_-12px_rgb(var(--glow)/0.35)] sm:p-7"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-secondary transition-colors duration-500 group-hover:bg-lumen/15">
                <Icon className="size-5 text-lumen-deep dark:text-lumen" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-lumen/0 blur-3xl transition-colors duration-700 group-hover:bg-lumen/20"
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
