"use client";

import Image from "next/image";
import { useDictionary } from "@/stores/language-store";

export function SiteFooter() {
  const t = useDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/lumentis-wordmark.png"
              alt={t.footer.company}
              width={985}
              height={92}
              className="h-3.5 w-auto dark:invert"
            />
            <p className="mt-3 max-w-xs text-pretty text-xs leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <p className="mt-3 max-w-xs text-pretty text-xs leading-relaxed text-muted-foreground">
              {t.footer.address}
            </p>
          </div>

          {t.footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {year} {t.footer.company} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
