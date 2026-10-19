# Google Sheet admin — setup guide

The website's **News & Updates**, **Events**, **Photo Gallery** and **latest Press coverage** are managed from one
Google Sheet owned by **syuvaadarshsamiti@gmail.com**. Editors never touch code:

1. Choose the language they are writing in (हिंदी or English) and fill in only that language.
2. Google Translate fills the other language automatically; the row turns yellow (**Review translation**).
3. An editor checks and corrects the translation, then sets **Status → Approved**.
4. Within ~5–10 minutes the website rebuilds and the item is live in both languages. The site also rebuilds daily
   at 6 AM IST, and the Sheet menu has **🌐 Website → Publish now**.

Only **Approved** rows ever reach the website. Drafts stay private.

---

## One-time setup (about 20 minutes)

Do all of this **signed in as syuvaadarshsamiti@gmail.com**.

### 1. Create the Sheet and its script

1. Go to <https://sheets.new> — a blank Google Sheet opens. Name it **Veda Vasundhara — Website content**.
2. Menu **Extensions → Apps Script**. Delete everything in `Code.gs`.
3. Copy the whole of [`cms/apps-script/Code.gs`](apps-script/Code.gs) from this repository and paste it in. Click **Save** (💾).
4. In the toolbar's function dropdown pick **`setupSheet`** and click **Run**.
   Google asks for permission: **Review permissions → choose the account → Advanced → Go to (unsafe) → Allow**.
   ("Unsafe" only means Google hasn't reviewed this private script.)
   The script needs: the Sheet (to read rows), Drive (to share approved photos as view-only links),
   Google Translate, and internet access (to tell GitHub to rebuild).
5. Back in the Sheet you now have the tabs **How to use / निर्देश, News, Events, Gallery, Press**, with dropdowns.
   Reload the Sheet once to see the **🌐 Website / वेबसाइट** menu.

### 2. Publish the read-only endpoint the website builds from

1. In Apps Script: **Deploy → New deployment → ⚙ Select type → Web app**.
2. Description: `website feed`. **Execute as: Me**. **Who has access: Anyone**. Click **Deploy**.
3. Copy the **Web app URL** (ends in `/exec`).
   *It only ever returns rows marked Approved — the same content that is public on the website.*
4. Add it to the website repository as a variable:
   GitHub → `kvora125/ved-vasundhara-website` → **Settings → Secrets and variables → Actions → Variables →
   New repository variable** — Name `CMS_ENDPOINT`, Value = the web app URL.

> If you later change `Code.gs`, use **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**
> so the URL stays the same.

### 3. Let the Sheet trigger a rebuild

1. On GitHub (account that owns the repository): **Settings → Developer settings → Personal access tokens →
   Fine-grained tokens → Generate new token**.
   - Name: `sheet-publish` · Expiration: 1 year (set a reminder to renew)
   - Repository access: **Only select repositories → ved-vasundhara-website**
   - Permissions → Repository permissions → **Actions: Read and write** (nothing else)
2. Copy the token (starts with `github_pat_`).
3. In Apps Script: **Project Settings (⚙) → Script properties → Add script property** — Property `GITHUB_TOKEN`,
   Value = the token. **Save**.
4. Test: in the Sheet use **🌐 Website → Publish now**. On GitHub → **Actions** a "Deploy to GitHub Pages" run
   should start.

### 4. Share with editors

**Share** the Sheet with each editor as **Editor**. Each editor can then add rows; the How to use tab explains the
steps in Hindi and English. (Photos must be in a Google Drive the editor can share — usually upload them to a
shared folder such as *Website photos* in the syuvaadarshsamiti Drive.)

---

## How it works

| Piece | Where | What it does |
|---|---|---|
| `Code.gs` | inside the Sheet | Translates (Google `LanguageApp`), sets status, assigns IDs and permanent web addresses, shares approved photos view-only, triggers a rebuild ~2 min after the last approval/edit, serves Approved rows as JSON (`doGet`) |
| `scripts/fetch-cms.mjs` | website build | Reads `CMS_ENDPOINT`, downloads photos from Drive, converts to WebP, writes `content/cms.json` |
| `app/cms.ts`, `app/_content/cms-pages.tsx` | website | Renders `/updates`, `/events`, `/gallery` (+ `/en/…`) and "Latest coverage" on `/media` |
| `.github/workflows/deploy.yml` | GitHub | Daily 06:00 IST build, manual "Run workflow", and the Sheet's publish trigger |

**Safety:** if the endpoint can't be reached, the build fails on purpose and the live site keeps its last good
version (it is never replaced with empty pages).

**Removing something:** set its Status to **Hidden / छिपाएँ** — don't delete the row. It disappears from the site on the
next rebuild.

**Web addresses:** a row's address (e.g. `/updates/three-day-workshop-lucknow/`) is created from the English
title the first time it is approved and never changes afterwards, so shared links keep working.
