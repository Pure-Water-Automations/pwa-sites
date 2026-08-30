# CRO + Form Strategy Review — pwa-sites (ministry + nonprofit)

Date: 2026-08-30 · Reviewer: Claude (rampstack `cro-optimization` + `form-strategy`, combined pass)
Scope: `sites/ministry/*`, `sites/nonprofit/*`, `shared/js/site.js`, `server.js`. Verified live on `PORT=8824 node server.js` (pages 200, `/api/lead` empty-submit → 400, valid → ok, honeypot → silent ok; test row deleted).

**Method note (per skill guidance):** the site is pre-launch with zero traffic, so no A/B test proposals — A/B testing needs ~thousands of conversions/variant. This is a heuristic conversion audit. Data gaps are stated where they exist rather than estimated.

Severities: **P1** = conversion blocker · **P2** = meaningful lift · **P3** = polish.

---

## CTA landscape (context for the findings)

Three conversion paths exist: (1) external assessment call `team.purewaterautomations.com/discover`, (2) native lead form (`/api/lead`, on index + contact of each site), (3) external formly quiz `purewaterautomations.getformly.app/tcndHU`.

| Page | Discover call | Native form | Formly quiz | Hierarchy clear? |
|---|---|---|---|---|
| ministry index | primary (hero, band, nav, footer) | mid-page section, framed as alternative | tertiary ghost in final band | **Yes** — model page |
| ministry pricing | primary (6 tier CTAs + band) | — (nav only) | ghost in final band | Yes |
| ministry services / our-heart | primary | — (nav only) | ghost in band | Yes, but no soft path (P2-5) |
| ministry church-bookkeeping | primary (all 5 CTAs) | — (nav only) | — | Yes |
| ministry contact | primary left column | co-equal right column | — | Yes |
| nonprofit index | **two same-URL buttons** (P2-1) | bottom section | **absent** (P3-3) | **No** |
| nonprofit pricing | primary (6 tier CTAs + band) | — (nav only) | ghost in band | Yes |
| nonprofit services / about | primary | — (nav only) | ghost in band | Yes, but no soft path (P2-5) |
| nonprofit contact | primary in hero | main content | — | Yes |

No dark patterns found: no countdown timers, no fake scarcity, no exit popups, no pre-checked opt-ins. The repeated "no commitment, pressure, or obligation" note is the right register for pastors. The exceptions that *do* read as pressure/inflation are P2-4 and P2-6 below.

---

## P1 — Conversion blockers

### P1-1 · Nonprofit index + contact · lead form — `novalidate` disables all validation, and nothing replaces it

**Pages:** `sites/nonprofit/index.html:376`, `sites/nonprofit/contact.html:78`
**Problem:** both nonprofit forms carry `novalidate`, and `shared/js/site.js` does no client-side validation of its own. Native `required`/`type="email"` checking is switched off, so an empty or bad-email submit round-trips to the server, gets a 400, and the only feedback is one small gray-red line under the button: "Name and a valid email are required — or email us…". No field is highlighted, focus doesn't move, and the user must diagnose which field is wrong. The ministry forms do NOT have `novalidate` and behave correctly — this is a divergence, not a design choice.
**Exact fix:** delete the attribute in both files.

```html
<!-- nonprofit/index.html and nonprofit/contact.html — change -->
<form class="lead-form-card" data-lead-form novalidate>
<!-- to -->
<form class="lead-form-card" data-lead-form>
```

Native browser validation (field-level message, auto-focus, mobile keyboard hints) comes back for free. Zero JS needed.

### P1-2 · Nonprofit site — home and /pricing sell two incompatible package systems

**Pages:** `sites/nonprofit/index.html:226-273` vs `sites/nonprofit/pricing.html:74-158`
**Problem:** the home pricing section offers **Starter $200/~20h · Launch $800/~80h ("Most Choose This") · Managed $1,360/~136h**, anchored by a "$10/hour nonprofit rate" card (math checks out: all three = $10/hr). The /pricing page offers a different system: **Spring $200/20h · Stream $800/68h · River $1,400/136h ("Most Popular") · Ocean/Plus/Enterprise**. Conflicts a board-budget reader will catch in one visit:

- $800/month buys **80 hrs** on home but **68 hrs** on /pricing.
- ~136 hrs costs **$1,360** on home but **$1,400** on /pricing.
- The "$10/hour" promise on home is contradicted by Stream ($11.76/hr) and River ($10.29/hr).
- The recommended tier conflicts: "Most Choose This" = $800 Launch on home; "Most Popular" = $1,400 River on /pricing.
- Names don't match at all (Starter/Launch/Managed vs Spring/Stream/River/Ocean), so the reader can't even tell they're looking at the same offers.

