"use client";

import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "@/stores/language-store";

/** Map known footer link labels (all locales) to internal routes */
const linkHrefMap: Record<string, string> = {
  // About
  About: "/about",
  "เกี่ยวกับเรา": "/about",
  "关于我们": "/about",
  "会社について": "/about",

  // Contact
  Contact: "/#contact",
  "ติดต่อเรา": "/#contact",
  "联系我们": "/#contact",
  "お問い合わせ": "/#contact",

  // Legal
  "Privacy Policy": "/privacy",
  "นโยบายความเป็นส่วนตัว": "/privacy",
  "隐私政策": "/privacy",
  "プライバシーポリシー": "/privacy",
  "Terms of Service": "/terms",
  "ข้อกำหนดการใช้งาน": "/terms",
  "服务条款": "/terms",
  "利用規約": "/terms",
  "PDPA Notice": "/pdpa",
  "ประกาศ PDPA": "/pdpa",
  "PDPA 声明": "/pdpa",
  "PDPAに関する通知": "/pdpa",
};

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
              sizes="160px"
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
                {col.links.map((link) => {
                  const href = linkHrefMap[link];
                  return (
                    <li key={link}>
                      {href ? (
                        <Link
                          href={href}
                          className="text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
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
