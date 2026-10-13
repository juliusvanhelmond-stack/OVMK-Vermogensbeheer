import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealController } from "@/components/ui/Reveal";
import { siteUrl } from "@/lib/metadata";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OVMK Vermogensbeheer | Value Investing vanuit Gouda",
    template: "%s | OVMK Vermogensbeheer",
  },
  description:
    "Ophorst Van Marwijk Kooy Vermogensbeheer: persoonlijk en onafhankelijk vermogensbeheer vanuit Gouda, met Value Investing als beleggingsstijl.",
  // Demo-omgeving: niet indexeren tot de klant akkoord geeft.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#005145",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#inhoud"
          className="sr-only z-50 bg-green px-4 py-3 font-semibold text-on-green focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <RevealController />
      </body>
    </html>
  );
}
