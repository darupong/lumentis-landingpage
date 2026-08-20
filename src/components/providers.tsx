"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Provider as JotaiProvider } from "jotai";
import { useLanguageStore } from "@/stores/language-store";

function LanguageEffects() {
  const locale = useLanguageStore((s) => s.locale);

  useEffect(() => {
    useLanguageStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <JotaiProvider>
        <LanguageEffects />
        {children}
      </JotaiProvider>
    </ThemeProvider>
  );
}
