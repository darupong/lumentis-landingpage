import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AboutPageContent } from "@/components/about-page-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LUMENTIS (THAILAND) Co., Ltd., Bangkok's distinctive creative technology brand turning emerging tech into immersive experiences, AI solutions, and digital products.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <AboutPageContent />
      <SiteFooter />
    </>
  );
}
