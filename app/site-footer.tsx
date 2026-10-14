import Link from "next/link";
import L from "./lang";

type Item = { hi: string; en: string; href: string };

const COLS: { hi: string; en: string; links: Item[] }[] = [
  {
    hi: "कार्यक्रम",
    en: "Programme",
    links: [
      { hi: "कार्यक्षेत्र", en: "Work areas", href: "/work-areas" },
      { hi: "नेतृत्व सूचकांक", en: "Leadership Index", href: "/model" },
      { hi: "कार्यशालाएँ", en: "Workshops", href: "/veda-vasundhara-1" },
    ],
  },
  {
    hi: "पारदर्शिता",
    en: "Transparency",
    links: [
      { hi: "पंजीकरण", en: "Registrations", href: "/credentials" },
      { hi: "प्रमाण-पत्र", en: "Certificates", href: "/testimonials" },
      { hi: "रिपोर्ट", en: "Reports", href: "/research" },
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
  return (
    <footer className="site-footer">
      <div className="motto">
        <div>संगच्छध्वं संवदध्वं सं वो मनांसि जानताम् ॥</div>
        <div>
          <L
            hi="साथ चलें, साथ बोलें, हमारे मन एक हों — अभियान के प्रतीक-चिह्न में अंकित ध्येय वाक्य।"
            en="Move together, speak together, let our minds be of one accord — the motto carried in the campaign emblem."
          />
        </div>
      </div>
      <div className="cols">
        {COLS.map((col) => (
          <div className="col" key={col.en}>
            <div>
              <L hi={col.hi} en={col.en} />
            </div>
            {col.links.map((link) => (
              <Link key={link.en} href={link.href}>
                <L hi={link.hi} en={link.en} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
