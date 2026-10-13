import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

const routes = ["", "/over-ovmk", "/onze-filosofie", "/vermogensbeheer", "/beleggingsfondsen", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
