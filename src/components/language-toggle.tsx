"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguageStore } from "@/stores/language-store";
import type { Locale } from "@/lib/i18n/dictionaries";

const languages: { locale: Locale; flag: string; label: string }[] = [
  { locale: "en", flag: "/flag-us.png", label: "English" },
  { locale: "th", flag: "/flag-th.png", label: "ไทย" },
  { locale: "zh", flag: "/flag-cn.png", label: "中文" },
  { locale: "ja", flag: "/flag-jp.png", label: "日本語" },
];

export function LanguageToggle() {
  const locale = useLanguageStore((s) => s.locale);
  const setLocale = useLanguageStore((s) => s.setLocale);
  const current = languages.find((l) => l.locale === locale) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Language: ${current.label}`}
          className="rounded-full"
        >
          <Image
            src={current.flag}
            alt=""
            width={80}
            height={53}
            className="h-auto w-5 rounded-[3px]"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.locale}
            onClick={() => setLocale(lang.locale)}
            className="gap-2.5"
          >
            <Image
              src={lang.flag}
              alt=""
              width={80}
              height={53}
              className="h-auto w-5 rounded-[3px]"
            />
            <span className="flex-1">{lang.label}</span>
            {lang.locale === locale && <Check className="size-4 text-lumen" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
