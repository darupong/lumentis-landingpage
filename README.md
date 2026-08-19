# Lumentis Landing Page

Marketing site for **LUMENTIS (THAILAND) Co., Ltd.** — enterprise technology solutions from Bangkok.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static prerender, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [motion](https://motion.dev) (Framer Motion successor) for scroll-linked animation
- [zustand](https://zustand.docs.pmnd.rs) — persisted language state
- [jotai](https://jotai.org) — UI atoms
- [simplex-noise](https://www.npmjs.com/package/simplex-noise) — interactive hero wave background
- [Bun](https://bun.sh) as runtime & package manager

## Getting started

```bash
bun install
bun dev        # http://localhost:3000
```

Production:

```bash
bun run build
bun start
```

## Features

- **Hero** — interactive simplex-noise wave field that reacts to the cursor, seamless fade into the next section, pauses off-screen and honors `prefers-reduced-motion`
- **Platform showcase** — Apple-style pinned scroll section with three crossfading scenes
- **Contact** — email / Facebook / office-address cards
- **i18n** — English, Thai, Chinese; flag dropdown in the navbar, persisted in `localStorage` (default: English)
- **Theming** — light & dark, brand CI palette (Signal Orange `#FF5A1F` → Electric Coral `#FF315C` → Hot Magnet `#E728FF` on Viod `#111111` / Light `#F7F7F2`)
- **Typography** — Hanken Grotesk (HK Grotesk) for Latin, Noto Sans Thai for Thai, via `next/font`
- **Responsive** — 375 px mobile up to 4K (root font-size scaling keeps proportions)
- **SEO** — Metadata API, Organization JSON-LD, `sitemap.xml`, `robots.txt`, brand favicon

## Structure

```
src/
  app/            layout (fonts, metadata, JSON-LD), page, globals.css, sitemap, robots
  components/
    sections/     hero, hero-background, showcase, features, cta
    ui/           shadcn components + wave-background
  lib/i18n/       dictionaries (en / th / zh, fully typed)
  stores/         zustand language store
  atoms/          jotai UI atoms
```

Language content lives in `src/lib/i18n/dictionaries.ts` — the `th` and `zh` objects are typed as `typeof en`, so a missing translation fails the build.
