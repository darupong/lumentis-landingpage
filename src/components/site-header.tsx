"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useDictionary } from "@/stores/language-store";

export function SiteHeader() {
  const t = useDictionary();

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-border/60">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="/#hero" className="flex items-center">
          <Image
            src="/lumentis-wordmark.png"
            alt="Lumentis"
            width={985}
            height={92}
            sizes="160px"
            priority
            className="h-3 w-auto dark:invert sm:h-3.5"
          />
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild size="sm" className="ml-1 rounded-full">
            <a href="/#contact">{t.nav.getStarted}</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
