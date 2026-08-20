"use client";

import Image from "next/image";
import Link from "next/link";
import { useAtom } from "jotai";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { mobileMenuOpenAtom } from "@/atoms/ui";
import { useDictionary } from "@/stores/language-store";

const sectionIds = ["solutions", "platform", "contact"] as const;

export function SiteHeader() {
  const t = useDictionary();
  const [menuOpen, setMenuOpen] = useAtom(mobileMenuOpenAtom);

  const labels: Record<(typeof sectionIds)[number], string> = {
    solutions: t.nav.solutions,
    platform: t.nav.platform,
    contact: t.nav.contact,
  };

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-border/60">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="#hero" className="flex items-center">
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

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild size="sm" className="ml-1 hidden rounded-full md:inline-flex">
            <a href="#contact">{t.nav.getStarted}</a>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <Image
                    src="/lumentis-wordmark.png"
                    alt="Lumentis"
                    width={985}
                    height={92}
                    sizes="160px"
                    className="h-3 w-auto dark:invert"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {sectionIds.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-[0.9375rem] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {labels[id]}
                  </a>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <a href="#contact" onClick={() => setMenuOpen(false)}>
                    {t.nav.getStarted}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