This audience shops with a board-approved budget; a pricing contradiction inside the same site is a trust kill, not a typo.
**Exact fix:** pick ONE package system and mirror it on both pages (names, hours, prices, and one recommended tier). Two clean options — decision is Justin's, since only he knows which sheet is current:
- **(a)** Keep the home trio ($10/hr-true) and cut /pricing down to those three + "larger plans available — talk to us"; or
- **(b)** Keep the six-tier Spring→Ocean system, rebuild the home cards from it verbatim, and delete or reword the "$10/hour" rate card so it matches the real tier math (e.g. "$10–$12/hour effective rate, exact rate shown on every plan").
Whichever wins, the recommended-tier flag must point at the same plan on both pages.

### P1-3 · Both sites · post-submit promise — "within one business day" is unverified end-to-end

**Pages:** all four lead forms; `server.js:74-96` (`notifyLead`)
**Problem:** every form promises "we'll reply within one business day." The email notification requires **all five** env vars (`EMAIL_CORE_URL`, `EMAIL_CORE_KEY`, `EMAIL_CORE_WORKSPACE`, `EMAIL_CORE_SENDER_ID`, `LEAD_NOTIFY_TO`) and silently no-ops if any is missing — leads then sit unseen in SQLite on the box until someone remembers to ssh in. The promise's believability is fine (specific, modest, honest, and the error state already offers the fallback email — good); what's unverifiable from this review is whether anyone will actually *see* the lead. **Data gap stated:** prod env on the Hostinger box was not inspected from this review.
**Exact fix (launch checklist, not code):** before DNS goes live, (1) confirm the five env vars are set in `pwa-sites.service`, (2) submit one real lead from each site, (3) confirm the notification email lands. If Email Core can't be wired by launch day, add a temporary daily reminder (any mechanism) to read the leads table — a broken one-business-day promise on the first real lead is the most expensive possible first impression.

---

## P2 — Meaningful lift

### P2-1 · Nonprofit index · hero (also How-It-Works and final CTA panel) — two differently-labeled buttons go to the identical URL

**Page:** `sites/nonprofit/index.html:126-131` (repeated at 303-306, 361-364)
**Problem:** "Get Admin & Ops Support" and "Get Grant-Ready" both link to the bare `/discover` URL. The hero note even confesses it: "Both lead to the same short assessment call." That's a fake choice — it adds a decision the visitor must make, delivers zero routing value, and throws away the segmentation signal (which of the two value props pulled them). Two equally-weighted buttons also means no visual primary above the fold.
**Exact fix (smallest):** make the choice carry data by appending a query param the funnel (or at minimum its analytics) can read:

```html
<a class="btn btn--primary btn--lg" href="https://team.purewaterautomations.com/discover?interest=admin-ops" target="_blank" rel="noopener">Get Admin &amp; Ops Support</a>
<a class="btn btn--secondary btn--lg" href="https://team.purewaterautomations.com/discover?interest=grant-ready" target="_blank" rel="noopener">Get Grant-Ready</a>
```

If the discover funnel ignores params entirely, collapse to one primary + one navigational secondary instead:

```html
<a class="btn btn--primary btn--lg" href="https://team.purewaterautomations.com/discover" target="_blank" rel="noopener">Book a Free Assessment</a>
<a class="btn btn--secondary btn--lg" href="/pricing">See Published Pricing</a>
```

(Then the hero note "Both lead to the same call…" can be deleted or reworded.)

### P2-2 · Both sites · the "14-day satisfaction guarantee" is undefined and inconsistent

**Pages:** `sites/nonprofit/pricing.html:70,158` + meta descriptions; `sites/ministry/pricing.html:69,163` + meta; vs `sites/nonprofit/index.html:272,344-345` (FAQ)
**Problem:** the pricing pages promise a "14-day satisfaction guarantee" (unstated terms — refund? credit? adjustment?), while the nonprofit home FAQ answers the same objection with something weaker and different: "Tell us within the first two weeks … we'll work with you to adjust it." An adjustment is not a guarantee. For risk-averse pastors and boards, an undefined guarantee reads as a salesy sticker; an inconsistent one reads worse. (Hard constraint respected: do **not** invent stronger terms — align on what PWA will actually honor.)
**Exact fix:** write the real policy in one sentence and use it verbatim everywhere the guarantee is mentioned (both pricing notes, the FAQ answer, and the two meta descriptions). Template — pick the true variant:

