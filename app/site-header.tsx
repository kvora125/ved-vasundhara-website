"use client";

import { asset } from "./asset";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import L from "./lang";
import { applyStoredLang, setLang, useLang } from "./lang-client";
import { NAV, isActive } from "./site-nav";

function LangSwitch() {
  const lang = useLang();
  return (
    <div className="lang" role="group" aria-label="Language / भाषा">
      <button type="button" lang="en" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
      <i aria-hidden="true">|</i>
      <button type="button" lang="hi" aria-pressed={lang === "hi"} onClick={() => setLang("hi")} aria-label="हिंदी">
        हिं
      </button>
    </div>
  );
}

const CTA = <L hi="कार्यशाला से जुड़ें" en="Join a workshop" />;

export default function SiteHeader() {
  const pathname = usePathname().replace(/(.)\/$/, "$1");
  const [open, setOpen] = useState(false);

  useEffect(applyStoredLang, []);

  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <img src={asset("/assets/logo-192.png")} alt="वेद वसुंधरा मॉडल" />
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <div className="brand-name">
            <L hi="वेद वसुंधरा मॉडल" en="Veda Vasundhara Model" />
          </div>
          <div className="brand-sub">Sanskarit Yuva Aadarsh Samiti</div>
        </div>
      </Link>

      <nav className="nav" aria-label="Main">
        {NAV.map((item) => (
          <div className="nav-item" key={item.href}>
            <Link href={item.href} className={`nav-link${isActive(item, pathname) ? " active" : ""}`}>
              <span className="hi">
                <L hi={item.hi} en={item.en} />
              </span>
              <span className="en">
                <L hi={item.en} en={item.hi} />
              </span>
            </Link>
            {item.children && (
              <div className="nav-sub">
                {item.children.map((c) => (
                  <Link key={c.href} href={c.href} className={pathname === c.href ? "active" : undefined}>
                    <L hi={c.hi} en={c.en} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <LangSwitch />
      </nav>

      <Link href="/contact" className="cta">
        {CTA}
      </Link>

      <div className="header-right">
        <LangSwitch />
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
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
              <Link key={c.href} href={c.href} className={`${i ? "sub " : ""}${pathname === c.href ? "active" : ""}`}>
                {i ? <L hi={c.hi} en={c.en} /> : <L hi={item.hi} en={item.en} />}
                {!i && (
                  <small>
                    <L hi={item.en} en={item.hi} />
                  </small>
                )}
              </Link>
            ))
          ) : (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : undefined}>
              <L hi={item.hi} en={item.en} />
              <small>
                <L hi={item.en} en={item.hi} />
              </small>
            </Link>
          ),
        )}
        <Link href="/contact" className="cta">
          {CTA}
        </Link>
      </div>
    </header>
  );
}
