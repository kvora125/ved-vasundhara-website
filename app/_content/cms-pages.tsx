import Link from "next/link";
import { asset } from "../asset";
import { formatDate, formatRange, getAlbums, getEvents, getNews, getPress, type EventItem, type NewsItem, type Photo } from "../cms";
import { localHref, type Lang } from "../i18n";
import L from "../lang";

const SECTION = { padding: "clamp(28px, 4.4vw, 64px) clamp(20px, 3.9vw, 56px)" } as const;
const EYEBROW = { fontSize: "12px", letterSpacing: ".3em", textTransform: "uppercase", color: "#9B1C1C", marginBottom: "14px" } as const;
const H1 = { fontFamily: "'Marcellus','Noto Sans Devanagari',serif", fontSize: "clamp(28px, 3.2vw, 46px)", lineHeight: 1.2, margin: 0 } as const;
const MUTED = { fontSize: "14px", color: "#6E6459" } as const;
const CARD = { display: "block", background: "#FFFCF6", border: "1px solid #E2D9C8", color: "inherit", textDecoration: "none" } as const;

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} style={{ margin: "0 0 16px", fontSize: "18px", lineHeight: 1.85, color: "#4A423A", whiteSpace: "pre-line" }}>
            {p}
          </p>
        ))}
    </>
  );
}

