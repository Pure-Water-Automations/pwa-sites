# Accessibility Audit — PWA Ministry & Nonprofit Sites

**Standard:** WCAG 2.1 AA · **Date:** 2026-08-30
**Scope:** all 11 pages under `sites/ministry/` and `sites/nonprofit/`, shared `shared/ds/` tokens, `shared/js/site.js`, rendered output verified against a local server (`PORT=8823 node server.js`) at desktop, 375px, and 320px widths.
**Severity:** P1 = WCAG AA failure · P2 = borderline / best practice with real impact · P3 = polish.

All contrast ratios below are computed exactly from the DS token hex values in `shared/ds/tokens/colors.css`.

> **Testing note (not a finding):** nonprofit pages link the site stylesheet as `href="/styles.css"` (e.g. `sites/nonprofit/index.html:29`), which resolves only under production host routing. Under local prefix routing (`/nonprofit/…`) it 404s and every nonprofit page renders completely unstyled. Ministry pages use relative `href="styles.css"` and work in both modes. Worth aligning so local audits/tests see the real presentation.

---

## Token contrast reference (computed)

| Pair | Ratio | AA small (4.5:1) | AA large / non-text (3:1) |
|---|---|---|---|
| sky-200 `#9ae2f5` on navy-900 `#132272` | **9.72** | pass | pass |
| sky-100 `#c4eef9` on navy-900 | **11.30** | pass | pass |
| sky-400 `#4dc4e8` on navy-900 | **6.92** | pass | pass |
| sky-400 `#4dc4e8` on white | **2.02** | FAIL | FAIL |
| sky-400 on gray-50 `#f5f5f7` | **1.86** | FAIL | FAIL |
| white on sky-400 (btn top stop) | **2.02** | FAIL | FAIL |
| white on sky-500 `#2ab0d8` (btn bottom stop) | **2.53** | FAIL | FAIL |
| sky-500 `#2ab0d8` on white (focus ring) | **2.53** | — | FAIL (non-text) |
| sky-700 `#157ba0` on white | **4.80** | pass | pass |
| sky-700 on gray-50 | **4.41** | FAIL (marginal) | pass |
| sky-700 on sky-50 `#e7f8fd` | **4.40** | FAIL (marginal) | pass |
| sky-800 `#0d5e7e` on white / sky-50 / gray-50 | **7.19 / 6.59 / ~6.6** | pass | pass |
| sky-600 `#1e97be` on white | **3.37** | FAIL | pass (large) |
| neutral-600 `#6e6e73` on white / gray-50 | **5.07 / 4.66** | pass | pass |
| neutral-700 `#48484a` on white | **9.12** | pass | pass |
| neutral-400 `#98989d` on white | **2.87** | FAIL | FAIL |
| navy-900 text on sky-400 / sky-500 | **6.92 / 5.53** | pass | pass |
| white@0.4 on navy-900 | **3.38** | FAIL | pass (large) |
| white@0.55 / 0.6 / 0.75 / 0.85 on navy-900 | **5.20 / 5.91 / 8.43 / 10.46** | pass | pass |
| white@0.55 / 0.75 on sky-700 (CTA gradient end) | **2.55 / 3.43** | FAIL | 0.75 passes large only |

---

## P1 — WCAG AA failures

