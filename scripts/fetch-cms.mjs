// Pulls approved content from the Google Sheet admin and prepares it for the build.
//
// CMS_ENDPOINT is the Apps Script web-app URL (cms/apps-script/Code.gs). It returns only
// rows marked "Approved". Photos are downloaded from Google Drive, resized to WebP and
// written to public/cms/; text goes to content/cms.json, which app/cms.ts reads.
//
// Without CMS_ENDPOINT (local development) an existing content/cms.json is kept, or an
// empty one is written. If the endpoint is set but fails, the build fails on purpose so a
// broken fetch never replaces the live site with empty pages.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT_JSON = path.join(ROOT, "content", "cms.json");
const OUT_IMG = path.join(ROOT, "public", "cms");
const ENDPOINT = process.env.CMS_ENDPOINT?.trim();

const EMPTY = { updatedAt: "", news: [], events: [], gallery: [], press: [] };

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

const text = (v) => ({ hi: String(v?.hi ?? "").trim(), en: String(v?.en ?? "").trim() });
// Fill a missing language from the other so a page never renders blank.
const filled = (v) => {
  const t = text(v);
  return { hi: t.hi || t.en, en: t.en || t.hi };
};
const slugify = (s) =>
  String(s ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
const isoDate = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(String(s ?? "")) ? String(s) : "");
const httpUrl = (s) => (/^https?:\/\//.test(String(s ?? "").trim()) ? String(s).trim() : "");

const photoCache = new Map();

async function photo(fileId) {
  const id = String(fileId ?? "").replace(/[^A-Za-z0-9_-]/g, "");
  if (!id) return null;
  if (photoCache.has(id)) return photoCache.get(id);
  const job = (async () => {
    const file = path.join(OUT_IMG, `${id}.webp`);
    try {
      const res = await fetch(`https://drive.google.com/uc?export=download&id=${id}`, { redirect: "follow" });
      const type = res.headers.get("content-type") || "";
      if (!res.ok || !type.startsWith("image/")) throw new Error(`HTTP ${res.status} ${type}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const info = await sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(file);
      return { src: `/cms/${id}.webp`, width: info.width, height: info.height };
    } catch (err) {
      console.warn(`[cms] skipped photo ${id}: ${err.message} (is it shared "Anyone with the link"?)`);
      return null;
    }
  })();
  photoCache.set(id, job);
  return job;
}

async function photos(ids) {
  const list = Array.isArray(ids) ? ids : [];
  const out = [];
  for (const id of list) {
    const p = await photo(id);
    if (p) out.push(p);
  }
  return out;
}

function uniqueSlug(base, id, used) {
  let slug = slugify(base) || slugify(id) || "item";
  if (used.has(slug)) slug = `${slug}-${slugify(id) || used.size}`;
  used.add(slug);
  return slug;
}

async function main() {
  if (!ENDPOINT) {
    if (!(await exists(OUT_JSON))) {
      await fs.mkdir(path.dirname(OUT_JSON), { recursive: true });
      await fs.writeFile(OUT_JSON, JSON.stringify(EMPTY, null, 2));
    }
    console.log("[cms] CMS_ENDPOINT not set — using", (await exists(OUT_JSON)) ? "existing content/cms.json" : "empty content");
    return;
  }

  const res = await fetch(ENDPOINT, { redirect: "follow" });
  if (!res.ok) throw new Error(`[cms] endpoint returned HTTP ${res.status}`);
  const raw = await res.json();
  if (raw.error) throw new Error(`[cms] endpoint error: ${raw.error}`);

  await fs.rm(OUT_IMG, { recursive: true, force: true });
  await fs.mkdir(OUT_IMG, { recursive: true });

  const newsSlugs = new Set();
  const news = [];
  for (const n of raw.news ?? []) {
    const date = isoDate(n.date);
    const title = filled(n.title);
    if (!date || !title.hi) continue;
    news.push({
      id: String(n.id),
      slug: uniqueSlug(n.slug || title.en, n.id, newsSlugs),
      date,
      title,
      summary: filled(n.summary),
      body: filled(n.body),
      photos: await photos(n.photos),
    });
  }

  const eventSlugs = new Set();
  const events = [];
  for (const e of raw.events ?? []) {
    const start = isoDate(e.start);
    const title = filled(e.title);
    if (!start || !title.hi) continue;
    events.push({
      id: String(e.id),
      slug: uniqueSlug(e.slug || `${title.en} ${start}`, e.id, eventSlugs),
      start,
      end: isoDate(e.end) || start,
      time: String(e.time ?? "").trim(),
      title,
      venue: filled(e.venue),
      city: filled(e.city),
      summary: filled(e.summary),
      body: filled(e.body),
      registrationUrl: httpUrl(e.registrationUrl),
      photos: await photos(e.photos),
    });
  }

  const albumSlugs = new Set();
  const gallery = [];
  for (const a of raw.gallery ?? []) {
    const title = filled(a.title);
    const list = await photos(a.photos);
    if (!title.hi || list.length === 0) continue;
    gallery.push({ id: String(a.id), slug: uniqueSlug(a.slug || title.en, a.id, albumSlugs), date: isoDate(a.date), title, caption: filled(a.caption), photos: list });
  }

  const press = [];
  for (const p of raw.press ?? []) {
    const headline = filled(p.headline);
    if (!headline.hi) continue;
    press.push({
      id: String(p.id),
      date: isoDate(p.date),
      publication: filled(p.publication),
      headline,
      type: String(p.type ?? "").trim(),
      url: httpUrl(p.url),
      image: p.image ? await photo(p.image) : null,
    });
  }

  const data = { updatedAt: new Date().toISOString(), news, events, gallery, press };
  await fs.mkdir(path.dirname(OUT_JSON), { recursive: true });
  await fs.writeFile(OUT_JSON, JSON.stringify(data, null, 2));
  console.log(`[cms] ${news.length} updates, ${events.length} events, ${gallery.length} albums, ${press.length} press items, ${photoCache.size} photos`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
