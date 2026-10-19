export type Lang = "hi" | "en";

export const LANGS: Lang[] = ["hi", "en"];

// Hindi lives at the site root, English under /en.
export function localHref(lang: Lang, path: string) {
  if (lang === "hi") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

// Path of the same page in the other language (input: a pathname without trailing slash).
export function counterpartPath(pathname: string, to: Lang) {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const base = isEn ? pathname.slice(3) || "/" : pathname;
  return localHref(to, base);
}

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "hi";
}
