/**
 * Veda Vasundhara Model — Google Sheet admin (Apps Script, bound to the Sheet).
 *
 * Editors add News, Events, Gallery albums and Press items in the Sheet. They pick the
 * language they write in; Google Translate fills the other language and the row moves to
 * "Review translation". When an editor sets the row to "Approved", its photos are shared
 * as view-only links, it gets a permanent web address, and the website rebuilds within
 * ~5 minutes. Only Approved rows are ever served to the website (doGet).
 *
 * Setup: see cms/README.md in the website repository.
 */

const CONFIG = {
  GITHUB_REPO: 'kvora125/ved-vasundhara-website',
  WORKFLOW_FILE: 'deploy.yml',
  BRANCH: 'main',
  TIMEZONE: 'Asia/Kolkata',
  // Wait this long after the last change before rebuilding, so a burst of edits deploys once.
  QUIET_MINUTES: 2,
};

const STATUS = {
  DRAFT: 'Draft / ड्राफ्ट',
  REVIEW: 'Review translation / अनुवाद जाँचें',
  APPROVED: 'Approved / स्वीकृत — प्रकाशित करें',
  HIDDEN: 'Hidden / छिपाएँ',
};
const LANG_HI = 'हिंदी (Hindi)';
const LANG_EN = 'English (अंग्रेज़ी)';

// Column order per tab. Labels are what editors see; keys are used by the script.
// Do not rename or reorder header cells — the script finds columns by these labels.
const TABS = {
  News: {
    prefix: 'N',
    translatable: ['title', 'summary', 'body'],
    columns: [
      ['id', 'ID (auto)'],
      ['status', 'Status / स्थिति'],
      ['writtenIn', 'Written in / लेखन भाषा'],
      ['date', 'Date / तिथि'],
      ['title_hi', 'Title (Hindi) / शीर्षक (हिंदी)'],
      ['title_en', 'Title (English) / शीर्षक (अंग्रेज़ी)'],
      ['summary_hi', 'Short summary (Hindi) / सारांश (हिंदी)'],
      ['summary_en', 'Short summary (English) / सारांश (अंग्रेज़ी)'],
      ['body_hi', 'Full text (Hindi) / पूरा विवरण (हिंदी)'],
      ['body_en', 'Full text (English) / पूरा विवरण (अंग्रेज़ी)'],
      ['photos', 'Photos — Google Drive links / फोटो लिंक'],
      ['slug', 'Web address (auto) / वेब पता'],
    ],
  },
  Events: {
    prefix: 'E',
    translatable: ['title', 'venue', 'city', 'summary', 'body'],
    columns: [
      ['id', 'ID (auto)'],
      ['status', 'Status / स्थिति'],
      ['writtenIn', 'Written in / लेखन भाषा'],
      ['start', 'Start date / आरंभ तिथि'],
      ['end', 'End date / समाप्ति तिथि'],
      ['time', 'Time / समय'],
      ['title_hi', 'Title (Hindi) / शीर्षक (हिंदी)'],
      ['title_en', 'Title (English) / शीर्षक (अंग्रेज़ी)'],
      ['venue_hi', 'Venue (Hindi) / स्थान (हिंदी)'],
      ['venue_en', 'Venue (English) / स्थान (अंग्रेज़ी)'],
      ['city_hi', 'City (Hindi) / शहर (हिंदी)'],
      ['city_en', 'City (English) / शहर (अंग्रेज़ी)'],
      ['summary_hi', 'Short summary (Hindi) / सारांश (हिंदी)'],
      ['summary_en', 'Short summary (English) / सारांश (अंग्रेज़ी)'],
      ['body_hi', 'Full details (Hindi) / पूरा विवरण (हिंदी)'],
      ['body_en', 'Full details (English) / पूरा विवरण (अंग्रेज़ी)'],
      ['registrationUrl', 'Registration link (optional) / पंजीकरण लिंक'],
      ['photos', 'Photos — Google Drive links / फोटो लिंक'],
      ['slug', 'Web address (auto) / वेब पता'],
    ],
  },
  Gallery: {
    prefix: 'G',
    translatable: ['title', 'caption'],
    columns: [
      ['id', 'ID (auto)'],
      ['status', 'Status / स्थिति'],
      ['writtenIn', 'Written in / लेखन भाषा'],
      ['date', 'Date / तिथि'],
      ['title_hi', 'Album title (Hindi) / एल्बम शीर्षक (हिंदी)'],
      ['title_en', 'Album title (English) / एल्बम शीर्षक (अंग्रेज़ी)'],
      ['caption_hi', 'Caption (Hindi) / विवरण (हिंदी)'],
      ['caption_en', 'Caption (English) / विवरण (अंग्रेज़ी)'],
      ['photos', 'Photos — Drive folder or photo links / फोटो फ़ोल्डर या लिंक'],
      ['slug', 'Web address (auto) / वेब पता'],
    ],
  },
  Press: {
    prefix: 'P',
    translatable: ['publication', 'headline'],
    columns: [
      ['id', 'ID (auto)'],
      ['status', 'Status / स्थिति'],
      ['writtenIn', 'Written in / लेखन भाषा'],
      ['date', 'Date / तिथि'],
      ['publication_hi', 'Newspaper / channel (Hindi) / समाचार पत्र (हिंदी)'],
      ['publication_en', 'Newspaper / channel (English) / समाचार पत्र (अंग्रेज़ी)'],
      ['headline_hi', 'Headline (Hindi) / शीर्षक (हिंदी)'],
      ['headline_en', 'Headline (English) / शीर्षक (अंग्रेज़ी)'],
      ['type', 'Type / प्रकार'],
      ['url', 'Link to article or video (optional) / लिंक'],
      ['image', 'Clipping photo — Drive link (optional) / कतरन फोटो'],
    ],
  },
};

