"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { dictionaries, type Dictionary, type Locale } from "@/lib/i18n/dictionaries";
import { legalDictionaries, type LegalDictionary } from "@/lib/i18n/legal";
import { aboutDictionaries, type AboutDictionary } from "@/lib/i18n/about";

interface LanguageState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      locale: "en",
      setLocale: (locale) => set({ locale }),
    }),
    // skipHydration: SSR always renders "en"; rehydrate after mount to avoid mismatch
    { name: "lumentis-language", skipHydration: true },
  ),
);

export function useDictionary(): Dictionary {
  const locale = useLanguageStore((s) => s.locale);
  return dictionaries[locale];
}

export function useLegalDictionary(): LegalDictionary {
  const locale = useLanguageStore((s) => s.locale);
  return legalDictionaries[locale];
}

export function useAboutDictionary(): AboutDictionary {
  const locale = useLanguageStore((s) => s.locale);
  return aboutDictionaries[locale];
}
