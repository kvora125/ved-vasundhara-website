"use client";

import { asset } from "./asset";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, isActive } from "./site-nav";

function LangBadge() {
  return (
    <span className="lang" aria-label="Language: English and Hindi">
      <b>EN</b>
      <i>|</i>
      <span>हिं</span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <img src={asset("/assets/logo-192.png")} alt="वेद वसुंधरा मॉडल" />
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <div className="brand-name">वेद वसुंधरा मॉडल</div>
          <div className="brand-sub">Sanskarit Yuva Aadarsh Samiti</div>
        </div>
      </Link>

      <nav className="nav" aria-label="Main">
        {NAV.map((item) => (
          <div className="nav-item" key={item.href}>
            <Link href={item.href} className={`nav-link${isActive(item, pathname) ? " active" : ""}`}>
              <span className="hi">{item.hi}</span>
              <span className="en">{item.en}</span>
            </Link>
            {item.children && (
              <div className="nav-sub">
                {item.children.map((c) => (
                  <Link key={c.href} href={c.href} className={pathname === c.href ? "active" : undefined}>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <LangBadge />
      </nav>

      <Link href="/contact" className="cta">
        कार्यशाला से जुड़ें
      </Link>

      <div className="header-right">
        <LangBadge />
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
                {i ? c.label : item.hi}
                {!i && <small>{item.en}</small>}
              </Link>
            ))
          ) : (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : undefined}>
              {item.hi}
              <small>{item.en}</small>
            </Link>
          ),
        )}
        <Link href="/contact" className="cta">
          कार्यशाला से जुड़ें
        </Link>
      </div>
    </header>
  );
}