const PRESS_TYPES = ['Newspaper / समाचार पत्र', 'TV / टेलीविज़न', 'Online / ऑनलाइन', 'Video / वीडियो'];

// ---------------------------------------------------------------- menu & setup

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🌐 Website / वेबसाइट')
    .addItem('Translate this row / इस पंक्ति का अनुवाद करें', 'translateSelectedRow')
    .addItem('Publish now / अभी प्रकाशित करें', 'publishNow')
    .addSeparator()
    .addItem('Set up sheet (first time only) / शीट तैयार करें', 'setupSheet')
    .addToUi();
}

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty('SHEET_ID', ss.getId());

  Object.keys(TABS).forEach(function (name) {
    const tab = TABS[name];
    const sh = ss.getSheetByName(name) || ss.insertSheet(name);
    const labels = tab.columns.map(function (c) { return c[1]; });
    sh.getRange(1, 1, 1, labels.length).setValues([labels]).setFontWeight('bold').setBackground('#16110D').setFontColor('#F6F1E7').setWrap(true);
    sh.setFrozenRows(1);
    sh.setFrozenColumns(3);
    const rows = Math.max(sh.getMaxRows() - 1, 500);
    const cols = colMap(sh);

    const statusRule = SpreadsheetApp.newDataValidation().requireValueInList(Object.values(STATUS), true).build();
    sh.getRange(2, cols.status, rows, 1).setDataValidation(statusRule);
    const langRule = SpreadsheetApp.newDataValidation().requireValueInList([LANG_HI, LANG_EN], true).build();
    sh.getRange(2, cols.writtenIn, rows, 1).setDataValidation(langRule);
    ['date', 'start', 'end'].forEach(function (k) {
      if (cols[k]) {
        sh.getRange(2, cols[k], rows, 1).setNumberFormat('dd-mm-yyyy')
          .setDataValidation(SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build());
      }
    });
    if (cols.type) sh.getRange(2, cols.type, rows, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(PRESS_TYPES, true).build());
    ['id', 'slug'].forEach(function (k) { if (cols[k]) sh.getRange(2, cols[k], rows, 1).setBackground('#EDE5D6'); });
    for (let c = 1; c <= labels.length; c++) sh.setColumnWidth(c, /body|summary|caption/.test(tab.columns[c - 1][0]) ? 320 : 180);
    sh.getRange(2, 1, rows, labels.length).setWrap(true).setVerticalAlignment('top');

    // Colour rows by status so editors can see what is live.
    const range = sh.getRange(2, 1, rows, labels.length);
    const statusCol = columnLetter(cols.status);
    sh.setConditionalFormatRules([
      SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$' + statusCol + '2="' + STATUS.APPROVED + '"').setBackground('#E3F1E6').setRanges([range]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$' + statusCol + '2="' + STATUS.REVIEW + '"').setBackground('#FFF4D6').setRanges([range]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$' + statusCol + '2="' + STATUS.HIDDEN + '"').setBackground('#EEEEEE').setRanges([range]).build(),
    ]);
  });

  writeInstructions(ss);

  // Installable triggers (simple triggers cannot translate, share files or call GitHub).
  ScriptApp.getProjectTriggers().forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('handleEdit').forSpreadsheet(ss).onEdit().create();
  ScriptApp.newTrigger('publishIfPending').timeBased().everyMinutes(5).create();

  const blank = ss.getSheetByName('Sheet1');
  if (blank && blank.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(blank);
  SpreadsheetApp.getUi().alert('Sheet is ready / शीट तैयार है. Next: deploy as web app and add GITHUB_TOKEN (see cms/README.md).');
}

