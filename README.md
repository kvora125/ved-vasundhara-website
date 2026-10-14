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

Every piece of text exists in both languages: pages render `<L en="…" hi="…" />` (`app/lang.tsx`), which outputs
both versions, and CSS shows the one matching `<html data-lang>`. The EN / हिं buttons in the header
(`app/lang-client.ts`) switch it and remember the choice in `localStorage`; a small script in `<head>`
(`app/lang-init.ts`) applies the saved choice before first paint. Hindi is the default.
To edit copy, change both `en` and `hi` on the same `<L>`.

## Enquiry form

The site is a static export, so the forms post JSON directly to `NEXT_PUBLIC_ENQUIRY_ENDPOINT`
(a CORS-enabled form service such as Formspree). Locally, set it in `.env.local` (see `.env.example`);
for the deployed site, add it as a repository variable (Settings → Secrets and variables → Actions → Variables).
Without it the form shows a "could not be sent" message.

## Deployment

`.github/workflows/deploy.yml` builds the static export and publishes it to GitHub Pages on every push to `main`
(including merged pull requests). Pull requests targeting `main` are built as a check but not published.
