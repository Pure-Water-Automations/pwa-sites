# Pure Water Automations — Design System

**Version:** 1.0.0 | **Updated:** June 2026

Pure Water Automations (PWA) is an operations support and automation service for pastors, ministry leaders, Tribal Messiahs, and mission-driven organizations. PWA helps leaders remove administrative burden through practical systems, trained virtual assistants, documented workflows, and light automation — so they can focus fully on their calling.

**Founders:** Justin Okamoto and Eunmi Rangala | **Founded:** June 2025 | **Legal:** LLC

**Brand Tagline:** Refreshing leaders. Removing burdens. Keeping mission work moving.

**Name Origin:** "Pure Water" is inspired by True Mother's words — pure water is clear, life-giving, and continually moving in order to stay pure. For PWA, this means refreshing leaders, removing burdens, and keeping systems clean enough to keep mission work moving.

**Brand Essence:** Service · Clarity · Faithfulness

---

## Sources

- **Logo:** `assets/logo.png` (official brand file, no background)
- **Logo reference:** `uploads/PWA Logo Official no background.png`
- **Business wiki:** `uploads/PWA Organization Wiki …html`
- No external Figma provided; system is derived from logo analysis + org wiki.
- _Flag to client: ask for any existing brand guidelines or Figma files for a higher-fidelity second pass._

---

## Quick Index

| Path | Contents |
|------|----------|
| `styles.css` | Design system entry point — link this one file |
| `tokens/` | CSS custom properties: colors, type, spacing, radius, shadows, motion, fonts |
| `components/core/` | Button, Card, Badge, Tag |
| `components/forms/` | Input, Select, Checkbox, Radio, Switch |
| `components/data/` | Stat, Table |
| `components/navigation/` | Tabs |
| `components/feedback/` | Modal, Toast |
| `templates/` | Starting templates: slide deck, memo, dashboard, website |
| `guidelines/` | Specimen cards (Design System tab) |
| `assets/` | Logo and brand imagery |
| `ui_kits/website/` | Marketing homepage UI kit |
| `ui_kits/dashboard/` | Operations dashboard UI kit (overview, login, settings, client detail) |
| `SKILL.md` | Agent skill manifest for Claude Code |

---

## CONTENT FUNDAMENTALS

### Who PWA Serves
- Pastors and ministry leaders with too much administrative load
- Tribal Messiahs and mission-driven nonprofit leaders
- Small teams that need stronger systems without full-time operations staff
- Organizations that want to delegate sustainably and operate with clarity

### Client Delivery Philosophy
PWA doesn't just build tools — it helps leaders delegate, clarify workflows, and create sustainable operating systems. Every engagement should leave the organization more organized than PWA found it: clearer workflows, better delegation paths, SOPs, templates, and a stronger operating hub.

### Voice & Tone
PWA communicates with **warm clarity** — like a trusted, organized friend who happens to be excellent at systems. The brand is:
- **Clear:** Plain language. No jargon. Good operations should make work easier to understand and easier to repeat.
- **Practical:** Grounded in what actually helps. Solutions over complexity.
- **Servant-hearted:** The work exists to serve the mission, not to show off sophistication.
- **Faithful:** Reliable, consistent, trustworthy. Small details matter because they build trust for larger responsibilities.
- **Encouraging:** Leaders are often overwhelmed. PWA's voice should feel like relief, not pressure.

### Copy Rules
- **Casing:** Title case for headings and CTAs. Sentence case for body and labels.
- **Person:** Second person ("you / your organization") in client-facing work. First-person plural ("we / our") in brand statements.
- **Emoji:** Used in internal tools and Notion-style docs where they aid navigation. Avoid in polished external UI unless the client culture uses them.
- **Numbers:** Use numerals. Precision matters but qualitative language is also appropriate ("most of your admin time" not always a specific %).
- **CTAs:** Warm, outcome-focused. "Get your systems organized" not "Submit." "Free up your calendar" not "Click here."
- **Tone words to use:** Clear, organized, sustainable, trusted, faithful, practical, free (as in freedom), mission, calling.
- **Tone words to avoid:** Disrupt, leverage, synergize, scalable (unless genuinely relevant), seamless, game-changer.
- **Product name:** "Pure Water Automations" (full) or "PWA" (abbreviated). Never "Purewater" or "P.W.A."
- **Punctuation:** Oxford comma always. Em-dashes (—) for parenthetical phrases. Ellipses only for genuine continuation.

