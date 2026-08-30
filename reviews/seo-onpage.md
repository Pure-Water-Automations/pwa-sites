# On-Page SEO Review — ministry & nonprofit sites

Date: 2026-08-30 · Scope: `sites/ministry/*.html`, `sites/nonprofit/*.html`, sitemaps, robots, JSON-LD, server routing. Pure on-page/technical pass (no rank/backlink data).

**Verified clean:** every page has exactly 1 unique `<title>`, 1 unique meta description, 1 H1, no skipped heading levels; all 13 JSON-LD blocks parse as valid JSON with appropriate types; canonicals match sitemap URLs exactly (extensionless, `/` for home); robots.txt + sitemap.xml correct on both sites; all referenced `/shared/` assets exist on disk; decorative icons correctly use `alt=""`.

---

## P1 — Critical

### P1-1 · Three-way cannibalization with the main site (nonprofit + bookkeeping topics)
- **File:** site-wide (both subdomains) vs live `purewaterautomations.com`
- **Problem:** The main WordPress site still publishes `/non-profit/` ("Non-profit Pure Water Assistants"), six `/non-profit-*-package/` pages, and `/bookkeeping/` — all indexed and targeting the exact queries the new subdomains target ("virtual assistant for nonprofits", the Spring/Stream/River/Ocean package names, "bookkeeping"). Google will split signals across three properties of the same brand and may rank the weaker legacy pages. The ministry `/church-bookkeeping` page also competes with `/bookkeeping/` for "church bookkeeping"-adjacent queries.
- **Fix:** On the WP site, 301 the legacy pages to the new canonical homes (redirect plugin / Rank Math):
  - `/non-profit/` → `https://nonprofits.purewaterautomations.com/`
  - `/non-profit-spring-package/` (and the other five) → `https://nonprofits.purewaterautomations.com/pricing`
  - Keep `/bookkeeping/` (business bookkeeping is the main site's lane) but add one contextual link from it: `<a href="https://ministry.purewaterautomations.com/church-bookkeeping">church bookkeeping for ministries</a>` — and make its title/H1 explicitly business-focused ("Bookkeeping for Small Businesses") so the three bookkeeping pages target distinct intents (business / church / nonprofit).

### P1-2 · Nonprofit site publishes two contradictory pricing pages
- **File:** `sites/nonprofit/index.html` (pricing section, lines ~226–274) vs `sites/nonprofit/pricing.html`
- **Problem:** The homepage publishes Starter/Launch/Managed at $200 (~20 hrs), $800 (**~80 hrs**), $1,360 (~136 hrs); `/pricing` publishes Spring/Stream/River/Ocean… at $200 (20 hrs), $800 (**68 hrs**), **$1,400** (136 hrs), up to $4,700. Same site, two indexed pages, different package names, different hours for the same dollar amount, and $1,360 vs $1,400 for 136 hrs. This both cannibalizes "nonprofit virtual assistant pricing" internally and undermines the site's own "We publish our pricing" trust claim in snippets.
- **Fix:** Pick one lineup. Simplest: replace the three homepage plan cards with the top three `/pricing` cards (Spring $200/20 hrs, Stream $800/68 hrs, River $1,400/136 hrs — keep names identical), and change the section's closing link to a descriptive anchor:
  ```html
  <a class="btn btn--ghost" href="/pricing">See all six nonprofit virtual assistant plans</a>
  ```

---

## P2 — Important

### P2-1 · Ministry site barely uses its own keyword territory
- **File:** `sites/ministry/index.html` (title, H1, body)
- **Problem:** Target queries are "virtual assistant for churches", "church admin help", "ministry admin support". The homepage title says "for Ministry", the H1 is "More Time for Your Providential Mission" (zero query words), and body copy is community-internal vocabulary ("providential", "Tribal Messiah", "Hoon Dok Hae") — "church" appears on the homepage almost only in the bookkeeping nav link and a form label. Searchers outside FFWPU phrasing will never match this page; nothing on the site targets "church admin help" at all.
- **Fix:** Keep the brand-voice H1, but (a) widen the title:
  ```html
  <title>Virtual Assistants for Churches &amp; Ministries | Pure Water</title>
  ```
  (58 ch) and (b) add one keyword-bearing H2 + paragraph above the "How We Serve" grid:
  ```html
  <h2>A Virtual Assistant for Your Church's Admin</h2>
  <p>Church admin help without hiring staff — a trained virtual assistant handles member records, events, communications, and bookkeeping support for your ministry.</p>
  ```

### P2-2 · Nonprofit homepage H1 carries no query terms
- **File:** `sites/nonprofit/index.html` line 124
- **Problem:** H1 "Get found. Get trusted. Get ready for funding." is pure slogan — the primary query ("virtual assistant for nonprofits") appears only in title/meta. The skill's H1 rule: contain or paraphrase the primary query.
- **Fix (keeps the slogan as the kicker):**
  ```html
  <h1>The Virtual Assistant Team for Nonprofits — <span class="accent">get found, trusted, and funded</span></h1>
  ```

### P2-3 · "Google Ad Grant management" has no page (named keyword territory)
- **File:** `sites/nonprofit/` (missing page); mentions buried in `index.html` lines 172, 188–203 and one FAQ
- **Problem:** "Google Ad Grant management" is a named target query with real commercial intent, but the site has no URL that can rank for it — the phrase appears mid-paragraph on the homepage only. The honest "we prepare, funders decide" positioning is genuinely differentiated content that deserves its own indexed page.
- **Fix:** Create `sites/nonprofit/google-ad-grant.html` (canonical `https://nonprofits.purewaterautomations.com/google-ad-grant`, title `Google Ad Grant Management for Nonprofits | Pure Water` — 54 ch), move/expand the "A Word About Grants" content there, add it to `sitemap.xml`, and link it from the homepage grants section with anchor text `Google Ad Grant management`.

### P2-4 · Pricing pages are near-duplicates across the two subdomains
- **Files:** `sites/ministry/pricing.html` vs `sites/nonprofit/pricing.html`
- **Problem:** Same six package names, same prices, same hours, and mostly identical bullet copy ("Newsletters, campaigns & automations", "Everything in Ocean, expanded", "Multi-department operational support"…). Cross-host duplication of commercial pages within one brand invites Google to pick one and suppress the other — likely inconsistently per query.
- **Fix:** Keep prices identical but rewrite each card's description + at least one bullet per card in audience language. E.g. ministry River bullet `✓ Newsletters, campaigns &amp; automations` → `✓ Sunday bulletins, holy day campaigns &amp; automations`; nonprofit River → `✓ Donor newsletters, appeal campaigns &amp; automations`. Also differentiate the two page intros (ministry one already is).

### P2-5 · Organization entity is fragmented across the estate
- **Files:** `sites/ministry/index.html` lines 34–49, `sites/nonprofit/index.html` lines 35–49
- **Problem:** Each subdomain declares its own Organization with a different `@id` (`ministry…/#org` vs `nonprofits…/#org`) and different names ("Pure Water Automations" vs "Pure Water Automations LLC"); nonprofit's `sameAs` omits the main site while ministry's includes it. Google sees three unlinked org entities instead of one brand.
- **Fix:** In both files, use one shared identity:
  ```json
  "@type": "Organization",
  "@id": "https://purewaterautomations.com/#organization",
  "name": "Pure Water Automations LLC",
  "url": "https://purewaterautomations.com/",
  ```
  keep each subdomain's URL on the `ProfessionalService` node (unchanged), add `"https://purewaterautomations.com"` to nonprofit's `sameAs`, and reference `"parentOrganization": { "@id": "https://purewaterautomations.com/#organization" }`.

---

## P3 — Polish

### P3-1 · Meta description over limit
- **File:** `sites/ministry/church-bookkeeping.html` line 7 — 165 ch, will truncate.
- **Fix:**
  ```html
  <meta name="description" content="Church bookkeeping led by a professional bookkeeper your community already trusts — monthly reconciliation, transition support, and clear reports.">
  ```
  (149 ch)

### P3-2 · Title over 60 ch
- **File:** `sites/nonprofit/services.html` line 6 — 61 ch.
- **Fix:** `<title>Nonprofit Virtual Assistant Services | Pure Water</title>` (49 ch). (Keyword stays front-loaded.)

### P3-3 · `.html` and extensionless URLs both return 200
- **File:** `server.js` lines 164–169
- **Problem:** `/services.html`, `/index.html` serve 200 alongside `/services`, `/`. Canonical tags mitigate, but a 301 removes the duplicate surface entirely.
- **Fix:** insert before the static resolution (after the `site` check at line 162):
  ```js
  if (urlPath.endsWith('.html')) {
    const loc = urlPath.replace(/(?:index)?\.html$/, '') || '/';
    return send(res, 301, '', { Location: loc === '' ? '/' : loc });
  }
  ```

### P3-4 · og:site_name missing on nonprofit pages; og:image is a raw logo
- **Files:** all `sites/nonprofit/*.html` heads; both sites' `og:image`
- **Fix:** add to each nonprofit head: `<meta property="og:site_name" content="Pure Water Automations — Nonprofits">`. Longer term, replace `logo.png` with a 1200×630 share card and add `og:image:width`/`og:image:height`.

### P3-5 · Images: no dimensions, hotlinked team photos, missing alts/lazy on ministry
- **Files:** `sites/ministry/our-heart.html` 126–137, `sites/nonprofit/about.html` 110–120, `sites/ministry/index.html` 129, `our-heart.html` 75
- **Problems:** (a) no `width`/`height` anywhere → CLS; (b) team photos hotlink `purewaterautomations.com/wp-content/...` — a WP media cleanup breaks both sites; (c) ministry team photos lack `loading="lazy"` (nonprofit has it); (d) meaningful content photos have empty alt on ministry (`09-mission-moving-forward.png`, `05-delegation-in-motion.png`) while nonprofit's copy of the same image has a descriptive alt.
- **Fix:** copy the three team photos into `shared/assets/team/`, then e.g.:
  ```html
  <img class="team-photo" src="/shared/assets/team/eunmi-rangala-maddox.webp" alt="Eunmi Rangala-Maddox" width="400" height="400" loading="lazy">
  ```
  and on ministry: `alt="Illustration of mission work moving forward with steady support"` / `alt="Illustration of delegation in motion"`.

### P3-6 · Internal linking: thin contextual links, zero cross-subdomain links
- **Files:** `sites/ministry/index.html` line 161; both footers
- **Problems:** The money page (`church-bookkeeping`) gets body-link equity only from services.html; the two subdomains never link each other (both link the main site), so crawl discovery between the sister sites depends entirely on external signals.
- **Fix:** (a) in the ministry homepage "Records & Reporting" card: `...and clean books your board and HQ can trust — see our <a href="church-bookkeeping">church bookkeeping service</a>.` (b) add one footer line to each site, e.g. ministry footer Explore: `<a href="https://nonprofits.purewaterautomations.com/">Virtual Assistants for Nonprofits</a>` and the mirror link on nonprofit.

### P3-7 · FAQPage JSON-LD answers abridged vs visible text
- **File:** `sites/ministry/church-bookkeeping.html` — schema answer 1 (line 48) is a shortened version of the on-page answer (line 256).
- **Fix:** paste the full visible answer text into the schema `text` field (Google's guideline: markup must match visible content; matching the full text is the safe reading). Same for any future edits — keep them in lockstep.

### P3-8 · ProfessionalService nodes ineligible for local rich results
- **Files:** both `index.html` files, `ProfessionalService` node
- **Problem:** ProfessionalService is a LocalBusiness subtype; without `address` (and ideally `priceRange`, `image`, `@id`) it validates but earns nothing.
- **Fix (both sites, values from the LLC's registered address):**
  ```json
  "@id": "https://ministry.purewaterautomations.com/#service",
  "image": "https://ministry.purewaterautomations.com/shared/assets/logo.png",
  "priceRange": "$200–$4,700/month",
  "address": { "@type": "PostalAddress", "addressRegion": "NJ", "addressCountry": "US" }
  ```
  If no address should be published, this stays a known limitation — don't fabricate one.

### P3-9 · Sitemaps lack `<lastmod>`
- **Files:** both `sitemap.xml`
- **Fix:** optional; add `<lastmod>2026-08-30</lastmod>` per `<url>` and bump on deploy (deploy.sh can stamp it). Low impact — skip if it won't be maintained.

---

## Summary

Markup fundamentals are solid (unique titles/descriptions, valid JSON-LD, correct canonicals/sitemaps/robots); the real risks are strategic: the legacy WP `/non-profit/*` and `/bookkeeping/` pages actively cannibalize both new subdomains, and the nonprofit site contradicts its own pricing across two indexed pages.
Fix the two P1s before driving any traffic; then close the keyword gaps (ministry pages don't say "church", no Google Ad Grant page) and de-duplicate the twin pricing pages.
P3 items are cheap mechanical polish — the server-side `.html` 301 and the image fixes are the highest-value ones.