```html
<!-- if it is a refund guarantee -->
Every package is month-to-month with a 14-day guarantee: if it's not working in your
first two weeks, tell us and we'll refund that month.
<!-- if it is an adjust/cancel promise -->
Every package is month-to-month: if it's not working in your first two weeks, tell us
and we'll adjust the plan with you — or you can cancel with nothing further owed.
```

If the second variant is the truth, stop calling it a "satisfaction guarantee" on the pricing pages and in meta descriptions — call it what it is ("14-day check-in promise" / the sentence itself).

### P2-3 · Both sites · "Most Popular" / "Most Choose This" badges are unverifiable popularity claims

**Pages:** `sites/ministry/pricing.html:116`, `sites/nonprofit/pricing.html:104`, `sites/nonprofit/index.html:249`
**Problem:** these badges are empirical claims about customer behavior. The ministry service line is pre-launch and the nonprofit line is ~5 months old — if there is no real base of package-holders behind "most," this is exactly the kind of manufactured social proof the brand constraints prohibit and this audience distrusts. The *anchoring function* of the badge is valuable and should be kept.
**Exact fix:** keep the flag, change the claim to a recommendation (which is honestly yours to make):

```html
<span class="plan-flag">Recommended</span>
<span class="price-card__flag">Recommended</span>
```

(If one tier genuinely IS what most current clients hold, keep "Most Popular" on that tier only — but then it must be the same tier on nonprofit home and /pricing, see P1-2.)

### P2-4 · Ministry index · "780 hours" stat tiles — numbers anchored to no package

**Page:** `sites/ministry/index.html:180-204`
**Problem:** the 15+/60+/780+ "hours back" tiles are internally consistent marketing math (15×52) but match no actual package (Spring = 5/wk, Stream = 17/wk, River = 34/wk). To a skeptical pastor this is the classic inflated-benefit pattern: big numbers, no basis. The section's emotional close ("More visits. More Hoon Dok Hae with your family.") is excellent — keep it; just ground the numbers.
**Exact fix:** tie the tiles to a real package's delivered hours:

```html
<p class="section-sub">On a Stream package, your assistant carries 17 hours of ministry
administration every week. More visits. More witnessing. More Hoon Dok Hae with your
family. That is what the hours are for.</p>
...
<div class="stat-num">17</div><div class="stat-label">Hours carried per week</div>
<div class="stat-num">68</div><div class="stat-label">Hours carried per month</div>
<div class="stat-num">816</div><div class="stat-label">Hours carried per year</div>
```

(Adjust the headline to "What Would You Do with 800 More Hours a Year?" or per-package equivalent. Numbers above are Stream: 17/wk, 68/mo, 68×12=816/yr — real, checkable, on the pricing page.)

### P2-5 · Both sites · deep pages offer no low-friction path — call or nothing

**Pages:** ministry `services.html`, `our-heart.html`, `church-bookkeeping.html`; nonprofit `services.html`, `about.html`, `pricing.html` (CTA bands)
**Problem:** on every non-index, non-contact page, the only conversion action is the external booking funnel (plus the quiz on some bands). The native message form — deliberately kept as the low-friction alternative per AGENTS.md — is unreachable except via the nav "Contact" link. Many pastors will not cold-book a "call with a company"; the soft path must be visible at the decision moment, not hidden in the nav.
**Exact fix:** one line under each CTA band's note (matches the existing `cta-note` / `cta-panel__note` styling):

```html
<!-- ministry pages, after <p class="cta-note">…</p> -->
<p class="cta-note">Prefer to write first? <a href="contact">Send us a message</a> — we reply within one business day.</p>

<!-- nonprofit pages, after <p class="cta-panel__note">…</p> -->
<p class="cta-panel__note">Prefer to write first? <a href="/contact">Send us a message</a> — we reply within one business day.</p>
```

### P2-6 · Ministry pricing · commitment terms missing where the budget decision happens

