import type { MetadataRoute } from "next";
import { absUrl } from "./seo";
import { PAGES } from "./seo-pages";
import { cmsSitemapPaths } from "./cms";

export const dynamic = "force-static";

// Every page in both languages, each listing its hreflang partner.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...Object.values(PAGES).map((p) => p.path), ...cmsSitemapPaths()];
  return paths.flatMap((path) =>
    (["hi", "en"] as const).map((lang) => ({
      url: absUrl(path, lang),
      changeFrequency: path === "/" || path === "/updates" || path === "/events" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
      alternates: { languages: { hi: absUrl(path, "hi"), en: absUrl(path, "en"), "x-default": absUrl(path, "hi") } },
    })),
  );
}