### P1-1 · White text on the sky gradient buttons (`.btn--secondary`, plan flags) — 2.02–2.53:1
- **WCAG:** 1.4.3 Contrast (Minimum)
- **Where:** `sites/ministry/styles.css:46-50` (`.btn--secondary`), `sites/ministry/styles.css:235-240` (`.plan-flag`); `sites/nonprofit/styles.css:44-48` (`.btn--secondary`), `sites/nonprofit/styles.css:203-208` (`.price-card__flag`).
- **Affected pages:** every page on both sites — this is the primary CTA ("Book a Free Ministry Assessment", "Get Grant-Ready", "Start with River", footer "Book Your Free Assessment") plus the "Most Popular" / "Most Choose This" badges (12px/700 white on sky-400 = 2.02:1).
- **Problem:** white button/badge text (15–17px, weight 500–700 → small text, needs 4.5:1) sits on the sky-400→sky-500 gradient: 2.02:1 at the top stop, 2.53:1 at the bottom. The site's highest-value action is its least readable element.
- **Fix (pick one, verified against the token scale):**
  - Keep the gradient, switch text to `var(--color-navy-900)`: 6.92:1 on sky-400, 5.53:1 on sky-500 — passes; or
  - Keep white text, darken the gradient to `sky-700 → sky-800` (`#157ba0`→`#0d5e7e`): 4.80:1 / 7.19:1 — passes.
  - Apply the same change to `.plan-flag` / `.price-card__flag`.

### P1-2 · `.accent` sky-400 headline text on white heroes — 2.02:1 (needs 3:1 large)
- **WCAG:** 1.4.3
- **Where:** `sites/ministry/styles.css:130` (`.hero h1 .accent, .page-hero h1 .accent`), `sites/nonprofit/styles.css:100` (`.accent`).
- **Affected pages (white background):** `sites/nonprofit/index.html:124`, `nonprofit/services.html:69`, `nonprofit/pricing.html:69`, `nonprofit/contact.html:69`, `nonprofit/about.html:70`; `sites/ministry/services.html:68`, `ministry/pricing.html:68`, `ministry/contact.html:68`, `ministry/our-heart.html:70`.
- **Not affected:** the same accent on navy heroes (`ministry/index.html:91`, `ministry/church-bookkeeping.html:111`) is 6.92:1 — keep it there.
- **Problem:** the H1 accent word(s) are sky-400 `#4dc4e8` on white (2.02:1) — the key phrase of each page title fails even the large-text threshold.
- **Fix:** on light heroes use `--color-sky-600` `#1e97be` (3.37:1, passes large text) or `--color-sky-700` `#157ba0` (4.80:1, safest). E.g. scope: `.page-hero h1 .accent { color: var(--color-sky-700); }` and keep sky-400 only inside `.hero`/dark contexts.

### P1-3 · `.step-num` sky-400 numbers on light tiles — 1.86–2.02:1
- **WCAG:** 1.4.3 (44px/800 → large text, needs 3:1)
- **Where:** `sites/ministry/styles.css:266`, `sites/nonprofit/styles.css:231`.
- **Affected pages:** `sites/ministry/church-bookkeeping.html:207,212,217,222` ("How It Works" 1–4); `sites/nonprofit/index.html:283,288,293,298`.
- **Problem:** the step number is the only indicator of sequence ("A short conversation" doesn't say it's step 1) and renders at 1.86:1 on `#f5f5f7`. The nonprofit copies are `aria-hidden="true"` so screen readers get no sequence at all; ministry copies aren't hidden but are illegible to low-vision users either way.
- **Fix:** change `.step-num` color to `var(--color-sky-700)` (4.41:1 on gray-50 — passes 3:1 large comfortably). Also remove `aria-hidden` from the nonprofit step numbers (or add visually-hidden "Step 1" text) so the order is programmatically available.

### P1-4 · Focus indicator fails non-text contrast on light backgrounds — 2.53:1 (2.02:1 on inputs)
- **WCAG:** 1.4.11 Non-text Contrast
- **Where:** `sites/ministry/styles.css:9` (global `:focus-visible` outline `sky-500`), `sites/ministry/styles.css:339-341` (`.form-field input:focus` overrides it with an even lighter `sky-400` outline, 2.02:1); `sites/nonprofit/styles.css:9-11` (same `sky-500` outline).
- **Affected:** every keyboard-focusable element on light surfaces on all 11 pages (nav links, ghost buttons, form fields, footer is fine). sky-500 on white = 2.53:1, on gray-50 = 2.32:1; sky-400 on white = 2.02:1. On navy surfaces sky-500 = 5.54:1 (passes) — so footer/CTA-band focus is OK today.
- **Fix:** use `outline: 2px solid var(--color-sky-800)` (7.19:1 on white, 6.59:1 on sky-50) or `var(--color-navy-900)` for the global rule, and delete the `sky-400` outline override on ministry inputs (let the global rule apply; keep `border-color` change as decoration). If you want a brand-sky ring on navy sections, add a scoped override there (`.footer :focus-visible, .section--navy :focus-visible { outline-color: var(--color-sky-200); }` — 9.72:1).

