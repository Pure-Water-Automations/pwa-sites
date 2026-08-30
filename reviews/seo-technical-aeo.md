# SEO Technical + AEO/GEO Review — pwa-sites

Date: 2026-08-30 · Reviewer: Claude (seo-technical + seo-aeo-geo pass)
Scope: served output of `sites/ministry/*` and `sites/nonprofit/*` via `server.js` (run locally on :8822 with Host-header spoofing), plus `server.js` itself and the Caddy layer.

**Verification gap:** prod (`https://ministry.purewaterautomations.com`) was unreachable from this machine during the review, and the Caddyfile is not in this repo. Everything marked "Caddy layer" is inferred from the repo (Node sends no compression/HSTS) and must be confirmed with one `curl -s -D - -H 'Accept-Encoding: gzip' https://ministry.purewaterautomations.com/` on the box. All other findings were verified against the served local output.

---

## P1 — Critical

### P1-1 · Render-blocking Google Fonts `@import`, doubled, no preconnect
- **File:** `shared/ds/tokens/fonts.css` (+ every page `<head>`, `shared/ds/styles.css`)
- **Problem:** `fonts.css` pulls Google Fonts via CSS `@import` — the slowest possible font path: HTML → fonts.css → googleapis CSS → gstatic woff2, all serial and render-blocking, with no `preconnect`. It is also loaded twice: every page links `/shared/ds/tokens/fonts.css` directly AND links `/shared/ds/styles.css`, which `@import`s the same file again. The request loads 16 font variants (Outfit ×7, DM Sans ×6, JetBrains Mono ×3); JetBrains Mono is not used on either site's pages.
- **Fix:** In every page `<head>`, before the stylesheets, add:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap">
  ```
  Then delete the `@import` from `fonts.css` (leave the file as a comment stub or remove its `<link>` and the `@import "./tokens/fonts.css";` line in `styles.css`). Trim to the weights actually used; drop JetBrains Mono.

### P1-2 · 1.5–1.7 MB PNG content images; 940 KB PNG as favicon + og:image on every page
- **Files:** `shared/assets/images/09-mission-moving-forward.png` (1.5 MB, 1536×1024 — used by `sites/ministry/index.html:129` below-fold and `sites/nonprofit/about.html:75` hero), `shared/assets/images/05-delegation-in-motion.png` (1.7 MB — `sites/ministry/our-heart.html:75` hero), `shared/assets/logo.png` (940 KB, 1416×1111 — favicon + `og:image` + Organization `logo` on all 11 pages)
- **Problem:** LCP on our-heart and nonprofit/about is a ~1.6 MB PNG. Ministry index loads 1.5 MB below the fold with no `loading="lazy"`. Every page's favicon is a 940 KB PNG (also the og:image, so link previews fetch ~1 MB). No `width`/`height` attributes on content images → CLS. Ministry copies of 09/05 have empty `alt=""` while the nonprofit copy has descriptive alt.
- **Fix:**
  1. Convert 09 and 05 to WebP at 1536w (`cwebp -q 80` → expect ~120–200 KB each), update the three `<img src>` references; add `width="1536" height="1024"`.
  2. `sites/ministry/index.html:129`: add `loading="lazy"` (below fold). Keep the two hero usages eager, add `fetchpriority="high"`.
  3. Export a ~512×512 PNG (or .ico) favicon ≤20 KB; export a 1200×630 og-image ≤200 KB; update `<link rel="icon">`, `og:image`, `twitter:image`, and the JSON-LD `logo` URL on all pages.
  4. Give the ministry copies real `alt` text (match `about.html`'s pattern).

### P1-3 · No response compression in Node — must live in Caddy (unverified)
- **File:** Caddy layer (`server.js` correctly does not compress)
- **Problem:** `server.js` serves identity-encoded responses (verified locally: no `Content-Encoding` with `Accept-Encoding: gzip, br` sent). The repo contains no Caddyfile, so whether prod compresses is unverified. If the Caddy vhosts lack `encode`, every page ships ~100 KB+ of uncompressed HTML/CSS per view.
- **Fix:** In both vhost blocks on the Hostinger VPS Caddyfile add `encode zstd gzip`. While there, add HSTS: `header Strict-Transport-Security "max-age=31536000"`. Do NOT add gzip to `server.js` — TLS, compression, and HSTS belong in Caddy; Node keeps content-type, caching, and routing. Verify with the curl above.

---

## P2 — Important

### P2-1 · Duplicate URLs served 200; trailing slash 404s
- **File:** `server.js` (lines 164–169)
- **Problem:** `/index.html` and `/services.html` serve 200 alongside `/` and `/services` — two crawlable URLs per page (canonical tags mitigate but dilute; sitemap says clean URLs). `/services/` returns 404 instead of redirecting, so any inbound link with a trailing slash dead-ends.
- **Fix:** In the GET handler before file resolution: if `urlPath` ends in `.html`, 301 to the extensionless path (`/index.html` → `/`); if `urlPath` length > 1 and ends in `/`, 301 to the version without the slash. ~6 lines.

### P2-2 · Nine render-blocking stylesheets, all double-declared
- **Files:** every page `<head>` (e.g. `sites/ministry/index.html:20–29`) + `shared/ds/styles.css`
- **Problem:** Pages link all 8 token files individually AND `ds/styles.css`, which `@import`s the same 8 files. Same-URL caching avoids double download, but the `@import` chain adds serial discovery latency and the head carries 9–10 blocking stylesheet links.
- **Fix:** Pick one: link only `/shared/ds/styles.css` + the site `styles.css` (2 links), or keep the individual token links and strip the `@import`s from `styles.css`. First option is the smaller diff (delete 8 lines per page).

### P2-3 · Asset caching: 1-day max-age, no validators
- **File:** `server.js` line 62
- **Problem:** All non-HTML assets get `max-age=86400` with no `ETag`/`Last-Modified`, so returning visitors re-download the full 13 MB asset tree daily (no 304 path exists at all).
- **Fix:** In `serveFile`, set `Last-Modified: st.mtime.toUTCString()` and answer `If-Modified-Since` with 304; bump images/fonts (`.png .webp .svg .woff2 .jpg`) to `max-age=2592000`. Keep HTML `no-cache`. ~8 lines.

### P2-4 · `.reveal` hides content with no no-JS fallback
- **Files:** `sites/ministry/styles.css:376`, `sites/nonprofit/styles.css:355`, `shared/js/site.js`
- **Problem:** `.reveal { opacity: 0 }` is unconditional CSS; `is-visible` is only added by IntersectionObserver. With JS failed/blocked, every `.reveal` section — including the entire church-bookkeeping FAQ (`faq-item reveal`) and all pricing cards — renders invisible. Rendered-page snapshots by crawlers that don't scroll can capture below-fold content at opacity 0.
- **Fix:** Gate the hidden state on JS being present: in `site.js` first line, `document.documentElement.classList.add('js');` and change the CSS to `.js .reveal { opacity: 0; ... }` in both stylesheets.

### P2-5 · Organization entity inconsistent across the two hosts
- **Files:** `sites/ministry/index.html:30–66`, `sites/nonprofit/index.html:31–...`
- **Problem:** Ministry says `"name": "Pure Water Automations"`, nonprofit says `"Pure Water Automations LLC"`; ministry's `sameAs` includes `https://purewaterautomations.com`, nonprofit's omits it; neither has `contactPoint`; `logo` is the 940 KB non-square PNG. AI knowledge-graph builders cross-reference these — inconsistent names/links weaken the single-entity signal.
- **Fix:** Use identical Organization blocks on both homepages: same `name` ("Pure Water Automations LLC"), same `legalName`, same `sameAs` array (include the main site on both), add `"contactPoint": {"@type":"ContactPoint","contactType":"sales","email":"purewaterva58@gmail.com","telephone":"+1-908-357-7801"}`, and point `logo` at the new small square logo (P1-2.3). Consider a shared `@id` of `https://purewaterautomations.com/#org` on both so they resolve to one entity.

