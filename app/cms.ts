import fs from "node:fs";
import path from "node:path";
import type { Lang } from "./i18n";

// Content managed in the Google Sheet admin (see cms/README.md).
// scripts/fetch-cms.mjs writes content/cms.json before every build; only rows
// marked "Approved" in the Sheet are included.

export type Text = Record<Lang, string>;
export type Photo = { src: string; width: number; height: number };

export type NewsItem = { id: string; slug: string; date: string; title: Text; summary: Text; body: Text; photos: Photo[] };
export type EventItem = {
  id: string;
  slug: string;
  start: string;
  end: string;
  time: string;
  title: Text;
  venue: Text;
  city: Text;
  summary: Text;
  body: Text;
  registrationUrl: string;
  photos: Photo[];
};
export type Album = { id: string; slug: string; date: string; title: Text; caption: Text; photos: Photo[] };
export type PressItem = {
  id: string;
  date: string;
  publication: Text;
  headline: Text;
  type: string;
  url: string;
  image: Photo | null;
};

export type CmsData = { updatedAt: string; news: NewsItem[]; events: EventItem[]; gallery: Album[]; press: PressItem[] };

const EMPTY: CmsData = { updatedAt: "", news: [], events: [], gallery: [], press: [] };

let cache: CmsData | null = null;

export function getCms(): CmsData {
  if (cache) return cache;
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), "content", "cms.json"), "utf8");
    cache = { ...EMPTY, ...(JSON.parse(raw) as Partial<CmsData>) };
  } catch {
    cache = EMPTY;
  }
  return cache;
}

const byDateDesc = <T extends { date?: string; start?: string }>(a: T, b: T) =>
  (b.date ?? b.start ?? "").localeCompare(a.date ?? a.start ?? "");

export const getNews = () => [...getCms().news].sort(byDateDesc);
export const getAlbums = () => [...getCms().gallery].sort(byDateDesc);
export const getPress = () => [...getCms().press].sort(byDateDesc);

/** Today's date in India (YYYY-MM-DD), so "upcoming" matches the visitor's calendar. */
export function todayIST() {
  return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10);
}

export function getEvents() {
  const today = todayIST();
  const all = getCms().events;
  const upcoming = all.filter((e) => (e.end || e.start) >= today).sort((a, b) => a.start.localeCompare(b.start));
  const past = all.filter((e) => (e.end || e.start) < today).sort((a, b) => b.start.localeCompare(a.start));
  return { upcoming, past };
}

export function cmsSitemapPaths() {
  const { news, events } = getCms();
  return [...news.map((n) => `/updates/${n.slug}`), ...events.map((e) => `/events/${e.slug}`)];
}

const MONTHS: Record<Lang, string[]> = {
  hi: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

export function formatDate(iso: string, lang: Lang) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso;
  return `${Number(m[3])} ${MONTHS[lang][Number(m[2]) - 1]} ${m[1]}`;
}

export function formatRange(start: string, end: string, lang: Lang) {
  if (!end || end === start) return formatDate(start, lang);
  return `${formatDate(start, lang)} – ${formatDate(end, lang)}`;
}