function Img({ photo, alt, height, eager }: { photo: Photo; alt: string; height?: string; eager?: boolean }) {
  return (
    <img
      src={asset(photo.src)}
      alt={alt}
      width={photo.width}
      height={photo.height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      style={{ width: "100%", height: height ?? "auto", objectFit: "cover", display: "block" }}
    />
  );
}

function PageHead({ lang, eyebrow, title, intro }: { lang: Lang; eyebrow: [string, string]; title: [string, string]; intro?: [string, string] }) {
  return (
    <div style={{ ...SECTION, background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
      <div style={EYEBROW}>
        <L lang={lang} hi={eyebrow[0]} en={eyebrow[1]} />
      </div>
      <h1 style={H1}>
        <L lang={lang} hi={title[0]} en={title[1]} />
      </h1>
      {intro && (
        <p style={{ margin: "14px 0 0", fontSize: "18px", lineHeight: 1.7, color: "#6E6459", maxWidth: "820px" }}>
          <L lang={lang} hi={intro[0]} en={intro[1]} />
        </p>
      )}
    </div>
  );
}

function Empty({ lang, hi, en }: { lang: Lang; hi: string; en: string }) {
  return (
    <p style={{ ...MUTED, fontSize: "17px", margin: 0, padding: "28px", background: "#FFFCF6", border: "1px dashed #DED5C6" }}>
      <L lang={lang} hi={hi} en={en} />
    </p>
  );
}

// ---------- News & updates ----------

function NewsCard({ item, lang }: { item: NewsItem; lang: Lang }) {
  return (
    <Link href={localHref(lang, `/updates/${item.slug}`)} style={CARD}>
      {item.photos[0] && <Img photo={item.photos[0]} alt={item.title[lang]} height="220px" />}
      <div style={{ padding: "18px 20px 20px" }}>
        <div style={MUTED}>{formatDate(item.date, lang)}</div>
        <h2 style={{ margin: "6px 0 8px", fontSize: "20px", lineHeight: 1.45, fontWeight: 600 }}>{item.title[lang]}</h2>
        <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#4A423A" }}>{item.summary[lang]}</p>
      </div>
    </Link>
  );
}

export function UpdatesList({ lang }: { lang: Lang }) {
  const news = getNews();
  return (
    <>
      <PageHead
        lang={lang}
        eyebrow={["समाचार एवं अपडेट", "News & updates"]}
        title={["नवीनतम समाचार एवं गतिविधियाँ", "Latest news and activities"]}
        intro={[
          "कार्यशालाओं, आयोजनों और उपलब्धियों की ताज़ा जानकारी — तिथि अनुसार।",
          "Fresh reports from our workshops, events and milestones — newest first.",
        ]}
      />
      <div style={SECTION}>
        {news.length === 0 ? (
          <Empty lang={lang} hi="शीघ्र ही यहाँ नए समाचार प्रकाशित होंगे।" en="New updates will be published here soon." />
        ) : (
          <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "22px" }}>
            {news.map((n) => (
              <NewsCard key={n.id} item={n} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export function UpdateDetail({ lang, item }: { lang: Lang; item: NewsItem }) {
  return (
    <article>
      <div style={{ ...SECTION, background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <Link href={localHref(lang, "/updates")} style={{ ...MUTED, color: "#9B1C1C", fontWeight: 600 }}>
          <L lang={lang} hi="← सभी समाचार" en="← All updates" />
        </Link>
        <div style={{ ...MUTED, margin: "18px 0 8px" }}>
          <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
        </div>
        <h1 style={H1}>{item.title[lang]}</h1>
        {item.summary[lang] && (
          <p style={{ margin: "14px 0 0", fontSize: "20px", lineHeight: 1.7, color: "#4A423A", maxWidth: "860px" }}>{item.summary[lang]}</p>
        )}
      </div>
      <div style={{ ...SECTION, maxWidth: "900px" }}>
        {item.photos[0] && (
          <div style={{ marginBottom: "26px" }}>
            <Img photo={item.photos[0]} alt={item.title[lang]} eager />
          </div>
        )}
        <Paragraphs text={item.body[lang]} />
        {item.photos.length > 1 && (
          <div className="rg2" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px", marginTop: "22px" }}>
            {item.photos.slice(1).map((p, i) => (
              <a key={p.src} href={asset(p.src)} target="_blank" rel="noopener noreferrer">
                <Img photo={p} alt={`${item.title[lang]} — ${i + 2}`} height="180px" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// ---------- Events ----------

function EventCard({ item, lang }: { item: EventItem; lang: Lang }) {
  const place = [item.venue[lang], item.city[lang]].filter(Boolean).join(", ");
  return (
    <Link href={localHref(lang, `/events/${item.slug}`)} style={{ ...CARD, display: "grid", gridTemplateColumns: "140px minmax(0,1fr)" }} className="rg1">
      <div style={{ background: "#16110D", color: "#F6F1E7", padding: "18px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: "'Marcellus',serif", fontSize: "38px", lineHeight: 1 }}>{Number(item.start.slice(8, 10))}</div>
        <div style={{ fontSize: "14px", marginTop: "4px" }}>{formatDate(item.start, lang).replace(/^\d+ /, "")}</div>
        {item.time && <div style={{ fontSize: "13px", color: "#E8B24C", marginTop: "6px" }}>{item.time}</div>}
      </div>
      <div style={{ padding: "18px 20px" }}>
        <h3 style={{ margin: "0 0 6px", fontSize: "20px", lineHeight: 1.45, fontWeight: 600 }}>{item.title[lang]}</h3>
        {place && <div style={MUTED}>{place}</div>}
        {item.summary[lang] && <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: 1.7, color: "#4A423A" }}>{item.summary[lang]}</p>}
      </div>
    </Link>
  );
}

export function EventsList({ lang }: { lang: Lang }) {
  const { upcoming, past } = getEvents();
  return (
    <>
      <PageHead
        lang={lang}
        eyebrow={["कार्यक्रम", "Events"]}
        title={["आगामी कार्यशालाएँ एवं कार्यक्रम", "Upcoming workshops and events"]}
        intro={[
          "अपने विद्यालय, महाविद्यालय या संस्था में कार्यशाला आयोजित करने हेतु संपर्क करें।",
          "Want a workshop at your school, college or organisation? Get in touch.",
        ]}
      />
      <div style={SECTION}>
        <h2 style={{ ...H1, fontSize: "clamp(22px, 2.2vw, 32px)", marginBottom: "18px" }}>
          <L lang={lang} hi="आगामी" en="Upcoming" />
        </h2>
        {upcoming.length === 0 ? (
          <Empty lang={lang} hi="अभी कोई आगामी कार्यक्रम घोषित नहीं है।" en="No upcoming events have been announced yet." />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {upcoming.map((e) => (
              <EventCard key={e.id} item={e} lang={lang} />
            ))}
          </div>
        )}
        {past.length > 0 && (
          <>
            <h2 style={{ ...H1, fontSize: "clamp(22px, 2.2vw, 32px)", margin: "40px 0 18px" }}>
              <L lang={lang} hi="संपन्न कार्यक्रम" en="Past events" />
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {past.map((e) => (
                <EventCard key={e.id} item={e} lang={lang} />
              ))}
            </div>
          </>
        )}
        <p style={{ margin: "28px 0 0" }}>
          <Link href={localHref(lang, "/contact")} style={{ display: "inline-block", background: "#9B1C1C", color: "#FDF6EA", padding: "13px 22px", fontWeight: 600 }}>
            <L lang={lang} hi="कार्यशाला हेतु संपर्क करें" en="Request a workshop" />
          </Link>
        </p>
      </div>
    </>
  );
}

export function EventDetail({ lang, item }: { lang: Lang; item: EventItem }) {
  const place = [item.venue[lang], item.city[lang]].filter(Boolean).join(", ");
  return (
    <article>
      <div style={{ ...SECTION, background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
        <Link href={localHref(lang, "/events")} style={{ ...MUTED, color: "#9B1C1C", fontWeight: 600 }}>
          <L lang={lang} hi="← सभी कार्यक्रम" en="← All events" />
        </Link>
        <h1 style={{ ...H1, marginTop: "18px" }}>{item.title[lang]}</h1>
        <dl style={{ display: "flex", flexWrap: "wrap", gap: "10px 36px", margin: "18px 0 0", fontSize: "16px" }}>
          <div>
            <dt style={MUTED}>
              <L lang={lang} hi="तिथि" en="Date" />
            </dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>
              {formatRange(item.start, item.end, lang)}
              {item.time ? ` · ${item.time}` : ""}
            </dd>
          </div>
          {place && (
            <div>
              <dt style={MUTED}>
                <L lang={lang} hi="स्थान" en="Venue" />
              </dt>
              <dd style={{ margin: 0, fontWeight: 600 }}>{place}</dd>
            </div>
          )}
        </dl>
        {item.registrationUrl && (
          <a
            href={item.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", marginTop: "22px", background: "#C8651B", color: "#16110D", padding: "13px 22px", fontWeight: 600 }}
          >
            <L lang={lang} hi="पंजीकरण करें ↗" en="Register ↗" />
          </a>
        )}
      </div>
      <div style={{ ...SECTION, maxWidth: "900px" }}>
        {item.photos[0] && (
          <div style={{ marginBottom: "26px" }}>
            <Img photo={item.photos[0]} alt={item.title[lang]} eager />
          </div>
        )}
        {item.summary[lang] && <p style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: 1.7 }}>{item.summary[lang]}</p>}
        <Paragraphs text={item.body[lang]} />
        {item.photos.length > 1 && (
          <div className="rg2" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px", marginTop: "22px" }}>
            {item.photos.slice(1).map((p, i) => (
              <a key={p.src} href={asset(p.src)} target="_blank" rel="noopener noreferrer">
                <Img photo={p} alt={`${item.title[lang]} — ${i + 2}`} height="180px" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// ---------- Gallery ----------

export function GalleryPage({ lang }: { lang: Lang }) {
  const albums = getAlbums();
  return (
    <>
      <PageHead
        lang={lang}
        eyebrow={["फोटो गैलरी", "Photo gallery"]}
        title={["कार्यक्रमों की झलकियाँ", "Highlights from our programmes"]}
      />
      <div style={SECTION}>
        {albums.length === 0 ? (
          <Empty lang={lang} hi="फोटो एल्बम शीघ्र ही यहाँ जोड़े जाएँगे।" en="Photo albums will be added here soon." />
        ) : (
          albums.map((a) => (
            <section key={a.id} id={a.slug} style={{ marginBottom: "44px" }}>
              <h2 style={{ ...H1, fontSize: "clamp(22px, 2.2vw, 30px)" }}>{a.title[lang]}</h2>
              <div style={{ ...MUTED, margin: "6px 0 14px" }}>
                {formatDate(a.date, lang)}
                {a.caption[lang] ? ` · ${a.caption[lang]}` : ""}
              </div>
              <div className="rg2" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
                {a.photos.map((p, i) => (
                  <a key={p.src} href={asset(p.src)} target="_blank" rel="noopener noreferrer">
                    <Img photo={p} alt={`${a.title[lang]} — ${i + 1}`} height="200px" />
                  </a>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </>
  );
}

// ---------- Latest press (shown at the top of the Media page) ----------

export function LatestPress({ lang }: { lang: Lang }) {
  const press = getPress();
  if (press.length === 0) return null;
  return (
    <div style={{ ...SECTION, background: "#FFFCF6", borderBottom: "1px solid #E2D9C8" }}>
      <h2 style={{ ...H1, fontSize: "clamp(22px, 2.2vw, 32px)", marginBottom: "18px" }}>
        <L lang={lang} hi="नवीनतम कवरेज" en="Latest coverage" />
      </h2>
      <div className="rg1" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "18px" }}>
        {press.map((p) => {
          const href = p.url || (p.image ? asset(p.image.src) : "");
          const inner = (
            <>
              {p.image && <Img photo={p.image} alt={p.headline[lang]} height="200px" />}
              <div style={{ padding: "16px 18px" }}>
                <div style={MUTED}>
                  {p.publication[lang]} · {formatDate(p.date, lang)}
                </div>
                <h3 style={{ margin: "6px 0 0", fontSize: "17px", lineHeight: 1.5, fontWeight: 600 }}>{p.headline[lang]}</h3>
              </div>
            </>
          );
          return href ? (
            <a key={p.id} href={href} target="_blank" rel="noopener noreferrer" style={CARD}>
              {inner}
            </a>
          ) : (
            <div key={p.id} style={CARD}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
