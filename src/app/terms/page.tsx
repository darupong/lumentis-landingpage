import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPageContent } from "@/components/legal-page-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for LUMENTIS (THAILAND) Co., Ltd. Review terms and conditions governing the use of our creative technology website and services.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <LegalPageContent type="terms" />
      <SiteFooter />
    </>
  );
}
