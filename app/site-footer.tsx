import Link from "next/link";

const COLS = [
  {
    title: "Programme",
    links: [
      ["Work areas", "/work-areas"],
      ["Leadership Index", "/model"],
      ["Workshops", "/veda-vasundhara-1"],
    ],
  },
  {
    title: "Transparency",
    links: [
      ["Registrations", "/credentials"],
      ["Certificates", "/testimonials"],
      ["Reports", "/research"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["Partner with us", "/partner"],
      ["Media enquiries", "/contact"],
      ["Volunteer", "/contact"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="motto">
        <div>संगच्छध्वं संवदध्वं सं वो मनांसि जानताम् ॥</div>
        <div>Move together, speak together, let our minds be of one accord — the motto carried in the campaign emblem.</div>
      </div>
      <div className="cols">
        {COLS.map((col) => (
          <div className="col" key={col.title}>
            <div>{col.title}</div>
            {col.links.map(([label, href]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
