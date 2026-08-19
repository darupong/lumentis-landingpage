import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Noto_Sans_Thai } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

/* HK Grotesk is published on Google Fonts as "Hanken Grotesk" */
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

const siteUrl = "https://lumentisth.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumentis (Thailand) — Technology that illuminates business",
    template: "%s | Lumentis (Thailand)",
  },
  description:
    "Lumentis (Thailand) Co., Ltd. designs, builds, and operates digital platforms for enterprises across Southeast Asia — cloud architecture, AI & data engineering, product engineering, and cybersecurity.",
  keywords: [
    "tech solutions Thailand",
    "cloud architecture Bangkok",
    "AI consulting Thailand",
    "software development company",
    "digital transformation",
    "Lumentis",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Lumentis (Thailand)",
    title: "Lumentis (Thailand) — Technology that illuminates business",
    description:
      "Enterprise cloud, AI, and product engineering from Bangkok to the world.",
    locale: "en_US",
    alternateLocale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumentis (Thailand) — Technology that illuminates business",
    description:
      "Enterprise cloud, AI, and product engineering from Bangkok to the world.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LUMENTIS (THAILAND) Co., Ltd.",
  url: siteUrl,
  logo: `${siteUrl}/lumentis-wordmark.png`,
  email: "contact@lumentisth.com",
  sameAs: ["https://www.facebook.com/profile.php?id=61593141365163"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1035/20 Ploenchit Road, Lumphini, Pathum Wan",
    addressLocality: "Bangkok",
    postalCode: "10330",
    addressCountry: "TH",
  },
  description:
    "Enterprise technology solutions: cloud architecture, AI & data engineering, product engineering, and cybersecurity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${hanken.variable} ${notoThai.variable} min-h-full flex flex-col antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