### P1-5 · Ministry footer copyright at 40% white on navy — 3.38:1
- **WCAG:** 1.4.3 (13px text needs 4.5:1)
- **Where:** `sites/ministry/styles.css:370` (`.footer-copy { color: rgba(255,255,255,0.4); }`), used on every ministry page (e.g. `sites/ministry/index.html:297`).
- **Problem:** 3.38:1 for small text. The nonprofit site already uses 0.55 (5.20:1) for the same element — the ministry value is the outlier.
- **Fix:** `color: rgba(255,255,255,0.6)` (5.91:1), matching `.footer-links a`.

### P1-6 · sky-700 small text on tinted/gray backgrounds — 4.40–4.41:1 (marginal, but under 4.5:1)
- **WCAG:** 1.4.3
- **Where (state once, applies across both sites):**
  - `.eyebrow` — sky-700 on sky-50, 12px/600 uppercase: `sites/ministry/styles.css:104-108`, `sites/nonprofit/styles.css:92-96`. Appears on nearly every page of both sites.
  - `.nav__badge` "For Non-profits" — `sites/nonprofit/styles.css:70-74`.
  - `.hero__pill span` — `sites/nonprofit/styles.css:120`.
  - `.refer-card p strong` and `.rate-card strong` on sky-50 — `sites/nonprofit/styles.css:194,244`.
  - Default link color sky-700 when links sit in `.section--gray` (`#f5f5f7`, 4.41:1): ministry `.contact-socials a` (`sites/ministry/styles.css:354`), ministry `pricing.html:163` pricing-note links, nonprofit `.contact-social a` (`sites/nonprofit/styles.css:331`).
- **Problem:** 4.40/4.41 vs required 4.5 — a real failure, though within 0.1 of the line, so it will show up in any automated scan.
- **Fix:** bump these tokens one step: `--color-sky-800` `#0d5e7e` gives 6.59:1 on sky-50 and ~6.6:1 on gray-50. Links on white can stay sky-700 (4.80:1).

---

## P2 — Borderline / best practice with real impact

### P2-1 · Heading levels skip h1 → h3 on card-grid pages
- **WCAG:** 1.3.1 / 2.4.6 (level-skipping is best practice, not a hard AA fail)
- **Where:** `sites/ministry/services.html:78` (first card h3 after the h1 — no h2 on page except the CTA band), `sites/ministry/pricing.html:94`, `sites/nonprofit/services.html:79`, `sites/nonprofit/pricing.html:78`, `sites/nonprofit/about.html:84` (values h3s before the first h2 at line 106).
- **Fix:** add a (visually-hidden if you like) h2 above each card grid — e.g. `<h2 class="sr-only">Service areas</h2>` / "Packages" / "Our values" — or promote the card headings to h2. Add one `.sr-only` utility to each site stylesheet.

### P2-2 · Nonprofit nav toggle missing `aria-controls`; menu missing `id`
- **WCAG:** 4.1.2 (name/role/value are present via `aria-expanded` + `aria-label`, so not a hard fail — but the ministry site already does this right and `site.js` supports it)
- **Where:** `sites/nonprofit/index.html:102,105`; `about.html:50,53`; `contact.html:50,53`; `pricing.html:50,53`; `services.html:50,53`.
- **Fix:** mirror ministry markup (`sites/ministry/index.html:72-75`): add `aria-controls="nav-menu"` to the button and `id="nav-menu"` to the `nav__menu` div.

