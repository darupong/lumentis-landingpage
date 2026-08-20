"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Waves } from "@/components/ui/wave-background";
import { useDictionary } from "@/stores/language-store";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593141365163";

/* lucide dropped brand icons — inline Facebook glyph */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21.9v-7.4h2.5l.5-3h-3V9.6c0-.9.3-1.6 1.7-1.6h1.4V5.2c-.2 0-1.1-.1-2.1-.1-2.2 0-3.9 1.4-3.9 3.9v2.5H8v3h2.6v7.4a10 10 0 0 0 2.9 0Z" />
    </svg>
  );
}

export function Cta() {
  const t = useDictionary();

  const channels = [
    {
      href: `mailto:${t.cta.email}`,
      icon: Mail,
      label: t.cta.emailLabel,
      value: t.cta.email,
      hint: t.cta.emailHint,
      external: false,
    },
    {
      href: FACEBOOK_URL,
      icon: FacebookIcon,
      label: t.cta.facebookLabel,
      value: t.cta.facebookName,
      hint: t.cta.facebookHint,
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Interactive wave field (formerly the hero background) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-foreground/12 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]"
      >
        <Waves strokeColor="currentColor" backgroundColor="transparent" />
      </div>

      <div className="glow-orb absolute -left-1/4 top-1/2 size-[70vmin] -translate-y-1/2 rounded-full" />
      <div className="glow-orb absolute -right-1/4 -top-1/4 size-[50vmin] rounded-full opacity-60" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-28 sm:px-6 sm:py-36 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Left: headline */}
        <Reveal className="flex flex-col justify-center">
          <h2 className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="block">{t.cta.title1}</span>
            <span className="text-lumen-gradient block pb-2">{t.cta.title2}</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.cta.subtitle}
          </p>
        </Reveal>

        {/* Right: contact channels */}
        <div className="flex flex-col justify-center gap-4">
          {channels.map((ch, i) => (
            <Reveal key={ch.label} delay={0.1 + i * 0.08}>
              <a
                href={ch.href}
                {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:border-lumen/60 hover:shadow-[0_12px_40px_-16px_rgb(var(--glow)/0.45)] sm:p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lumen/10 text-lumen">
                  <ch.icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {ch.label}
                  </span>
                  <span className="font-display mt-1 block truncate text-lg font-semibold tracking-tight sm:text-xl">
                    {ch.value}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{ch.hint}</span>
                </span>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lumen" />
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.26}>
            <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lumen/10 text-lumen">
                <MapPin className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {t.cta.visitLabel}
                </span>
                <span className="mt-1 block text-pretty text-sm leading-relaxed">
                  {t.footer.address}
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
