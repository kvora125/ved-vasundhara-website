"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import L from "./lang";
import { langFromPath, localHref } from "./i18n";
import { ORG } from "./org";
import { ANALYTICS_ENABLED, openConsentSettings } from "./consent";

type Item = { hi: string; en: string; href: string };

const COLS: { hi: string; en: string; links: Item[] }[] = [
  {
    hi: "कार्यक्रम",
    en: "Programme",
    links: [
      { hi: "कार्यक्षेत्र", en: "Work areas", href: "/work-areas" },
      { hi: "नेतृत्व सूचकांक", en: "Leadership Index", href: "/model" },
      { hi: "कार्यशालाएँ", en: "Workshops", href: "/veda-vasundhara-1" },
      { hi: "कार्यक्रम एवं आयोजन", en: "Events", href: "/events" },
    ],
  },
  {
    hi: "पारदर्शिता",
    en: "Transparency",
    links: [
      { hi: "पंजीकरण", en: "Registrations", href: "/credentials" },
      { hi: "प्रमाण-पत्र", en: "Certificates", href: "/testimonials" },
      { hi: "रिपोर्ट", en: "Reports", href: "/research" },
      { hi: "गोपनीयता नीति", en: "Privacy policy", href: "/privacy" },
    ],
  },
  {
    hi: "संपर्क",
    en: "Contact",
    links: [
      { hi: "साझेदारी करें", en: "Partner with us", href: "/partner" },
      { hi: "मीडिया पूछताछ", en: "Media enquiries", href: "/contact" },
      { hi: "स्वयंसेवा", en: "Volunteer", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  const lang = langFromPath(usePathname());
  return (
    <footer className="site-footer">
      <div className="motto">
        <div>संगच्छध्वं संवदध्वं सं वो मनांसि जानताम् ॥</div>
        <div>
          <L
            lang={lang}
            hi="साथ चलें, साथ बोलें, हमारे मन एक हों — अभियान के प्रतीक-चिह्न में अंकित ध्येय वाक्य।"
            en="Move together, speak together, let our minds be of one accord — the motto carried in the campaign emblem."
          />
        </div>
        <address className="footer-contact">
          <a href={`tel:${ORG.phone}`}>{ORG.phoneDisplay}</a>
          <a href={`mailto:${ORG.email}`}>{ORG.email}</a>
          <a href={ORG.instagram} target="_blank" rel="noopener noreferrer">
            Instagram {ORG.instagramHandle}
          </a>
        </address>
      </div>
      <div className="cols">
        {COLS.map((col) => (
          <div className="col" key={col.en}>
            <div>
              <L lang={lang} hi={col.hi} en={col.en} />
            </div>
            {col.links.map((link) => (
              <Link key={link.en} href={localHref(lang, link.href)}>
                <L lang={lang} hi={link.hi} en={link.en} />
              </Link>
            ))}
            {col.en === "Transparency" && ANALYTICS_ENABLED && (
              <button type="button" className="footer-link-btn" onClick={openConsentSettings}>
                <L lang={lang} hi="कुकी सेटिंग्स" en="Cookie settings" />
              </button>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