### P2-3 · Fake lists: bullets/checkmarks as text characters in `<span>`s
- **WCAG:** 1.3.1 Info and Relationships
- **Where (pattern, repeated):**
  - Ministry `.bullet-list` / `.check-list` are div+span stacks with literal "•"/"✓" characters: `sites/ministry/services.html:80-153`, `sites/ministry/pricing.html:97-159`, `sites/ministry/index.html` check-lists.
  - Nonprofit `.price-feats` same pattern: `sites/nonprofit/pricing.html:81-153`.
  - Nonprofit services uses real `<ul><li>` (good) but keeps literal "•" characters with `list-style:none` (`sites/nonprofit/services.html:82-146`), so screen readers hear "bullet" twice or a stray character.
- **Problem:** list semantics (item count, list navigation) are lost; "✓" is announced as "check mark" before every feature.
- **Fix:** convert span stacks to `<ul><li>`; drop the literal "•"/"✓" characters and render them via CSS `::marker`/`::before` with `content` (decorative, not announced). For nonprofit services just delete the "•" from the li text.

### P2-4 · Bookkeeping comparison table built from divs
- **WCAG:** 1.3.1
- **Where:** `sites/ministry/church-bookkeeping.html:145-162` (`.model-table` / `.model-row` / `.model-cell`).
- **Problem:** the two-column "Locally, you need… / We handle…" relationship is purely visual; a screen reader hears an undifferentiated stream, and the 768px stacking further detaches pairs.
- **Fix:** use a real `<table>` with `<th scope="col">Locally, you need…</th><th scope="col">We handle…</th>` and one `<tr>` per pair (style the table with the existing classes).

### P2-5 · Nonprofit forms: `novalidate` with no client-side validation
- **WCAG:** 3.3.1 / 3.3.3
- **Where:** `sites/nonprofit/index.html:376`, `sites/nonprofit/contact.html:78` (ministry forms have no `novalidate` and get native validation — verified working).
- **Problem (verified in browser):** an empty submit round-trips to the server and comes back as one generic message in the polite `role="status"` region ("Name and a valid email are required — or email us…"). No `aria-invalid` on the fields, focus stays on `<body>`, no field-level association. Native validation would have caught it before submit with focused, per-field messages.
- **Fix:** simplest — remove `novalidate` (matches ministry). If keeping custom handling: on error set `aria-invalid="true"` on the offending fields, move focus to the first invalid field, and use `role="alert"` (or `aria-live="assertive"`) for the failure message in `shared/js/site.js:38-40`.

### P2-6 · Form input boundaries below non-text contrast
- **WCAG:** 1.4.11
- **Where:** `sites/ministry/styles.css:333-337`, `sites/nonprofit/styles.css:314-318` — inputs bordered `--color-neutral-200` `#d2d2d7` on white (~1.5:1).
- **Fix:** use `--color-neutral-300` `#b5b5bb` (~2:1, still short) — to actually clear 3:1 use `--color-neutral-400` `#98989d` (2.87:1, close) or `--color-neutral-500` `#7c7c82` (4.15:1). Recommend neutral-500 borders, or keep light borders and add a visible `background: var(--color-neutral-50)` fill difference.

