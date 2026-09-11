import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config/site";
import { NAV_ITEMS, SERVICE_NAV_ITEMS } from "@/lib/config/navigation";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const mainPages = NAV_ITEMS.map((item) => ({
    url: `${baseUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1.0 : 0.8,
  }));

  const servicePages = SERVICE_NAV_ITEMS.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainPages, ...servicePages];
}
