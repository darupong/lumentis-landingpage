"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Layers,
  Cpu,
  Zap,
  MapPin,
  Mail,
  Clock,
  ArrowRight,
  Lightbulb,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Waves } from "@/components/ui/wave-background";
import { Button } from "@/components/ui/button";
import { useAboutDictionary, useDictionary } from "@/stores/language-store";

export function AboutPageContent() {
  const about = useAboutDictionary();
  const t = useDictionary();

  const capabilityIcons = [
    Layers,
    Cpu,
    Zap,
    Sparkles,
    Lightbulb,
    Compass,
  ];

  return (
    <main className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="glow-orb absolute -left-1/4 top-10 size-[70vmin] -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="glow-orb absolute -right-1/4 top-1/3 size-[50vmin] rounded-full opacity-50 pointer-events-none" />
      <div className="glow-orb absolute left-1/3 bottom-10 size-[60vmin] rounded-full opacity-40 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-lumen-deep/30 bg-lumen/10 px-3.5 py-1 text-xs font-medium text-lumen-deep dark:border-lumen/30 dark:text-lumen">
            <Sparkles className="size-3.5" />
            <span>{about.badge}</span>
          </div>

          <h1 className="font-display mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            <span>{about.title1} </span>
            <span className="text-lumen-gradient block pb-2 sm:inline">{about.title2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-xl">
            {about.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="/#contact">
                {about.cta.button}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/#solutions">
                {t.nav.solutions}
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Stats Grid */}
        <Reveal delay={0.15} className="mt-16 sm:mt-24">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border/80 bg-card/60 p-6 backdrop-blur-md sm:grid-cols-4 sm:p-8">
            {about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center border-border/40 p-3 sm:p-4 odd:border-r sm:border-r sm:last:border-r-0"
              >
                <span className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                  <span className="text-lumen-gradient">{stat.value}</span>
                </span>
                <span className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Story & Philosophy Section */}
      <section className="relative mx-auto mt-24 max-w-6xl px-4 sm:mt-36 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-lumen-deep dark:text-lumen">
              {about.story.eyebrow}
            </span>
            <h2 className="font-display mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              {about.story.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="space-y-4 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p className="text-foreground/90 font-medium">
              {about.story.p1}
            </p>
            <p>{about.story.p2}</p>
            <p>{about.story.p3}</p>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission Banner */}
      <section className="relative mx-auto mt-24 max-w-6xl px-4 sm:mt-32 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-secondary/40 p-8 sm:p-12 lg:p-16">
            <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-lumen-deep dark:text-lumen">
                  {about.vision.eyebrow}
                </span>
                <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {about.vision.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {about.vision.description}
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground">
                  <CheckCircle2 className="size-4 text-lumen-deep dark:text-lumen" />
                  {about.vision.missionTitle}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {about.vision.missionDescription}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The Lumentis DNA / Core Values */}
      <section className="relative mx-auto mt-24 max-w-6xl px-4 sm:mt-36 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lumen-deep dark:text-lumen">
            {about.values.eyebrow}
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {about.values.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-muted-foreground sm:text-base">
            {about.values.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {about.values.items.map((val, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="group relative flex h-full flex-col rounded-3xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-lumen/50 hover:shadow-[0_16px_40px_-20px_rgb(var(--glow)/0.35)] sm:p-8">
                <span className="font-display text-4xl font-semibold text-muted-foreground/30 transition-colors group-hover:text-lumen/60">
                  {val.step}
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-foreground">
                  {val.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {val.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative mx-auto mt-24 max-w-6xl px-4 sm:mt-36 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-lumen-deep dark:text-lumen">
                {about.capabilities.eyebrow}
              </span>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {about.capabilities.title}
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              {about.capabilities.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.capabilities.items.map((item, idx) => {
            const Icon = capabilityIcons[idx % capabilityIcons.length];
            return (
              <Reveal key={idx} delay={0.06 * idx}>
                <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-border sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-lumen/10 text-lumen">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[0.6875rem] font-medium text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Office & Headquarters */}
      <section className="relative mx-auto mt-24 max-w-6xl px-4 sm:mt-36 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-lumen-deep dark:text-lumen">
                  {about.office.eyebrow}
                </span>
                <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {about.office.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {about.office.description}
                </p>

                <div className="mt-8">
                  <Image
                    src="/lumentis-wordmark.png"
                    alt={t.footer.company}
                    width={985}
                    height={92}
                    sizes="180px"
                    className="h-4 w-auto dark:invert"
                  />
                  <p className="mt-2 text-xs font-medium text-muted-foreground">
                    {t.footer.company}
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-1 lg:col-span-7">
                <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5 sm:p-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lumen/10 text-lumen">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {about.office.locationTitle}
                    </h4>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                      {about.office.address}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5 sm:p-6">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lumen/10 text-lumen">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        {about.office.emailTitle}
                      </h4>
                      <a
                        href={`mailto:${about.office.email}`}
                        className="mt-1 block text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-lumen-deep dark:hover:text-lumen"
                      >
                        {about.office.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5 sm:p-6">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lumen/10 text-lumen">
                      <Clock className="size-5" />
                    </span>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        {about.office.hoursTitle}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {about.office.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bottom CTA */}
      <section className="relative mx-auto mt-24 max-w-6xl px-4 sm:mt-36 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-card via-card to-secondary/60 p-8 text-center sm:p-14 lg:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 text-foreground/10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
            >
              <Waves strokeColor="currentColor" backgroundColor="transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <span>{about.cta.title1} </span>
                <span className="text-lumen-gradient block sm:inline">{about.cta.title2}</span>
              </h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {about.cta.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <a href="/#contact">
                    {about.cta.button}
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/privacy">
                    {t.footer.columns.find((c) => c.title === "Legal" || c.title === "กฎหมาย" || c.title === "法律" || c.title === "規約")?.links[0] ?? "Privacy"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