### P2-7 · CTA band translucent white text over a gradient that ends at sky-700
- **WCAG:** 1.4.3
- **Where:** `.cta-band` / `.cta-panel` gradient `navy-900 → navy-800 → sky-700` with `p { color: rgba(255,255,255,0.75) }` and notes at `0.55`: `sites/ministry/styles.css:312-325`, `sites/nonprofit/styles.css:255-266`. On every page's closing CTA.
- **Problem:** over the navy portion these pass easily (8.43:1 / 5.20:1), but where the gradient approaches sky-700 the same text computes to 3.43:1 (body) and 2.55:1 (note). Whether text overlaps the light corner depends on viewport width — that's the definition of fragile.
- **Fix:** either stop the text-bearing area's gradient at navy-800 (move the sky-700 stop to ≥130% or add a `::before` glow instead), or raise alphas to `0.9` (body) / `0.75` (note) so even the worst stop passes: white@0.9 on sky-700 ≈ 4.5+, white@0.75 = 3.43 (still short for 13px — prefer fixing the gradient).

### P2-8 · Nav link hover drops to 55% opacity — 3.79:1
- **WCAG:** 1.4.3 (applies to all states)
- **Where:** `sites/ministry/styles.css:79`, `sites/nonprofit/styles.css:77`.
- **Fix:** hover to `color: var(--color-sky-700)` (4.80:1 on white) instead of `opacity: 0.55`, or use opacity ≥ 0.7 (≈5.5:1).

### P2-9 · All `.reveal` content is invisible (opacity 0) unless JavaScript runs
- **WCAG:** robustness / progressive enhancement (verified: 17/17 reveal blocks at opacity 0 pre-scroll; permanent if JS is blocked or errors)
- **Where:** `sites/ministry/styles.css:376`, `sites/nonprofit/styles.css:355`, toggled by `shared/js/site.js:46-55`.
- **Fix:** gate the hidden state on JS presence — e.g. `site.js` first does `document.documentElement.classList.add('js')` and CSS becomes `.js .reveal { opacity: 0; … }`. One-line change per file, no-JS users get the full page.

### P2-10 · Reduced-motion gaps (each site fixes what the other misses)
- **WCAG:** best practice around 2.3.3/2.2.2 (the guard in `site.js:46` is correct — verified)
- **Where:**
  - Nonprofit: `.hero__dot` pulse animation not disabled under `prefers-reduced-motion` (`sites/nonprofit/styles.css:119,357-360`; ministry disables its `.hero-chip-dot` at `styles.css:378-381`).
  - Ministry: `html { scroll-behavior: smooth }` comes from `shared/ds/tokens/base.css:10` and is never reset under reduced motion (nonprofit resets it at `styles.css:359`).
- **Fix:** add `.hero__dot { animation: none; }` to the nonprofit reduced-motion block; add `html { scroll-behavior: auto; }` to the ministry one (or move that reset into `base.css` so both sites inherit it).

---

## P3 — Polish

### P3-1 · Mobile menu: no Escape-to-close, no outside-click close
- `shared/js/site.js:6-11`. Toggle is a real `<button>` with `aria-expanded` (verified working by click and keyboard-activatable). Add a `keydown` Escape handler that closes the menu and returns focus to the toggle.

### P3-2 · Mobile menu can outgrow short viewports with no scroll
- `sites/ministry/styles.css:387-393`, `sites/nonprofit/styles.css:376-381`: `position:absolute` panel under the fixed 68px bar with no `max-height`/`overflow`. On landscape phones (~375px tall) the last items ("Contact", CTA) can be unreachable. Add `max-height: calc(100dvh - 68px); overflow-y: auto;`.

### P3-3 · External links open new tabs with no warning
- All `target="_blank"` links (13 on ministry home alone; both sites, every page). Add visually-hidden "(opens in new tab)" text or an `aria-label`, at least on the primary CTAs.

### P3-4 · `model-cell--empty` em-dash at 2.87:1
- `sites/ministry/styles.css:254`, used at `church-bookkeeping.html:159`. It's a placeholder "—"; either treat it as decorative (`aria-hidden="true"` plus a visually-hidden "Nothing needed locally") or bump to `--color-neutral-500`.

