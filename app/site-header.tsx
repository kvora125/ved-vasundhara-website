"use client";

import { asset } from "./asset";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import L from "./lang";
import { counterpartPath, langFromPath, localHref, type Lang } from "./i18n";
import { LANG_PREF_KEY } from "./lang-pref";
import { NAV, isActive } from "./site-nav";

function rememberLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_PREF_KEY, lang);
  } catch {
    // Storage unavailable (private mode): the link still switches language.
  }
}

// Plain links (full page load), so include the trailing slash the static export serves.
const withSlash = (p: string) => (p.endsWith("/") ? p : `${p}/`);

function LangSwitch({ pathname, lang }: { pathname: string; lang: Lang }) {
  return (
    <div className="lang" role="group" aria-label="Language / भाषा">
      <a
        href={withSlash(counterpartPath(pathname, "en"))}
        hrefLang="en"
        lang="en"
        aria-current={lang === "en" ? "true" : undefined}
        onClick={() => rememberLang("en")}
      >
        EN
      </a>
      <i aria-hidden="true">|</i>
      <a
        href={withSlash(counterpartPath(pathname, "hi"))}
        hrefLang="hi"
        lang="hi"
        aria-label="हिंदी"
        aria-current={lang === "hi" ? "true" : undefined}
        onClick={() => rememberLang("hi")}
      >
        हिं
      </a>
    </div>
  );
}

export default function SiteHeader() {
  const raw = usePathname().replace(/(.)\/$/, "$1");
  // The shared 404 page renders as /_not-found; its language links should go home.
  const fullPath = raw.endsWith("/_not-found") ? "/" : raw;
  const lang = langFromPath(fullPath);
  // Path without the /en prefix, used for active-state matching.
  const pathname = lang === "en" ? fullPath.slice(3) || "/" : fullPath;
  const [open, setOpen] = useState(false);
  const href = (p: string) => localHref(lang, p);
  const cta = <L lang={lang} hi="कार्यशाला से जुड़ें" en="Join a workshop" />;

  return (
    <header className="site-header">
      <Link href={href("/")} className="brand">
        <img src={asset("/assets/logo-192.png")} alt="" width={46} height={46} />
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <div className="brand-name">
            <L lang={lang} hi="वेद वसुंधरा मॉडल" en="Veda Vasundhara Model" />
          </div>
          <div className="brand-sub">Sanskarit Yuva Aadarsh Samiti</div>
        </div>
      </Link>

      <nav className="nav" aria-label={lang === "en" ? "Main" : "मुख्य"}>
        {NAV.map((item) => (
          <div className="nav-item" key={item.href}>
            <Link href={href(item.href)} className={`nav-link${isActive(item, pathname) ? " active" : ""}`}>
              <span className="hi">
                <L lang={lang} hi={item.hi} en={item.en} />
              </span>
              <span className="en">
                <L lang={lang} hi={item.en} en={item.hi} />
              </span>
            </Link>
            {item.children && (
              <div className="nav-sub">
                {item.children.map((c) => (
                  <Link key={c.href} href={href(c.href)} className={pathname === c.href ? "active" : undefined}>
                    <L lang={lang} hi={c.hi} en={c.en} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <LangSwitch pathname={fullPath} lang={lang} />
      </nav>

      <Link href={href("/contact")} className="cta">
        {cta}
      </Link>

      <div className="header-right">
        <LangSwitch pathname={fullPath} lang={lang} />
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? (lang === "en" ? "Close menu" : "मेनू बंद करें") : lang === "en" ? "Open menu" : "मेनू खोलें"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`drawer${open ? " open" : ""}`} onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
        {NAV.map((item) =>
          item.children ? (
            item.children.map((c, i) => (
              <Link key={c.href} href={href(c.href)} className={`${i ? "sub " : ""}${pathname === c.href ? "active" : ""}`}>
                {i ? <L lang={lang} hi={c.hi} en={c.en} /> : <L lang={lang} hi={item.hi} en={item.en} />}
                {!i && (
                  <small>
                    <L lang={lang} hi={item.en} en={item.hi} />
                  </small>
                )}
              </Link>
            ))
          ) : (
            <Link key={item.href} href={href(item.href)} className={pathname === item.href ? "active" : undefined}>
              <L lang={lang} hi={item.hi} en={item.en} />
              <small>
                <L lang={lang} hi={item.en} en={item.hi} />
              </small>
            </Link>
          ),
        )}
        <Link href={href("/contact")} className="cta">
          {cta}
        </Link>
      </div>
    </header>
  );
}
