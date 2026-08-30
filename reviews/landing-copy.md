# Landing Copy Review — pwa-sites (ministry + nonprofit)

Reviewed 2026-08-30 against `design-src/church-bookkeeping-landing-page-copy.md`, `design-src/npo-landing-page-copy.md`, and the brand notes in `shared/ds/readme.md`. Method: rampstack `landing-page-copy` (hero → proof → problem → solution → objections → CTA). Constraints honored: no invented stats/testimonials/guarantees/urgency proposed; no placeholder restoration proposed.

Overall: both sites are faithful, honest builds of strong drafts. The bookkeeping page preserves every one of the draft's differentiators (named bookkeeper, learn-before-change promise, retirement scenario, money-movement safeguard, explained quote-based pricing). The findings below are mostly claims that outran the drafts' own honesty gates, and one self-contradiction that undermines the nonprofit site's #1 stated differentiator.

---

## P1 — Nonprofit site publishes two conflicting price lists

**Page/section:** `sites/nonprofit/index.html` (Pricing section) vs `sites/nonprofit/pricing.html` (full page).

**Problem:** The homepage sells three tiers — Starter $200/~20 hrs, Launch $800/~80 hrs, Managed $1,360/~136 hrs. The dedicated /pricing page sells six differently-named tiers — Spring $200/20, Stream $800/68, River $1,400/136, etc. So the same site offers **$800 for 80 hours AND $800 for 68 hours**, and **136 hours for $1,360 AND $1,400**. The homepage's headline differentiator is literally "We publish our pricing… backwards for an organization working from a board-approved budget" — a treasurer who opens both pages sees two contradicting price lists, which is worse than publishing none. (Cross-site: the ministry site also sells Stream at $800/68 hrs, so an FFWPU nonprofit comparing sites sees a third variant.)