### P3-5 · Decorative content-photo alts are inconsistent between sites
- Ministry uses `alt=""` on meaningful-looking illustrations (`sites/ministry/index.html:129`, `our-heart.html:75`), nonprofit describes the same image (`sites/nonprofit/about.html:75`). Either is defensible; pick one convention. Icon imgs, wave-underline, glow divs, play-button SVGs and the safeguard shield are all correctly `alt=""`/`aria-hidden` — good.

### P3-6 · Nonprofit footer link columns aren't a `<nav>`
- `sites/nonprofit/index.html:428-436` (and siblings) use `div.footer__col`; ministry wraps the same links in `<nav aria-label="Footer">` (`sites/ministry/index.html:279`). Mirror the ministry markup.

### P3-7 · Small target sizes on footer/social text links
- Footer social/legal links are ~20px tall with 20px gaps (both sites). Fine under WCAG 2.1 AA (2.5.5 is AAA / 2.5.8 is 2.2), but padding them to ≥24px tap height is cheap. Mobile nav links measured 43px — good; nav toggle measured 42×46px — good.

### P3-8 · Required-field convention is just an asterisk
- All four forms label required fields "Name *" / "Email *" with the `required` attribute (programmatically fine). Add a short note above the form — "* = required" — or spell out "(required)" in the two labels.

### P3-9 · "Compare the math" is a styled div, not a heading
- `sites/ministry/pricing.html:76` (`.compare-title`). Making it the page's first `<h2>` would also soften finding P2-1 on that page.

---

## What already passes (verified)

- Skip link present on all 11 pages, correctly revealed on focus by CSS (`.skip-link:focus { left: 0 }`), target `#main` exists as a real `<main>`.
- `lang="en"`, unique descriptive `<title>` per page, `header/nav/main/footer` landmarks, labeled `nav` elements (ministry).
- Every form control has an explicit `<label for>`, sensible `autocomplete`, and the status line carries `role="status"` on all 4 forms (message announced; verified live: "Sending…" → success/error text swap).
- Honeypot field is `tabindex="-1" aria-hidden="true"` off-screen — correctly out of the tab and AT order.
- Mobile nav toggle is a real `<button>` with live `aria-expanded` (verified true/false on toggle); ministry adds `aria-controls`.
- Tab/DOM order is logical everywhere; no positive `tabindex`.
- No horizontal scroll at 320px (verified); grids collapse to one column.
- Scroll-reveal honors `prefers-reduced-motion` in JS and CSS (with the two gaps in P2-10).
- Navy-surface text combos all pass: sky-200 (9.72), sky-100 (11.30), sky-400 (6.92), white@0.6 links (5.91), white@0.85 body (10.46).
- Link text is descriptive throughout — no bare "Learn more"/"Click here"; repeated CTAs are self-describing ("Start with River", "See Ministry Packages").

---

## Summary

**6 P1 failures** — all color/contrast: the sky-gradient CTA buttons and "Most Popular" flags (2.0–2.5:1), sky-400 `.accent` headline text and `.step-num` on white/gray (1.9–2.0:1), the sky-500/sky-400 focus ring on light surfaces (2.0–2.5:1), ministry footer copyright at 40% white (3.4:1), and the marginal sky-700-on-tint family (4.40:1) — every one fixable by moving one or two steps along the existing DS token scales (navy-900 text on sky, sky-600/700 accents on white, sky-800 focus ring and tinted-chip text).
**11 P2s** — heading skips on 5 pages, missing `aria-controls` on all nonprofit toggles, span-based fake lists, the div-built comparison table, `novalidate` forms with no client validation or `aria-invalid`, input borders at 1.5:1, gradient-end CTA text, hover-state contrast, JS-dependent `.reveal` visibility, and two reduced-motion gaps.
**9 P3 polish items** — Escape/overflow handling on the mobile menu, new-tab warnings, alt-text consistency, footer nav semantics, target sizes, required-field note, and heading-ifying "Compare the math"; the structural fundamentals (skip links, landmarks, labels, status regions, keyboard operability, 320px reflow) are already solid.