**Page:** `sites/ministry/pricing.html:163` (pricing-note)
**Problem:** the nonprofit fineprint spells out what a treasurer needs ("Payment is collected at the start of each month… month-to-month — no long-term contract, adjust or cancel anytime"). The ministry pricing note says only "14-day satisfaction guarantee and flexible cancellation" — vaguer, on the site whose audience is *more* budget-anxious. No FAQ or objection handling exists anywhere on the ministry site.
**Exact fix:** reuse the nonprofit fineprint sentence (it's already true of the same packages):

```html
<p class="pricing-note">Every package includes a dedicated assistant and team-leader
oversight. Plans are month-to-month — no long-term contract, adjust or cancel anytime —
with our 14-day guarantee. Questions about fit? <a href="contact">Contact us</a>.</p>
```

(Wording of the guarantee clause per P2-2's resolved sentence.)

---

## P3 — Polish

### P3-1 · All four lead forms · required/optional marking is half-done

**Problem:** `Name *` and `Email *` use an unexplained asterisk; `Phone (optional)` is marked, but Organization, interest, and Message — equally optional — are not. Users overestimate form cost.
**Exact fix:** one calibrating line above the grid (both sites, both pages):

```html
<p class="form-status" style="margin:0 0 12px;">Only name and email are required.</p>
```

(Then "(optional)" on phone can stay or go — either is consistent.)

### P3-2 · `shared/js/site.js:33` · success state has no fallback contact and is easy to miss

**Problem:** on success the form resets and a 14px line appears under the button. Fine for a short form (inline success is correct per form strategy), but unlike the error state it offers no "need us sooner" fallback contact.
**Exact fix (one string):**

```js
status.textContent = "Thank you — we'll be in touch within one business day. Need us sooner? Call +1 (908) 357-7801.";
```

### P3-3 · Formly quiz placement — missing where it helps, present where it competes

**Problem:** the quiz's job is "help me pick a tier." It's absent from the nonprofit *home* pricing section (which even has a "Not sure where to start?" note — the natural slot) and from the top of both /pricing pages, yet appears in final CTA bands on ministry home/our-heart where it slightly dilutes the assessment ask.
**Exact fix:** add to `sites/nonprofit/index.html:271`:

```html
<p class="pricing-note"><strong>Not sure where to start?</strong> Take the
<a href="https://purewaterautomations.getformly.app/tcndHU" target="_blank" rel="noopener">1-minute package quiz</a>
— or know that most organizations wanting visible progress choose <strong>Launch</strong>.</p>
```

and an equivalent line under each /pricing hero. Leave the CTA bands as-is (the ghost styling already subordinates it) — do not add a third button anywhere new.

### P3-4 · Spam defense — adequate for launch; noted for later

Honeypot (client + server) + per-IP rate limit (10/hr) + 20KB body cap is a sound two-layer defense for a low-traffic lead form. If spam gets through post-launch, the next cheap layer is a server-side minimum-time check (reject submits < ~3s after page token issue) — do not build it now. One nit: the honeypot input carries `aria-hidden="true"` on a focusable-by-API element; it's already `tabindex="-1"` so real-world impact is nil — leave it.

### P3-5 · Ministry pricing compare card · market-rate figures are unsourced

**Page:** `sites/ministry/pricing.html:75-91`. "$30–$50/hr typical US-based VA agency rate" is presented as fact with no source; the middle item at least hedges "(reported; pricing unpublished)". For this audience, either add a source ("per published rates at major US VA agencies, 2026") or apply the same hedge to the first item. Keep the card — the anchoring is legitimate and the "≈$10/hr, published on this page" framing is honest.

### P3-6 · Analytics — the ONE addition worth shipping at launch (note only, not a build)

Given the zero-dependency constraint and this audience's privacy posture, the recommendation is **server-side measurement only — no client analytics script at launch**:

1. The leads table already records `page` — form-conversion attribution exists today for free.
2. The one blind spot is the *primary* CTA (external discover clicks are invisible). Close it with a same-server redirect: add a `GET /go/discover` route to `server.js` that appends one line (`ts, site, referer`) to a log/table and 302s to `https://team.purewaterautomations.com/discover`, then point every discover href at `/go/discover`. ~10 lines, zero deps, no consent banner, and it yields the launch-phase CRO numbers that matter: discover-clicks vs form-submits per page per site.
3. If pageview-level data is wanted later, self-hosted **Umami or Plausible** on the existing VPS is the fitting upgrade (cookieless, no banner) — defer until there's traffic worth segmenting.

---

## Summary

The single riskiest launch defect is the nonprofit home-vs-pricing package contradiction (P1-2) — fix that and the `novalidate` forms (P1-1) before DNS, and verify the lead-notification env end-to-end (P1-3) so the "one business day" promise is real.
The P2 set is one theme: this brand wins by being the honest vendor — so make every claim checkable (real package hours, defined guarantee, "Recommended" not "Most Popular") and give call-shy pastors the written path at every decision moment.
Overall the funnel architecture is sound — clear primary CTA on 8 of 9 pages, no dark patterns, a lean 2-required-field form with layered spam defense — this is a strong pre-launch baseline, not a rebuild.