### Examples
| ❌ Avoid | ✓ Use |
|----------|-------|
| "Cutting-edge automation solutions" | "Practical systems that keep your mission moving" |
| "Click here to learn more!" | "See how PWA works" |
| "Leverage our platform's capabilities" | "Let us handle the admin so you can focus on your calling" |
| "Real-time data & insights!!!" | "Everything organized. Always within reach." |
| "Scalable infrastructure for modern orgs" | "Systems built for how your team actually works" |

---

## VISUAL FOUNDATIONS

### Colors
Two primary brand colors extracted from the logo:
- **Navy `#132272`** — depth, trust, steadiness. Used for primary text, CTAs, sidebar, dark surfaces. Represents the grounded, dependable side of PWA.
- **Sky `#4DC4E8`** — clarity, movement, life. Used for accents, highlights, interactive states, progress indicators. Represents the flowing, refreshing side of PWA.

Backgrounds are predominantly **white** (`#ffffff`) and **near-white** (`#f5f5f7`). Avoid heavy use of navy as a background outside of hero/footer contexts.

### Color Theory & Usage Ratios
The palette is an **analogous cool scheme**: navy `#132272` sits at a blue-violet hue (~232°) and sky `#4DC4E8` at cyan (~197°) — close enough to feel unified, far enough apart to read as two distinct voices (grounded vs. flowing). Work with it deliberately:
- **60 / 30 / 10:** ~60% white/near-white surfaces, ~30% navy (text, sidebar, hero, footer), ~10% sky (accents, focus, progress, highlights). Sky loses its energy when overused — it works because it is scarce.
- **Value contrast does the heavy lifting.** Navy-900 on white is ~15:1 — use it freely for text. Sky-400 on white is only ~2.1:1 — **never body text**; for sky-colored text use sky-600 (`#1e97be`) or darker. On navy backgrounds, use sky-100/200 (`#c4eef9`/`#9ae2f5`) for secondary text, not sky-400.
- **Warm counterpoint is semantic-only.** Amber (`#ffb340`) is the palette's single warm hue; it reads loudly against the cool field. Reserve it (and red) strictly for warnings/errors — never decoration — so state colors keep their meaning.
- **Interpolated navy mid-tones drift violet** (navy-400/500 ≈ `#6278d5`/`#4059c7`). Use them for tints, charts, and hover ramps, but keep brand moments anchored on navy-800/900 — the mid-tones alone read “periwinkle,” not PWA.
- **Adjacent-hue harmony in gradients:** brand gradients stay within one hue family (navy→darker navy, sky→sky-600). Never gradient navy→sky directly — the midpoint is a muddy blue that belongs to neither brand color; where both must meet, separate them with white space or a radial sky glow on navy (as in the deck template).

### Typography
- **Display / Headings:** Outfit — geometric, clean, confident. Weights 600–800. Tight letter-spacing (–0.02em to –0.04em). Large scale: hero text 48–72px.
- **Body / UI:** DM Sans — neutral, readable, functional. Weight 400–500 for body, 600 for labels. 15px base.
- **Code / Mono:** JetBrains Mono — used for system IDs, reference codes, technical labels.
- _Google Fonts substitution used throughout._

### Spacing
4px base grid. Generous white space is a core brand value — never crowded. Section padding: 96px. Component padding: 24px. Gutter: 24px.

### Backgrounds
- Primary: white (`#ffffff`)
- Section alternates: near-white (`#f5f5f7`)
- Hero / footer: deep navy (`#132272`) or dark gradient
- Cards: white with subtle border + shadow
- No heavy texture, no pattern, no grain. Clean planes only.

