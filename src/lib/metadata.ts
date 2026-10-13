import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type PageMeta = { title: string; description: string; path: string };

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "OVMK Vermogensbeheer",
      locale: "nl_NL",
      type: "website",
      images: [{ url: "/images/og-ovmk.jpg", width: 1200, height: 630, alt: "OVMK Vermogensbeheer, Gouda" }],
    },
  };
}
