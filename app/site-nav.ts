export type NavItem = {
  hi: string;
  en: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { hi: "दर्शन", en: "Philosophy", href: "/philosophy" },
  {
    hi: "मॉडल",
    en: "Model",
    href: "/model",
    children: [
      { label: "वेद वसुंधरा मॉडल · The Model", href: "/model" },
      { label: "दृष्टि, ध्येय एवं मूल्य · Vision & Mission", href: "/vision-mission" },
    ],
  },
  {
    hi: "कार्यक्षेत्र",
    en: "Programmes",
    href: "/work-areas",
    children: [
      { label: "कार्यक्षेत्र · Work Areas", href: "/work-areas" },
      { label: "वेद वसुंधरा 1.0", href: "/veda-vasundhara-1" },
    ],
  },
  { hi: "प्रभाव", en: "Impact", href: "/impact" },
  { hi: "पहल", en: "Initiatives", href: "/initiatives" },
  {
    hi: "संस्थापक",
    en: "Founder",
    href: "/founder",
    children: [
      { label: "संस्थापक · Founder", href: "/founder" },
      { label: "शोध एवं प्रकाशन · Research", href: "/research" },
    ],
  },
  { hi: "संस्था", en: "Institution", href: "/organisation" },
  { hi: "मीडिया", en: "Media", href: "/media" },
  {
    hi: "सहयोग",
    en: "Support",
    href: "/partner",
    children: [
      { label: "सहयोग · Partner with us", href: "/partner" },
      { label: "जन-सहयोग · Crowdfunding", href: "/crowdfunding" },
    ],
  },
  {
    hi: "प्रमाण",
    en: "Credentials",
    href: "/credentials",
    children: [
      { label: "प्रमाण · Credentials", href: "/credentials" },
      { label: "प्रशंसा-पत्र · Testimonials", href: "/testimonials" },
    ],
  },
  { hi: "संपर्क", en: "Contact", href: "/contact" },
];

export function isActive(item: NavItem, pathname: string) {
  return [item.href, ...(item.children ?? []).map((c) => c.href)].includes(pathname);
}