### Animation & Motion
- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out) for most UI. Spring (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for micro-interactions (buttons, toggles).
- **Duration:** 120ms (fast: hover color), 240ms (base: button/card hover), 400ms (slow: content entrance), 600ms+ (page-level).
- **Scroll entrance:** Fade + translateY(20px) → 0. Staggered 80ms between siblings.
- **Reduced motion:** All animations respect `prefers-reduced-motion: reduce`.

### Hover & Press States
- **Buttons:** `translateY(-1px) scale(1.01)` + shadow intensify on hover. `scale(0.97)` on press.
- **Cards:** `translateY(-2px)` + shadow intensify on hover (when clickable).
- **Links:** Opacity 0.7 on hover. No underline except in prose.

### Borders
- Standard: `1px solid var(--color-border)` — `#d2d2d7`
- Subtle: `1px solid var(--color-border-subtle)` — `#e8e8ed`
- Focus ring: `0 0 0 3px rgba(77, 196, 232, 0.2)` (sky blue glow)

### Shadows
Multi-layer, soft. Navy-tinted shadows on primary CTA elements. Sky-tinted on accent/interactive. Neutral on cards.

### Corner Radius
- Buttons: full pill (`9999px`)
- Cards: `24px`
- Inputs: `12px`
- Badges: full pill
- Images: `20px`
- Modal / Sheet: `24px`

### Cards
White background, `1px` border (`#d2d2d7`), `shadow-sm`. Hover: `shadow-md` + lift. Variants: default, elevated, glass, navy, flat.

### Imagery
- People-centered: ministry leaders, pastors, small teams working together
- Organized workspaces: clean desks, collaborative settings, Notion-style environments
- Warm and approachable tones — not cold or industrial
- Community and mission contexts
- **Avoid:** industrial equipment, water treatment plants, sensors, control panels, generic tech stock photos

### Glass / Blur
Used selectively for nav bars and floating elements. `backdrop-filter: blur(20px) saturate(180%)` with `rgba(255,255,255,0.72)` background. Never overused.

---

## ICONOGRAPHY

PWA uses a **line icon** style — 1.5–2px stroke weight, rounded linecaps, no fills.

- **CDN:** Lucide Icons (MIT license) — `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- **Style:** Stroke-based, 24×24 viewBox, consistent weight. Never mix stroke and filled icons.
- **Common icons:** `users`, `calendar`, `check-circle`, `file-text`, `settings`, `inbox`, `folder`, `mail`, `clock`, `layout`, `list`, `layers`, `clipboard`, `arrow-up-right`, `sparkles`, `heart`, `shield`, `refresh-cw`, `chevron-right`, `alert-circle`
- **Sizing:** 16px (inline/label), 20px (button), 24px (standard), 32px (feature card), 48px (hero/empty state)
- **Color:** Always inherits from `currentColor`. Never hardcoded.
- **Emoji:** Not used as icons in polished UI.
- **Logo:** `assets/logo.png` — use at minimum 120px wide.

---

## COMPONENTS

| Component | Path | Description |
|-----------|------|-------------|
| Button | `components/core/` | Primary CTA, secondary, ghost, danger. Pill shape. |
| Card | `components/core/` | Content container. Default, elevated, glass, navy variants. |
| Badge | `components/core/` | Status chip. Semantic color variants. |
| Tag | `components/core/` | Category/filter label. Removable. |
| Input | `components/forms/` | Text field with label, hint, error, icon. |
| Select | `components/forms/` | Styled native select with label, hint, error. |
| Checkbox | `components/forms/` | Checkbox with sky-gradient checked state. |
| Radio | `components/forms/` | Radio control; group by shared state. |
| Switch | `components/forms/` | Toggle control. |
| Stat | `components/data/` | KPI metric card with trend indicator. |
| Table | `components/data/` | Data table with card chrome and hover rows. |
| Tabs | `components/navigation/` | Segmented pill or underline tabs. |
| Modal | `components/feedback/` | Centered dialog on blurred navy overlay. |
| Toast | `components/feedback/` | Notification card — info/success/warning/error. |

---

## TEMPLATES

| Template | Path | Description |
|----------|------|-------------|
| Slide Deck | `templates/slide-deck/` | Branded 16:9 deck — title, section, content, stats, quote, closing |
| Memo / Report | `templates/memo/` | Print-ready letterhead memo with flowing body |
| Operations Dashboard | `templates/dashboard/` | Full app shell starting point |
| Marketing Website | `templates/website/` | Marketing site starting point |
