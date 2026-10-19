import type { Metadata } from "next";
import { localHref, type Lang } from "./i18n";
import { PAGES, type PageKey } from "./seo-pages";
import { ORG } from "./org";

export { ORG };

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.vedvasundharamodel.org.in").replace(/\/$/, "");


/** Absolute URL of a site path in a language (matches the trailing-slash export). */
export function absUrl(path: string, lang: Lang = "hi") {
  const p = localHref(lang, path);
  return `${SITE_URL}${p === "/" ? "/" : `${p}/`}`;
}

export const OG_IMAGE = { url: "/og/og-default.jpg", width: 1200, height: 630 };

type MetaOptions = { title?: string; description?: string; path?: string; image?: string; type?: "website" | "article" };

export function pageMetadata(key: PageKey, lang: Lang, opts: MetaOptions = {}): Metadata {
  const page = PAGES[key];
  const copy = page[lang];
  const path = opts.path ?? page.path;
  const title = opts.title ?? copy.title;
  const description = opts.description ?? copy.description;
  const url = absUrl(path, lang);
  const image = opts.image ? { url: opts.image } : OG_IMAGE;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: { hi: absUrl(path, "hi"), en: absUrl(path, "en"), "x-default": absUrl(path, "hi") },
    },
    openGraph: {
      type: opts.type ?? "website",
      url,
      title,
      description,
      siteName: ORG.brand[lang],
      locale: lang === "hi" ? "hi_IN" : "en_IN",
      alternateLocale: lang === "hi" ? ["en_IN"] : ["hi_IN"],
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

// ---------- Structured data (schema.org JSON-LD) ----------

export function organizationLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE_URL}/#organization`,
    name: ORG.name[lang],
    alternateName: [ORG.name[lang === "hi" ? "en" : "hi"], ORG.brand.hi, ORG.brand.en],
    url: absUrl("/", lang),
    logo: `${SITE_URL}/assets/logo-official.png`,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    description: PAGES.home[lang].description,
    foundingDate: ORG.foundingDate,
    founder: { "@id": `${SITE_URL}/#founder` },
    taxID: ORG.pan,
    email: ORG.email,
    telephone: ORG.phone,
    address: { "@type": "PostalAddress", ...ORG.address },
    areaServed: { "@type": "State", name: "Uttar Pradesh" },
    sameAs: [ORG.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: ORG.phone,
      email: ORG.email,
      availableLanguage: ["Hindi", "English"],
    },
  };
}

export function websiteLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website-${lang}`,
    url: absUrl("/", lang),
    name: ORG.brand[lang],
    inLanguage: lang,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbLd(lang: Lang, trail: { name: string; path: string }[]) {
  const items = [{ name: PAGES.home[lang].crumb, path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absUrl(it.path, lang) })),
  };
}

export function founderLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: ORG.founder[lang],
    alternateName: ORG.founder[lang === "hi" ? "en" : "hi"],
    url: absUrl("/founder", lang),
    image: `${SITE_URL}/assets/founder-pagdi.jpg`,
    jobTitle: lang === "hi" ? "संस्थापक एवं परिकल्पनाकार" : "Founder & Visionary",
    description:
      lang === "hi" ? "लेखिका, समाजसेवी एवं वैदिक व्याख्याता" : "Author, social worker and Vedic lecturer",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Allahabad" },
      { "@type": "CollegeOrUniversity", name: "Gurukul Kangri University" },
      { "@type": "CollegeOrUniversity", name: "Chhatrapati Shahu Ji Maharaj University" },
    ],
    award: "Eco Learning Award, 2004",
  };
}

export function booksLd() {
  const author = { "@id": `${SITE_URL}/#founder` };
  const publisher = { "@type": "Organization", name: "Walnut Publication", url: "https://www.walnutpublication.com" };
  return [
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "जलता दीया हवाओं पर",
      alternateName: "Jalta Diya Hawaon Par",
      isbn: "9789359116471",
      inLanguage: "hi",
      datePublished: "2024",
      author,
      publisher,
      url: "https://walnutpublication.com/book/9789359116471",
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "मिट्टी के रंग, जीवन के संग",
      alternateName: "Mitti Ke Rang, Jivan Ke Sang",
      isbn: "9789359117591",
      inLanguage: "hi",
      datePublished: "2024",
      author,
      publisher,
    },
  ];
}

export function newsArticleLd(item: import("./cms").NewsItem, lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title[lang].slice(0, 110),
    description: item.summary[lang] || undefined,
    datePublished: item.date,
    inLanguage: lang,
    image: item.photos.map((p) => `${SITE_URL}${p.src}`),
    mainEntityOfPage: absUrl(`/updates/${item.slug}`, lang),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function eventLd(item: import("./cms").EventItem, lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: item.title[lang],
    description: item.summary[lang] || item.body[lang].slice(0, 300) || undefined,
    startDate: item.start,
    endDate: item.end || item.start,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: lang,
    location: {
      "@type": "Place",
      name: item.venue[lang] || item.city[lang],
      address: { "@type": "PostalAddress", addressLocality: item.city[lang] || undefined, addressCountry: "IN" },
    },
    image: item.photos.map((p) => `${SITE_URL}${p.src}`),
    url: absUrl(`/events/${item.slug}`, lang),
    organizer: { "@id": `${SITE_URL}/#organization` },
    ...(item.registrationUrl ? { offers: { "@type": "Offer", url: item.registrationUrl, availability: "https://schema.org/InStock" } } : {}),
  };
}
