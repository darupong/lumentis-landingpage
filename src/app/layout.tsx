import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Noto_Sans_JP, Noto_Sans_Thai } from "next/font/google";
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

/* CJK glyphs are absent from Hanken/Noto Thai — Japanese falls through to this */
const notoJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://lumentisth.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumentis (Thailand) — Bring Possibilities to Light",
    template: "%s | Lumentis (Thailand)",
  },
  description:
    "LUMENTIS (THAILAND) is a creative technology company in Bangkok. We turn emerging technology into experiences, content, tools, and solutions people can see, use, and feel.",
  keywords: [
    "creative technology Thailand",
    "immersive experiences Bangkok",
    "AR VR marketing",
    "AI-powered content",
    "interactive experiences",
    "creative tech company",
    "Lumentis",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Lumentis (Thailand)",
    title: "Lumentis (Thailand) — Bring Possibilities to Light",
    description:
      "Creative technology from Bangkok, turning emerging tech into experiences people can see, use, and feel.",
    locale: "en_US",
    alternateLocale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumentis (Thailand) — Bring Possibilities to Light",
    description:
      "Creative technology from Bangkok, turning emerging tech into experiences people can see, use, and feel.",
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
    streetAddress: "1055/1369, 50th Floor, State Tower, Silom, Bang Rak",
    addressLocality: "Bangkok",
    postalCode: "10500",
    addressCountry: "TH",
  },
  slogan: "Bring possibilities to light.",
  description:
    "Creative technology company in Bangkok, turning emerging technology into experiences, content, tools, and solutions people can see, use, and feel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${hanken.variable} ${notoThai.variable} ${notoJp.variable} min-h-full flex flex-col antialiased`}
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