function writeInstructions(ss) {
  const sh = ss.getSheetByName('How to use / निर्देश') || ss.insertSheet('How to use / निर्देश', 0);
  sh.clear();
  const lines = [
    ['वेबसाइट पर सामग्री कैसे जोड़ें / How to add content to the website'],
    [''],
    ['1. सही टैब चुनें: News (समाचार), Events (कार्यक्रम), Gallery (फोटो एल्बम), Press (प्रेस कवरेज)। / Pick the right tab.'],
    ['2. नई पंक्ति में "लेखन भाषा" चुनें — हिंदी या English। / In a new row, choose the language you are writing in.'],
    ['3. केवल उसी भाषा के कॉलम भरें। दूसरी भाषा का अनुवाद अपने-आप हो जाएगा और स्थिति "अनुवाद जाँचें" हो जाएगी। / Fill only that language; the other is translated automatically and the status becomes "Review translation".'],
    ['4. अनुवाद पढ़ें और सुधारें। / Read and correct the translation.'],
    ['5. स्थिति "Approved / स्वीकृत — प्रकाशित करें" चुनें। लगभग 5–10 मिनट में वेबसाइट पर दिखेगा। / Set status to Approved; it appears on the website in about 5–10 minutes.'],
    ['6. हटाने के लिए स्थिति "Hidden / छिपाएँ" चुनें (पंक्ति न मिटाएँ)। / To take something down, set status to Hidden (do not delete the row).'],
    [''],
    ['फोटो / Photos: Google Drive में फोटो अपलोड करें, फिर उसका लिंक (Share → Copy link) फोटो कॉलम में चिपकाएँ। कई फोटो हों तो हर लिंक नई पंक्ति में (Ctrl+Enter) या अल्पविराम से अलग करें। Gallery में पूरे फ़ोल्डर का लिंक भी दे सकते हैं। स्वीकृत करने पर फोटो अपने-आप "लिंक वाला कोई भी देख सकता है" हो जाएँगे।'],
    ['Photos: upload to Google Drive and paste the link (Share → Copy link). Several photos: one link per line or comma-separated. Gallery also accepts a whole folder link. Approving a row makes its photos viewable by link automatically.'],
    [''],
    ['ID और वेब पता अपने-आप बनते हैं — इन्हें न बदलें, वरना पुराने लिंक टूट जाएँगे। / ID and web address are automatic — do not change them, or old links break.'],
    ['तुरंत प्रकाशित करना हो तो मेनू: 🌐 Website → Publish now। वेबसाइट रोज़ सुबह 6 बजे भी अपने-आप अपडेट होती है। / To publish immediately use the 🌐 Website menu; the site also updates daily at 6 AM.'],
  ];
  sh.getRange(1, 1, lines.length, 1).setValues(lines).setWrap(true);
  sh.getRange(1, 1).setFontWeight('bold').setFontSize(14);
  sh.setColumnWidth(1, 900);
}

// ---------------------------------------------------------------- editing

function handleEdit(e) {
  if (!e || !e.range) return;
  const sh = e.range.getSheet();
  const tab = TABS[sh.getName()];
  if (!tab) return;
  const cols = colMap(sh);
  const firstRow = Math.max(e.range.getRow(), 2);
  const lastRow = e.range.getLastRow();
  const editedKeys = keysInRange(e.range, cols, tab);

  for (let row = firstRow; row <= lastRow; row++) {
    const status = String(cell(sh, row, cols, 'status') || '');
    if (!rowHasContent(sh, row, cols, tab)) continue;
    if (!cell(sh, row, cols, 'id')) setCell(sh, row, cols, 'id', tab.prefix + '-' + Utilities.getUuid().slice(0, 8));

    if (status === STATUS.APPROVED) {
      prepareApprovedRow(sh, row, cols, tab);
      markPending();
      continue;
    }
    if (status === STATUS.HIDDEN) {
      if (editedKeys.indexOf('status') !== -1) markPending(); // removes it from the site
      continue;
    }
    const translated = translateRow(sh, row, cols, tab, editedKeys);
    if (translated) setCell(sh, row, cols, 'status', STATUS.REVIEW);
    else if (!status) setCell(sh, row, cols, 'status', STATUS.DRAFT);
  }
}

