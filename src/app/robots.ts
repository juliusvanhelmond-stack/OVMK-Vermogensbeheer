import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

// Demo: indexeren uitgeschakeld tot de klant akkoord geeft.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