### P2-6 · Ministry site has no FAQ/FAQPage outside church-bookkeeping; pricing pages have no Q&A or Offer schema
- **Files:** `sites/ministry/index.html`, `sites/ministry/pricing.html`, `sites/nonprofit/pricing.html`
- **Problem:** The nonprofit homepage's visible-FAQ + matching FAQPage schema is exactly the right pattern — the ministry site never uses it. The pricing pages, the highest-value answer-engine pages ("what does a ministry VA cost?"), carry only BreadcrumbList: no FAQ, no `Service`/`Offer` markup despite fully published prices ($200–$4,700/mo).
- **Fix:** (a) Add a 5-question visible FAQ + matching FAQPage schema to `sites/ministry/pricing.html` (reuse nonprofit questions: who does the work, month-to-month, what if it's not working, data access — plus "what does a package include"). (b) On both pricing pages add a `Service` node with `offers: [{"@type":"Offer","name":"Spring","price":"200","priceCurrency":"USD", ...}]` for the six plans. Only mark up what's visibly on the page.

### P2-7 · No `/favicon.ico`
- **Files:** `server.js` / `sites/*/`
- **Problem:** Browsers and many crawlers request `/favicon.ico` unconditionally → 404 on both hosts (verified).
- **Fix:** Drop a real `favicon.ico` into each site root (or one in `shared/` + a 2-line rewrite in `server.js`). Pairs with P1-2.3.

---

## P3 — Polish

### P3-1 · Sitemaps lack `<lastmod>` — `sites/ministry/sitemap.xml`, `sites/nonprofit/sitemap.xml`. Add `<lastmod>` per URL and update on deploy (a date stamp is enough). URL↔served exactness is otherwise correct (verified: every sitemap URL returns 200 in exactly that form).
### P3-2 · No `llms.txt` on either host — add a short markdown `llms.txt` to each site root (it will be served as `text/plain` already): what the site offers, who it's for, the pricing page URL, contact. robots.txt already allows all AI crawlers — good, leave it.
### P3-3 · Plan features are `✓` `<span>`s, not lists — `sites/ministry/pricing.html` (`check-list`), `sites/nonprofit/pricing.html` (`price-feats`), and both index teasers. Answer engines parse `<ul><li>` far more reliably. Swap the wrapper div for `<ul>` and each span for `<li>` (CSS classes can stay).
### P3-4 · Team photos hotlinked from the WordPress main site — `sites/ministry/our-heart.html`, `sites/nonprofit/about.html` (`purewaterautomations.com/wp-content/uploads/...`). If the main site reorganizes media, both pages break. Copy the three .webp files into `shared/assets/team/` and reference locally; add `loading="lazy"` + `width`/`height` on the ministry copies (nonprofit already lazies).
### P3-5 · No Person schema — Sayaka Stephens is the trust anchor of `church-bookkeeping.html` and the founders anchor `our-heart.html`/`about.html`, but none of them exist as `Person` entities. Add `Person` nodes (name, jobTitle, worksFor → #org) on those three pages; big citation-worthiness win for "who does the work" queries.
### P3-6 · Church-bookkeeping page never states cost — `sites/ministry/church-bookkeeping.html` answers who/how/safeguards well, but an answer engine asked "what does it cost" gets nothing. Add one extractable sentence near the CTA (a starting price, or explicitly "custom quote after a free review of your books").
### P3-7 · 404 is unbranded `text/plain` without charset — `server.js:60`. Correct status code (no soft-404 — good), but add `; charset=utf-8` and serve a minimal branded 404.html per site with nav links.
### P3-8 · ~8.4 MB of unreferenced assets deployed — `shared/assets/images/{02-clutter-to-clarity,04-organized-operations-workspace,07-protected-time,10-event-readiness-still-life}.png` (~7 MB) plus `shared/assets/logo-white.png`, `shared/assets/logo-transparent.png` (~1.4 MB) are referenced by nothing in `sites/` or `shared/`. Move to `design-src/` (already rsync-excluded) or delete.

---

## Passes (verified, no action)
- `lang="en"` + viewport on all 11 pages; single-language site so hreflang correctly absent.
- Sitemap URLs exactly match served clean URLs; robots.txt valid on both hosts and references the right sitemap.
- Canonicals present and self-referencing on every page; per-host content correctly isolated (ministry pages 404 on the nonprofit host and vice versa — no cross-host duplication of indexable pages).
- `site.js` is `defer`red; HEAD requests handled; HTML `no-cache` is right for un-versioned pages.
- Nonprofit FAQPage schema matches the visible FAQ word-for-word — model pattern, extend it (P2-6).
- Strong extractable facts already in prose: published prices, hours per plan, "50% nonprofit rate", "founded in June 2025 by Justin Okamoto and Eunmi Rangala", month-to-month terms, contact email/phone as real links.

---

## Summary
Both sites are structurally sound (clean URLs, correct canonicals/sitemaps/robots, real content in HTML) but ship a slow first paint: a doubled render-blocking Google-Fonts `@import`, multi-megabyte PNGs on LCP paths, and compression that only exists if Caddy provides it (unverified — check the Caddyfile).
Answer-engine readiness is genuinely good on the nonprofit side (visible FAQ = FAQPage schema, published prices) and thin on the ministry side (no FAQ outside church-bookkeeping, no Offer schema, no cost signal on the bookkeeping page); the Organization entity should be made identical across both hosts.
Fix order: P1-1/P1-2/P1-3 (one afternoon, mostly mechanical), then the server.js redirects + caching (P2-1/P2-3), then the schema/FAQ additions (P2-5/P2-6).
