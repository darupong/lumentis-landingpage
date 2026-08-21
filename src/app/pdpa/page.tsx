import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPageContent } from "@/components/legal-page-content";

export const metadata: Metadata = {
  title: "PDPA Privacy Notice",
  description:
    "Personal Data Protection Act (PDPA) Privacy Notice for LUMENTIS (THAILAND) Co., Ltd. Learn how we handle and protect personal data under Thailand's PDPA B.E. 2562.",
};

export default function PdpaPage() {
  return (
    <>
      <SiteHeader />
      <LegalPageContent type="pdpa" />
      <SiteFooter />
    </>
  );
}
