export type NavItem = {
  hi: string;
  en: string;
  href: string;
  children?: { hi: string; en: string; href: string }[];
};

export const NAV: NavItem[] = [
  { hi: "दर्शन", en: "Philosophy", href: "/philosophy" },
  {
    hi: "मॉडल",
    en: "Model",
    href: "/model",
    children: [
      { hi: "वेद वसुंधरा मॉडल", en: "The Model", href: "/model" },
      { hi: "दृष्टि, ध्येय एवं मूल्य", en: "Vision, Mission & Values", href: "/vision-mission" },
    ],
  },
  {
    hi: "कार्यक्षेत्र",
    en: "Programmes",
    href: "/work-areas",
    children: [
      { hi: "कार्यक्षेत्र", en: "Work Areas", href: "/work-areas" },
      { hi: "वेद वसुंधरा 1.0", en: "Veda Vasundhara 1.0", href: "/veda-vasundhara-1" },
    ],
  },
  { hi: "प्रभाव", en: "Impact", href: "/impact" },
  { hi: "पहल", en: "Initiatives", href: "/initiatives" },
  {
    hi: "संस्थापक",
    en: "Founder",
    href: "/founder",
    children: [
      { hi: "संस्थापक", en: "Founder", href: "/founder" },
      { hi: "शोध एवं प्रकाशन", en: "Research & Publications", href: "/research" },
    ],
  },
  { hi: "संस्था", en: "Institution", href: "/organisation" },
  { hi: "मीडिया", en: "Media", href: "/media" },
  {
    hi: "सहयोग",
    en: "Support",
    href: "/partner",
    children: [
      { hi: "सहयोग", en: "Partner with us", href: "/partner" },
      { hi: "जन-सहयोग", en: "Crowdfunding", href: "/crowdfunding" },
    ],
  },
  {
    hi: "प्रमाण",
    en: "Credentials",
    href: "/credentials",
    children: [
      { hi: "प्रमाण", en: "Credentials", href: "/credentials" },
      { hi: "प्रशंसा-पत्र", en: "Testimonials", href: "/testimonials" },
    ],
  },
  { hi: "संपर्क", en: "Contact", href: "/contact" },
];

export function isActive(item: NavItem, pathname: string) {
  return [item.href, ...(item.children ?? []).map((c) => c.href)].includes(pathname);
}
