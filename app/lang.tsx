import type { Lang } from "./i18n";

const DEVANAGARI = /[ऀ-ॿ]/;

// Picks the text for the page's language. Each language has its own URL
// (Hindi at /, English at /en), so only one version is rendered. Text in the
// other script (e.g. a Hindi subtitle on an English page) is tagged with its
// language for screen readers and search engines.
export default function L({ lang, en, hi }: { lang: Lang; en: string; hi: string }) {
  const text = lang === "en" ? en : hi;
  if (lang === "en" && DEVANAGARI.test(text)) return <span lang="hi">{text}</span>;
  if (lang === "hi" && !DEVANAGARI.test(text) && /[A-Za-z]{3}/.test(text)) return <span lang="en">{text}</span>;
  return <>{text}</>;
}
