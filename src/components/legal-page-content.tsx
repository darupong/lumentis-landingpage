"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, MapPin, ShieldCheck, FileText, Scale } from "lucide-react";
import { useLegalDictionary } from "@/stores/language-store";
import { useDictionary } from "@/stores/language-store";

interface LegalPageContentProps {
  type: "privacy" | "terms" | "pdpa";
}

export function LegalPageContent({ type }: LegalPageContentProps) {
  const legalDict = useLegalDictionary();
  const t = useDictionary();
  const doc = legalDict[type];

  const iconMap = {
    privacy: ShieldCheck,
    terms: Scale,
    pdpa: FileText,
  };
  const PageIcon = iconMap[type];

  return (
    <main className="pt-24 pb-20 sm:pt-28 sm:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Navigation Breadcrumb / Quick switcher */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:gap-3">
          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            {t.nav.about}
          </Link>
          <span>/</span>
          <Link
            href="/privacy"
            className={`rounded-md px-2.5 py-1 transition-colors ${
              type === "privacy"
                ? "bg-muted font-medium text-foreground"
                : "hover:text-foreground"
            }`}
          >
            {legalDict.privacy.title}
          </Link>
          <Link
            href="/terms"
            className={`rounded-md px-2.5 py-1 transition-colors ${
              type === "terms"
                ? "bg-muted font-medium text-foreground"
                : "hover:text-foreground"
            }`}
          >
            {legalDict.terms.title}
          </Link>
          <Link
            href="/pdpa"
            className={`rounded-md px-2.5 py-1 transition-colors ${
              type === "pdpa"
                ? "bg-muted font-medium text-foreground"
                : "hover:text-foreground"
            }`}
          >
            {legalDict.pdpa.title}
          </Link>
        </div>

        {/* Header */}
        <header className="border-b border-border/70 pb-8">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-lumen/10 text-lumen">
              <PageIcon className="size-5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.footer.company}
            </span>
          </div>

          <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {doc.title}
          </h1>

          {doc.subtitle && (
            <p className="mt-2 text-base text-muted-foreground">
              {doc.subtitle}
            </p>
          )}

          <p className="mt-3 text-xs font-medium text-muted-foreground/80">
            {doc.lastUpdated}
          </p>
        </header>

        {/* Document Sections */}
        <div className="divide-y divide-border/40">
          {doc.sections.map((section, idx) => (
            <section
              key={section.id ?? idx}
              id={section.id}
              className="scroll-mt-24 pt-8 pb-4"
            >
              <h2 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {section.title}
              </h2>

              <div className="mt-3 space-y-3">
                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.items && section.items.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-lumen">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Contact Us Card */}
        <div className="mt-10 rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
          <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
            {doc.contactBox.title}
          </h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-1">
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-lumen" />
              <div>
                <span className="font-medium text-foreground">
                  {doc.contactBox.addressLabel}:
                </span>{" "}
                {doc.contactBox.address}
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="size-4 shrink-0 text-lumen" />
              <div>
                <span className="font-medium text-foreground">
                  {doc.contactBox.emailLabel}:
                </span>{" "}
                <a
                  href={`mailto:${doc.contactBox.email}`}
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-lumen"
                >
                  {doc.contactBox.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Globe className="size-4 shrink-0 text-lumen" />
              <div>
                <span className="font-medium text-foreground">
                  {doc.contactBox.websiteLabel}:
                </span>{" "}
                <a
                  href={doc.contactBox.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-lumen"
                >
                  {doc.contactBox.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logo below Contact Us */}
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-secondary/40 px-6 py-8 text-center transition-colors hover:border-border sm:py-10">
          <Link href="/" className="inline-block transition-opacity hover:opacity-85">
            <Image
              src="/lumentis-wordmark.png"
              alt="LUMENTIS (THAILAND) Co., Ltd."
              width={985}
              height={92}
              sizes="200px"
              className="h-4 w-auto dark:invert sm:h-5"
            />
          </Link>
          <p className="mt-3 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            {t.footer.company}
          </p>
          <p className="mt-1 text-xs text-muted-foreground/80">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </main>
  );
}
