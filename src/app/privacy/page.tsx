import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPageContent } from "@/components/legal-page-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for LUMENTIS (THAILAND) Co., Ltd. Learn how we collect, use, and protect your personal data in compliance with Thailand's Personal Data Protection Act (PDPA).",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <LegalPageContent type="privacy" />
      <SiteFooter />
    </>
  );
}