**Replacement (ready to paste):** Make `pricing.html` mirror the homepage table verbatim (the canonical draft's confirmed tiers), and close with an honest escalation line instead of the three extra cards:

> **Starter — $200/month.** ~20 hrs. Best for steady, light support — one recurring lane like admin or social media. Pace: bigger projects take 3–6 months.
>
> **Launch — $800/month.** ~80 hrs. Best for real movement — website, outreach, and grant prep advancing together. Pace: most foundations built in the first 1–2 months. *(Most Choose This)*
>
> **Managed — $1,360/month.** ~136 hrs. Best for high-touch support across everything at once. Pace: fastest path.
>
> Need more than 136 hours a month? Larger plans are available — ask on your assessment call.

**Data gap (do not guess):** the draft itself flags "$680/68 hrs vs $800/80 hrs" as unconfirmed. Confirm which hour count $800 actually buys before pasting; whichever number is true must be the same on index, /pricing, and (if it's the same product) the ministry site.

---

## P1 — "14-day satisfaction guarantee" published without confirmation

**Page/section:** `sites/ministry/pricing.html` (hero: "…and a 14-day satisfaction guarantee on every package"; footer note: "Every package includes our 14-day satisfaction guarantee"), `sites/nonprofit/pricing.html` (hero: "…a 14-day satisfaction guarantee your board can appreciate"; closing note).

**Problem:** Neither canonical draft contains a guarantee. The NPO draft deliberately flags even the softer "first two weeks, we'll adjust it" line as *unconfirmed, currently case-by-case* policy. The built pricing pages upgraded that to a named guarantee — a stronger promise than the business has confirmed it makes. This is exactly the invented-guarantee category the brand voice forbids. (If a 14-day guarantee genuinely exists as standing policy on the main PWA site, keep it — but then the NPO FAQ's weaker "we'll work with you to adjust it" answer should be upgraded to match.)

**Replacement (ready to paste), pending confirmation:**

- Ministry pricing hero: "From a few hours of weekly help to full operational support. Clear pricing, no hidden fees, and every package month-to-month — adjust or cancel anytime."
- Ministry pricing note: "Every package is month-to-month with flexible cancellation. Questions about fit? Contact us or visit the main PWA site."
- Nonprofit pricing hero: "Three monthly packages, no hidden fees, and month-to-month flexibility your board can appreciate."
- Nonprofit pricing closing note: "Every package is month-to-month — no long-term contract, adjust or cancel anytime."

(Month-to-month/cancel-anytime is confirmed language from the canonical draft's fine print, so it is safe to state.)

---

## P1 — Ministry home "hours back" stat tiles are unsourced outcome claims

**Page/section:** `sites/ministry/index.html`, "What Would You Do with 780 More Hours a Year?" — tiles "15+ Hours back per week / 60+ per month / 780+ per year".

**Problem:** These read as measured results ("hours back") but correspond to no package (Spring is 5/wk, Stream 17/wk) and no measurement. Internally consistent arithmetic doesn't make it a real stat. The fix is to ground the tiles in the one thing that IS verifiable — the hours each package actually delivers — which keeps the emotional payoff of the section without the invented number.

**Replacement (ready to paste):**

- Section headline: "What Would You Do with the Hours You Hand Off?"
- Sub (keep as is): "More visits. More witnessing. More Hoon Dok Hae with your family. That is what the hours are for."
- Tile 1: **5** — "Hours a week with Spring"
- Tile 2 (accent): **17** — "Hours a week with Stream"
- Tile 3: **34** — "Hours a week with River"
- CTA below (keep): "See Ministry Packages"

---

## P2 — "Compare the math" card: unsourced competitor rates + an effective-rate claim the packages don't support

**Page/section:** `sites/ministry/pricing.html`, compare card ("$30–$50/hr Typical US-based VA agency rate", "~$42–$50/hr Premium services many churches use (reported; pricing unpublished)", "≈$10/hr PWA … effective rate").

**Problem:** Two specific market-rate figures with no citation, and a blanket "≈$10/hr" that the packages themselves contradict (Stream is $11.76/hr; the actual spread is $8.51–$11.76). The honest, stronger contrast — the one the NPO draft already articulates — is *published vs. unpublished pricing*, which needs no numbers you can't back.

**Replacement (ready to paste):** two-item card:

- Item 1: **Unpublished** — "What most VA agencies and church services show you before a sales call"
- Item 2 (highlight): **≈$9–$12/hr** — "PWA ministry packages — effective rate, published on this page"

(≈$9–$12 is derived directly from the six packages shown; keep the competitor dollar figures only if a citable source exists.)

---

## P2 — "Founder video coming soon" card shipped on both homepages

**Page/section:** `sites/ministry/index.html` (section directly after the hero) and `sites/nonprofit/index.html` (founder card). Both show a play button + "Founder video coming soon" and **no body copy** — an empty promise occupying the early-proof slot the skill says should carry trust.

**Problem:** A "coming soon" pane is placeholder content in the highest-value position after the hero. Until the video exists, give the card one verifiable sentence of founder story and a link, so the slot does proof work. (This adds real copy; it does not restore an omitted placeholder.)

**Replacement (ready to paste):**

- Ministry, in `.founder-body` after the role line: `<p class="body-copy">We started PWA after watching leaders we love carry heavy administrative loads on top of their providential responsibilities — and deciding to do something practical about it.</p> <a class="btn btn--ghost btn--sm" href="our-heart">Read Our Heart</a>` — and remove the play-button/"coming soon" media pane until the video is real (swap in the `09-mission-moving-forward.png` illustration or a founder photo).
- Nonprofit, in `.founder-card__body`: `<p>We built PWA after watching mission-driven leaders spend their best hours on paperwork instead of people.</p> <a class="btn btn--ghost btn--sm" href="/about">Meet the Team</a>` — same treatment for the media pane.

---

## P2 — Nonprofit /pricing page omits the 50%-off nonprofit rate story

**Page/section:** `sites/nonprofit/pricing.html`. The draft's strongest pricing argument — "Our standard rate is $20/hour. Qualified nonprofits pay $10/hour" — appears only on the homepage. The page actually named "Pricing" (where budget-holders land directly) never says it.

**Replacement (ready to paste, above the price grid — verbatim from the canonical draft):**

> **Nonprofit rate: 50% off.** Our standard rate is $20/hour. Qualified nonprofits pay **$10/hour** — our way of making professional support reachable for mission-driven organizations.

---

## P2 — Bookkeeping page publish-gates from the draft checklist not visibly cleared

**Page/section:** `sites/ministry/church-bookkeeping.html` — (a) Sayaka Stephens is named/featured; (b) "authorization to actually send a payment always stays with a U.S.-based finance lead" is stated in present tense (Model section, safeguard box, and FAQ).

**Problem:** The canonical draft's publishing checklist requires (a) Sayaka's explicit sign-off before naming her, and (b) confirming the U.S.-based finance lead role is actually staffed before present-tense claims. Not a copy defect — a verification gate. No change if both are confirmed.

**Replacement if (b) is NOT yet staffed (safeguard box + matching FAQ):**

> …but authorization to actually send a payment always stays stateside — with your church or a designated U.S.-based finance lead, never with the bookkeeping team.

---

## P2 — "What if it's not working?" adjust promise published as settled policy

**Page/section:** `sites/nonprofit/index.html` — pricing note "**If something's not working:** Tell us within the first two weeks of a new plan and we'll adjust it with you." + FAQ answer (also in FAQPage JSON-LD).

**Problem:** The draft flags this exact line as case-by-case, unconfirmed policy. Published, it is a standing commitment. Either confirm it as policy (fine as written) or soften.

**Replacement if unconfirmed:** "**If something's not working:** every plan is month-to-month — tell us early and we'll work out the right adjustment together." (FAQ answer: "Plans are month-to-month. Tell us early if something's off and we'll work out the right adjustment together." Update the JSON-LD to match.)

---

## P3 — Bookkeeping cash/check FAQ answer is a 170-word wall

**Page/section:** `sites/ministry/church-bookkeeping.html`, first FAQ item. Strongest objection-handling on the site, least scannable. Keep every word; break into three paragraphs at these seams: ¶1 ends "…exactly as it is now." ¶2 begins "The only new habit…" and ends "…same as today." ¶3 begins "Our part starts once the money is deposited…". (Mirror the split in the FAQPage JSON-LD only if it stays one string — schema is fine unbroken.)

## P3 — Lead form microcopy: inconsistent optional-marking, no reassurance under the button

**Page/section:** all four lead forms (ministry index + contact, nonprofit index + contact). "Name \*" / "Email \*" use asterisks, "Phone (optional)" spells it out, "Organization" is optional but unmarked. Fix: label "Church or organization (optional)" / "Organization (optional)". Add one reassurance line under the Send Message button: `<p class="form-note">We reply within one business day — a real person, not an auto-responder.</p>` Button text "Send Message" is fine; placeholder "What would you love to hand off first?" is excellent — keep.

## P3 — Heading-casing drift on the ministry site

**Page/section:** `church-bookkeeping.html` mixes Title Case ("What We Handle", "How It Works") with sentence case ("A lot of churches are one retirement away…", "About pricing"). DS rule is Title Case for headings. Recommendation: keep sentence case for the long conversational headlines (they'd be worse in Title Case) but fix the short ones: "About pricing" → "About Pricing". State the exception once in the DS readme so it stops drifting.

## P3 — "one simple promise" lists three things

**Page/section:** `sites/nonprofit/pricing.html` hero. Superseded by the P1/guarantee replacement above; if that isn't taken, use: "Six monthly packages and no hidden fees — pricing your board can actually plan around."

## P3 — CTA label → destination mismatch on the bookkeeping page

**Page/section:** `church-bookkeeping.html` — "Talk to Us About Your Church's Books" / "Get a Straightforward Quote" both land on the generic `team.purewaterautomations.com/discover` assessment funnel. If that funnel doesn't ask about bookkeeping, the scent breaks. Fix on the funnel side (a bookkeeping interest option or `?interest=bookkeeping` param), or point these CTAs at `/contact` with the "Church bookkeeping" select option — copy stays as is either way.

## P3 — Nonprofit hero lacks an early trust line (verifiable one already exists)

**Page/section:** `sites/nonprofit/index.html`. The only proof ("since April 2026… churches, youth sports organizations, ministries, PTAs, and childcare and afterschool organizations across Texas and the Northeast") sits below pricing. It's the site's one verifiable trust claim — echo it early. Paste under the hero note: `<p class="hero__proof">Serving churches, youth sports organizations, ministries, PTAs, and childcare organizations across Texas and the Northeast since April 2026.</p>` Keep the fuller Who We Serve section where it is.

---

**Summary:** 3 P1s — the nonprofit site's two conflicting price lists (which sabotage its own "we publish our pricing" differentiator), an unconfirmed "14-day satisfaction guarantee" on both pricing pages, and invented "hours back" stat tiles on the ministry home. 5 P2s tighten claims to what's confirmed (competitor rates, founder-video placeholder, missing 50%-off story on /pricing, bookkeeping publish-gates, adjust-policy line); 6 P3s are scannability, microcopy, and consistency polish. The bookkeeping page itself is the strongest copy in the repo — it preserved every differentiator from its draft; fixes there are verification and formatting, not rewriting.
