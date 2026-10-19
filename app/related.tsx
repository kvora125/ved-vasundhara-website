import Link from "next/link";
import { localHref, type Lang } from "./i18n";
import L from "./lang";
import { PAGES, type PageKey } from "./seo-pages";

// "Read next" links at the end of each page: helps visitors and spreads internal links for SEO.
export const RELATED: Partial<Record<PageKey, PageKey[]>> = {
  home: ["model", "work-areas", "credentials"],
  philosophy: ["vision-mission", "model", "founder"],
  "vision-mission": ["model", "philosophy", "work-areas"],
  model: ["veda-vasundhara-1", "work-areas", "impact"],
  "work-areas": ["veda-vasundhara-1", "initiatives", "events"],
  "veda-vasundhara-1": ["initiatives", "impact", "partner"],
  impact: ["credentials", "testimonials", "partner"],
  initiatives: ["events", "media", "veda-vasundhara-1"],
  founder: ["research", "philosophy", "testimonials"],
  research: ["founder", "media", "updates"],
  organisation: ["credentials", "testimonials", "contact"],
  media: ["updates", "gallery", "initiatives"],
  partner: ["crowdfunding", "credentials", "contact"],
  crowdfunding: ["credentials", "partner", "impact"],
  credentials: ["testimonials", "organisation", "crowdfunding"],
  testimonials: ["credentials", "founder", "media"],
  contact: ["partner", "events", "organisation"],
  updates: ["events", "gallery", "media"],
  events: ["updates", "veda-vasundhara-1", "contact"],
  gallery: ["updates", "events", "media"],
};

export default function Related({ page, lang }: { page: PageKey; lang: Lang }) {
  const keys = RELATED[page];
  if (!keys) return null;
  return (
    <nav aria-label={lang === "en" ? "Read next" : "आगे पढ़ें"} className="related">
      <h2 className="related-title">
        <L lang={lang} hi="आगे पढ़ें" en="Read next" />
      </h2>
      <div className="related-grid rg1">
        {keys.map((k) => (
          <Link key={k} href={localHref(lang, PAGES[k].path)} className="related-card">
            <span className="related-name">{PAGES[k][lang].crumb} →</span>
            <span className="related-desc">{PAGES[k][lang].description}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