function translateSelectedRow() {
  const sh = SpreadsheetApp.getActiveSheet();
  const tab = TABS[sh.getName()];
  if (!tab) return;
  const cols = colMap(sh);
  const row = sh.getActiveRange().getRow();
  if (row < 2) return;
  const all = tab.translatable.map(function (f) { return f + '_hi'; }).concat(tab.translatable.map(function (f) { return f + '_en'; }));
  if (translateRow(sh, row, cols, tab, all.concat(['writtenIn']))) setCell(sh, row, cols, 'status', STATUS.REVIEW);
}

// Translates the fields the editor changed in their chosen language into the other language.
function translateRow(sh, row, cols, tab, editedKeys) {
  const source = String(cell(sh, row, cols, 'writtenIn')) === LANG_EN ? 'en' : 'hi';
  const target = source === 'hi' ? 'en' : 'hi';
  const langChanged = editedKeys.indexOf('writtenIn') !== -1;
  let done = false;
  tab.translatable.forEach(function (f) {
    if (!langChanged && editedKeys.indexOf(f + '_' + source) === -1) return;
    const text = String(cell(sh, row, cols, f + '_' + source) || '').trim();
    if (!text) return;
    setCell(sh, row, cols, f + '_' + target, LanguageApp.translate(text, source, target));
    done = true;
  });
  return done;
}

function prepareApprovedRow(sh, row, cols, tab) {
  // Permanent web address, set once so links never change.
  if (cols.slug && !cell(sh, row, cols, 'slug')) {
    const base = slugify(cell(sh, row, cols, 'title_en')) || String(cell(sh, row, cols, 'id')).toLowerCase();
    setCell(sh, row, cols, 'slug', base);
  }
  photoIds(cell(sh, row, cols, 'photos')).forEach(shareForWeb);
  if (cols.image) photoIds(cell(sh, row, cols, 'image')).forEach(shareForWeb);
}

// ---------------------------------------------------------------- publishing

function markPending() {
  const props = PropertiesService.getScriptProperties();
  props.setProperty('PENDING_SINCE', String(Date.now()));
}

// Time-driven (every 5 minutes): rebuild once edits have settled.
function publishIfPending() {
  const props = PropertiesService.getScriptProperties();
  const since = Number(props.getProperty('PENDING_SINCE') || 0);
  if (!since || Date.now() - since < CONFIG.QUIET_MINUTES * 60 * 1000) return;
  triggerDeploy();
  props.deleteProperty('PENDING_SINCE');
}

function publishNow() {
  triggerDeploy();
  PropertiesService.getScriptProperties().deleteProperty('PENDING_SINCE');
  SpreadsheetApp.getUi().alert('Publishing started / प्रकाशन शुरू — the website updates in about 3 minutes.');
}

function triggerDeploy() {
  const token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  if (!token) throw new Error('GITHUB_TOKEN is not set in Project Settings → Script properties (see cms/README.md).');
  const url = 'https://api.github.com/repos/' + CONFIG.GITHUB_REPO + '/actions/workflows/' + CONFIG.WORKFLOW_FILE + '/dispatches';
  const res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
    payload: JSON.stringify({ ref: CONFIG.BRANCH }),
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 204) throw new Error('GitHub returned ' + res.getResponseCode() + ': ' + res.getContentText());
}

// ---------------------------------------------------------------- web endpoint (read by the website build)

