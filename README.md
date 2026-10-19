# वेद वसुंधरा मॉडल — website

Next.js site for the Veda Vasundhara Model (Sanskarit Yuva Aadarsh Samiti), built from the Claude Design mockup "Ved Vasundhara Website".

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Structure

- `app/<route>/page.tsx` — one page per design screen (desktop 1440 layout, fluid down to mobile).
- `app/site-header.tsx`, `app/site-footer.tsx`, `app/site-nav.ts` — shared chrome and navigation.
- `app/globals.css` — palette, header/footer, and the responsive classes used by the pages
  (`rg1`/`rg2`/`rgw` grids, `rf`/`rfw` rows, `tbl` tables).
- `app/enquiry-form.tsx` — contact and partner forms.
- `app/asset.ts` — prefixes `/assets/...` URLs with the Pages base path.
- `public/assets/` — photos, scans, PDFs and videos used by the pages.

## Languages (EN / हिं)

Each page exists twice: Hindi at `/…` and English at `/en/…` (e.g. `/model/` and `/en/model/`). Page content lives in
`app/_content/<page>.tsx` and takes a `lang` prop; every text is written as `<L lang={lang} en="…" hi="…" />`
(`app/lang.tsx`), so to edit copy change both `en` and `hi` on the same `<L>`. The route files under `app/` and
`app/en/` only pick the language and set metadata.

- The EN / हिं links in the header go to the same page in the other language and remember the choice.
  A visitor who chose English is sent from Hindi URLs to `/en/…` on later visits (`app/lang-pref.ts`);
  search engines never carry that choice, so both versions stay indexable.
- Every page has its own title, description, canonical URL and `hreflang` pair (`app/seo-pages.ts`, `app/seo.ts`).

## SEO

- `app/seo-pages.ts` — title (≤ 60 chars) and description (≤ 160) per page and language.
- `app/seo.ts` — metadata (canonical, hreflang, Open Graph/Twitter) and schema.org JSON-LD: NGO, WebSite,
  founder (Person), books, breadcrumbs, and NewsArticle/Event for Sheet content. Public contact details: `app/org.ts`.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, icons in `app/` and `public/icons/`, share image `public/og/`.
- Fonts are self-hosted (`app/fonts.css`, `public/fonts/`); images carry width/height and lazy-load below the fold.

## Content admin (Google Sheet)

News, events, photo albums and new press coverage are added in a Google Sheet — see [`cms/README.md`](cms/README.md).
`npm run build` runs `scripts/fetch-cms.mjs` first, which pulls approved rows from `CMS_ENDPOINT`.

## Analytics (GA4)

`app/consent.tsx` shows a bilingual consent banner; Google Analytics loads only after "Accept". It is off until the
`NEXT_PUBLIC_GA_ID` repository variable (e.g. `G-XXXXXXXXXX`) is set. "Cookie settings" in the footer reopens the banner.

## Enquiry form

The site is a static export, so the Contact and Partner forms post JSON directly to `NEXT_PUBLIC_ENQUIRY_ENDPOINT`.
It is set as a repository variable (Settings → Secrets and variables → Actions → Variables) to
`https://formsubmit.co/ajax/syuvaadarshsamiti@gmail.com`: FormSubmit emails each enquiry to that address, with the
sender as Reply-To. The very first submission triggers a one-time **activation email** to that inbox — click
"Activate Form" in it; until then submissions are not delivered. After activation FormSubmit offers a random
alias for the address; replace the email in the variable with it to keep the address out of the page's JavaScript,
then re-run the deploy workflow. Locally, set the variable in `.env.local` (see `.env.example`).

## Deployment

`.github/workflows/deploy.yml` builds the static export and publishes it to GitHub Pages on every push to `main`
(including merged pull requests). Pull requests targeting `main` are built as a check but not published.

The site is served at **https://www.vedvasundharamodel.org.in/** (custom domain set under Settings → Pages,
HTTPS enforced; DNS at Hostinger: `www` CNAME → `kvora125.github.io`, apex A/AAAA → GitHub Pages IPs).
The build reads the URL prefix from the Pages settings, so **after changing the custom domain, re-run the
workflow** (Actions → Deploy to GitHub Pages → Run workflow); otherwise CSS and images keep the old path and 404.
