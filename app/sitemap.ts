import type { MetadataRoute } from "next";
import { routeMeta, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(routeMeta).map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-06-10"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