function doGet() {
  try {
    const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SHEET_ID'));
    const out = { news: [], events: [], gallery: [], press: [] };
    rowsOf(ss, 'News').forEach(function (r) {
      out.news.push({ id: r.id, slug: r.slug, date: isoDate(r.date), title: pair(r, 'title'), summary: pair(r, 'summary'), body: pair(r, 'body'), photos: photoIds(r.photos) });
    });
    rowsOf(ss, 'Events').forEach(function (r) {
      out.events.push({
        id: r.id, slug: r.slug, start: isoDate(r.start), end: isoDate(r.end), time: String(r.time || ''),
        title: pair(r, 'title'), venue: pair(r, 'venue'), city: pair(r, 'city'), summary: pair(r, 'summary'), body: pair(r, 'body'),
        registrationUrl: String(r.registrationUrl || ''), photos: photoIds(r.photos),
      });
    });
    rowsOf(ss, 'Gallery').forEach(function (r) {
      out.gallery.push({ id: r.id, slug: r.slug, date: isoDate(r.date), title: pair(r, 'title'), caption: pair(r, 'caption'), photos: photoIds(r.photos) });
    });
    rowsOf(ss, 'Press').forEach(function (r) {
      const img = photoIds(r.image);
      out.press.push({ id: r.id, date: isoDate(r.date), publication: pair(r, 'publication'), headline: pair(r, 'headline'), type: String(r.type || ''), url: String(r.url || ''), image: img[0] || null });
    });
    return json(out);
  } catch (err) {
    return json({ error: String(err && err.message ? err.message : err) });
  }
}

// Approved rows only, as objects keyed by column key.
function rowsOf(ss, name) {
  const sh = ss.getSheetByName(name);
  if (!sh || sh.getLastRow() < 2) return [];
  const tab = TABS[name];
  const values = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  const cols = colMap(sh);
  return values
    .map(function (v) {
      const r = {};
      tab.columns.forEach(function (c) { r[c[0]] = cols[c[0]] ? v[cols[c[0]] - 1] : ''; });
      return r;
    })
    .filter(function (r) { return r.status === STATUS.APPROVED && r.id; });
}

// ---------------------------------------------------------------- helpers

function colMap(sh) {
  const tab = TABS[sh.getName()];
  const header = sh.getRange(1, 1, 1, Math.max(sh.getLastColumn(), 1)).getValues()[0];
  const map = {};
  tab.columns.forEach(function (c) {
    const i = header.indexOf(c[1]);
    if (i !== -1) map[c[0]] = i + 1;
  });
  return map;
}

function keysInRange(range, cols, tab) {
  const keys = [];
  for (let c = range.getColumn(); c <= range.getLastColumn(); c++) {
    Object.keys(cols).forEach(function (k) { if (cols[k] === c) keys.push(k); });
  }
  return keys;
}

function rowHasContent(sh, row, cols, tab) {
  return tab.translatable.some(function (f) { return cell(sh, row, cols, f + '_hi') || cell(sh, row, cols, f + '_en'); });
}

function cell(sh, row, cols, key) { return cols[key] ? sh.getRange(row, cols[key]).getValue() : ''; }
function setCell(sh, row, cols, key, value) { if (cols[key]) sh.getRange(row, cols[key]).setValue(value); }

function pair(r, field) { return { hi: String(r[field + '_hi'] || ''), en: String(r[field + '_en'] || '') }; }

function isoDate(v) {
  if (v instanceof Date) return Utilities.formatDate(v, CONFIG.TIMEZONE, 'yyyy-MM-dd');
  const m = /^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/.exec(String(v || '').trim());
  return m ? m[3] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[1]).slice(-2) : '';
}

function slugify(s) {
  return String(s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
}

// Drive file IDs from links (file links, open?id= links, or a folder link = all images in it).
function photoIds(text) {
  const ids = [];
  String(text || '').split(/[\s,]+/).forEach(function (part) {
    if (!part) return;
    const folder = /\/folders\/([A-Za-z0-9_-]+)/.exec(part);
    if (folder) {
      try {
        const files = [];
        const it = DriveApp.getFolderById(folder[1]).getFiles();
        while (it.hasNext()) {
          const f = it.next();
          if (/^image\//.test(f.getMimeType())) files.push(f);
        }
        files.sort(function (a, b) { return a.getName().localeCompare(b.getName()); });
        files.forEach(function (f) { ids.push(f.getId()); });
      } catch (err) {
        console.warn('Folder not accessible: ' + part);
      }
      return;
    }
    const file = /\/d\/([A-Za-z0-9_-]{20,})/.exec(part) || /[?&]id=([A-Za-z0-9_-]{20,})/.exec(part);
    if (file) ids.push(file[1]);
  });
  return ids;
}

function shareForWeb(id) {
  try {
    const f = DriveApp.getFileById(id);
    if (f.getSharingAccess() !== DriveApp.Access.ANYONE_WITH_LINK) f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (err) {
    console.warn('Could not share ' + id + ': ' + err);
  }
}

function columnLetter(n) {
  let s = '';
  while (n > 0) {
    const m = (n - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
