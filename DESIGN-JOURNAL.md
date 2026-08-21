# Easeinbiz design journal

Running log of every design round: what we looked at, how it felt, what we picked and why.
Rule: no decision gets built until it's written here.

---

## Process

1. Look at samples together (rendered live in chat)
2. Jot feelings — gut reactions, in Joshua's words
3. Pick or blend a winner
4. Codify into `design-system.html` + `assets/css/theme.css`
5. Apply to screens

## Decisions so far

| # | Round | Decision | Date |
|---|-------|----------|------|
| 0 | Kickoff | New branding first; brand is "open to evolution" (current blue #0077B5 + orange not sacred, but identity continuity matters). Dashboard is the first flow after foundations. | 2026-08-02 |
| 1 | Brand | **Bold Momentum locked.** Cobalt #2456E6 primary, orange #FF7A1A attention-only, ink #101540, bg #F5F6FB. Sora (display, never below 15px) + Inter (body). Joshua: "i love it" — full kit approved incl. orange-demotion rule and dark cobalt hero cards. Tokens live in theme.css; kit is page one of design-system.html. | 2026-08-02 |

---

## Round 1 — Brand direction

**Status:** in progress
**Samples shown:** Deep Trust · Modern Ledger · Warm Partner · Bold Momentum

### Feelings jotted

- Joshua responded to **Bold momentum (D)** — energetic, ambitious, startup energy. Vivid cobalt evolved from the old #0077B5; orange stays loud for action moments.
- A (Deep trust) / B (Modern ledger) / C (Warm partner) did not pull him.

### Winner

**Direction D — Bold momentum**

- Primary: cobalt `#2456E6`
- Accent/action: orange `#FF7A1A`
- Ink/deep: `#101540`
- Surface: `#F5F6FB`
- Support: periwinkle `#7A8BF0`
- Display font: **Sora** · Body font: Inter (to confirm in refinement)

### Round 1b — refinement

Full kit approved ("i love it"). Rules locked: orange = attention only; Sora never below 15px; dark cobalt hero cards allowed among white cards.

---

## Round 2 — Foundations (physics)

**Status:** in progress
**Samples shown:** Crisp (6px, dense, flat) · Soft (14px, generous, shadows-not-borders) · Floating (10px, medium, border+layered shadow)

### Feelings jotted

- Joshua chose **Soft** — "friendly, calm, consumer-app" — but with **10px corners** instead of 14px (a blend toward Floating's radius).
- Direction: generous padding, gentle shadows instead of borders, 10px radius.

### Winner

**Soft blend — locked.** Radius 10px (controls + cards, 14px modals, 999px reserved for pills/badges only) · generous padding (4/8/12/16/20/24/32 scale) · shadows instead of borders (--shadow-sm/md/lg) · soft filled inputs (#F9FAFD on #EDEFF6). Buttons are 10px, not pills — pills fight with status badges. Tokens in theme.css; section 5 of design-system.html.

---

## Round 3 — Buttons

**Status:** locked
**Samples shown:** full family (primary / secondary A shadowed-white / secondary B tinted-ghost / ghost / destructive / attention) × 5 states.

### Feelings jotted

- Joshua picked **Secondary B — tinted ghost** (cobalt 50 fill, cobalt 700 text) over shadowed white. He likes the cobalt presence even on secondary actions.

### Winner

Family locked in theme.css as `.btn` + `.btn-{primary,secondary,ghost,destructive,attention}`:
- Primary: cobalt 600 → 700 hover → pressed scale(.97)
- Secondary: tinted ghost — cobalt 50 → 100 hover
- Destructive: rests tinted red, turns solid red only on hover (delete shouldn't scream until reached for)
- Attention: solid orange, rationed to upgrade/alert moments
- Loading: inline spinner; Disabled: lightened, never gray

---

## Round 4 — Forms

**Status:** locked
**Samples shown:** Top labels · Floating labels · Left labels (each with error state)

### Feelings jotted

- Joshua picked **A — top labels**. Fastest to scan, safest on mobile; fits users filling invoices/payroll under time pressure.
- Note for later: left labels (C) worth revisiting for the dense settings page.

### Winner

Top labels, locked in theme.css: `.eb-label` (12px/500) above `.eb-input` (soft filled), `.eb-error` 11px red under field, error field = red border + #FEF7F7 tint, no icons, no shouting. `.eb-field` = 16px stack gap.

---

## Round 5 — Cards (metric/stat)

**Status:** locked
**Samples shown:** Minimal · Icon tile · Accent bar (each with dark cobalt hero card)

### Feelings jotted

- Joshua picked **A — minimal**. Numbers do the talking; calmest, ages best.
- Rejected: icon tiles (every icon a forever-decision), accent bars (read like status indicators next to real status pills).

### Winner

Minimal stat cards, locked as `.stat-card` family in theme.css: 11px muted label, Sora 21/700 ink value, 11px delta (green up / red down). **Hero rule: max one `.stat-card-hero` (solid cobalt) per screen** — it marks the single number that matters most.

---

## Round 6 — Tables

**Status:** locked
**Samples shown:** Airy lines · Dense zebra · Card rows

### Feelings jotted

- Joshua picked **A — airy lines**: hairline dividers, roomy 12px rows, hover tint. Matches the soft calm physics.
- Kept: dense zebra as opt-in `.eb-table-compact` mode for power users. Card rows (C) reserved for lead/kanban-style lists, never standard tables.

### Winner

`.eb-table` inside `.eb-table-card` (white, 10px radius, shadow-md, no border). Rows 12px padding, #EDEFF6 hairlines, #F6F7FC hover, right-aligned money, status pills in-row.

---

## Round 7 — Sidebar

**Status:** locked
**Samples shown:** Clean white · Deep ink (#101540) · Tinted whisper (#EEF1FA)

### Feelings jotted

- Joshua picked **A — clean white**: light, airy, disappears behind content. Deep ink rejected (premium but demands dark-variant discipline forever); tinted whisper rejected.

### Winner

White sidebar, hairline right border, cobalt-50 (#EEF2FE) active pill with cobalt-700 text, muted inactive items. Already encoded in theme.css (`--sidebar-*` tokens + `.nav-link`). Logo wordmark in Sora 800 ink.

---

## Round 8 — Overlays

**Status:** locked
**Samples shown:** Centered confirm modal · Right detail drawer · Split rule

### Feelings jotted

- Joshua chose **modals for everything** — full focus, one thing at a time.
- Claude pushed back once (drawers preserve list context for heavy invoice review; Stripe/Linear/Notion pattern). Joshua confirmed modals anyway — his call, respected. Revisit only if user testing shows list-position frustration.

### Winner

Modals for all overlays, locked as `.eb-overlay` + `.eb-modal` in theme.css. Three sizes: sm 400px (confirmations), md 560px (create/edit forms), lg 760px (detail views — invoice, client, lead). 14px radius, shadow-lg, ink-tinted scrim (45%), max-height 85vh with internal scroll.

---

## Round 9 — Empty states + toasts

**Status:** locked
**Samples shown:** Empty: quiet minimal vs guided checklist · Toast: ink dark vs soft white

### Feelings jotted

- Joshua picked **quiet minimal empty states** (cobalt icon tile, Sora title, one CTA) and **soft white toasts** (white card, tinted icon circle, shadow-lg). All-white feedback language — even the ink toast was too heavy for him. Consistent with every soft/minimal pick so far.

### Winner

`.empty-state` + `.eb-toast` in theme.css. Empty: 44px cobalt-50 icon tile, Sora 14/600 title, 12px muted sub, one primary CTA. Toast: bottom-right, white, tinted icon circle (green success / red error), auto-dismiss.

---

## Round 10 — Topbar

**Status:** locked
**Samples shown:** Quiet utility (breadcrumb) · Command bar (⌘K hero) · Action forward (title + primary CTA)

### Feelings jotted

- Joshua picked **C — action forward**. Primary action always top-right builds muscle memory across all ~60 screens; Sora page title gets a consistent home. Command bar rejected — audience hunts visually, doesn't type commands.

### Winner

`.topbar` in theme.css: white, hairline bottom border, Sora 16/700 page title left, spacer, search + bell icons, one `.btn-primary` (the screen's main action), avatar. **Rule: exactly one primary button in the topbar; it is the screen's verb** (New invoice / Run payroll / Add lead).

---

**App shell complete** (sidebar Round 7 + topbar Round 10). Applied to code 2026-08-03:
- `shell.js`: topbar rebuilt action-forward (pages pass `data-action` + `data-action-href`); sidebar upgrade card → flat cobalt-50 with orange `.btn-attention` (an attention moment, per Round 1 rule)
- `components.js`: `ebKpi` → minimal `.stat-card` (supports `hero:true`, max one per screen); `ebEmpty` → Round 9 quiet minimal with optional CTA; `ebPageHeader` buttons → locked `.btn` classes

Next: Dashboard flow redesign.

---

## Round 11 — Color reversion to logo colors ("Pure Ocean")

**Context:** Joshua surfaced the official logo kit (New-logo folder): wave mark + wordmark in #0077B5 / #FAA41A. Rebranding all existing materials to cobalt was judged too costly. Options shown: recolor logo to cobalt · heritage compromise · revert system to logo colors. Joshua chose revert, then picked from three logo-color palettes: Pure Ocean · Ocean + Energy (cobalt/#FF7A1A kept as chart accents) · Ocean + Sky.

**Winner: Pure Ocean.** Cobalt #2456E6 and #FF7A1A fully retired.

- Primary: **Ocean 600 #0077B5** (the logo blue) · hover 700 #005793 (also in the logo) · scale 50 #E8F4FA / 100 #C7E5F4 / 200 #93CCE9 / 400 #2E9AD2
- Ink: **#0B2C3D** (ocean-tinted deep navy, replaces #101540)
- Attention orange: **#FFA500** · tints #FFF6E5 / #FFE3B3 · 700 #B87700 · **dark text on orange (#3D2B00) — white fails contrast**
- Neutrals re-tinted ocean: bg #F4F7F9 · field #E9EFF3 · border #DFE7EC · muted #64757F · text #1A2830
- Charts: ocean / orange / green / sky #4FB3E8 / amber
- **Everything else unchanged:** Sora + Inter, soft physics, all component rounds (3–10), all golden rules
- Real logo integrated: wave icon now in app sidebar (assets/img/logo-icon.png), full logo in brand guide + deck
- Applied across: theme.css, design-system.html, shell.js, Easeinbiz-Brand-Guide.pdf, Easeinbiz-Brand-Presentation.pptx

---

## Round 12 — Old pages migrated to the system

All ~60 mockup pages updated in one mechanical pass (2026-08-03):

- Manrope → Sora everywhere (font links + Tailwind config)
- Old semantics → new: #0D6E3A→#0FA36B, #8C1D18→#E23D3D, old muted/text grays → #64757F/#1A2830, old amber/green/red tints → system tints
- Card hard borders (rgba(14,15,12,.09)) removed — cards float on shadows per Round 2
- **Ruling: purple is not part of our colors** (Joshua). #5A3E9B/#EEF0FC (used as category colors on companies, lab, launchpad, leads) mapped to deep sky #1A6E9E / sky tint #E5F4FC pending an official categorical color set

### Spotted during migration — not yet decided (need rounds)

1. Categorical colors (company/project/label dots) — temp-mapped to sky; needs an official set from the palette
2. Charts and analytics visual style (gridlines, legends, bar/line shapes)
3. Kanban board visuals (leads, tasks)
4. Calendar grid (content planner)
5. Auth pages (login/signup/reset — outside the shell, untouched by rounds)
6. Automation builder canvas/nodes
7. Icon set — lucide is de facto, never formally locked
8. Small components: tabs, dropdowns/selects, date pickers, pagination, tooltips, loading skeletons
9. Mobile navigation drawer
10. Dark mode — no decision

---

## Round 12b — easeinbiz-design-system repo migrated

The Next.js token/docs repo (also the AI skill kit: SKILL.md + ui_kits + preview cards) updated to the locked system (2026-08-03):

- Manrope self-hosted fonts → **Sora** (TTFs added to fonts/ + public/fonts; all @font-face and config references)
- "Plus Jakarta Sans" stale references → Sora
- Blue ramp aligned to locked scale (hover #005793, 700 #004A7C, 900 → ink #0B2C3D); orange tints → locked values; old grays #24313A/#6B7A84 → #1A2830/#64757F; bg #F8FAFB → #F4F7F9
- Status colors → locked (#0FA36B / #E6A50F / #E23D3D); charts: purple + pink → sky + amber (purple ruling)
- Borders: rgba(14,15,12,x) → solid hairlines; cards borderless on ink-tinted shadows; README border/card/radius/shadow guidance rewritten to locked physics
- --radius base 8px → 10px (both token files)
- KpiCard.jsx rebuilt minimal (no icon tiles, hero variant, purple tone removed); Screens.jsx usages updated

### Additional undecided items found in this repo

11. Dark mode token set exists (shadcn defaults) — never designed by us
12. JetBrains Mono for code/numerics — never decided
13. `--info` color token — we never defined an info semantic
14. Motion tokens + README animation rules (Framer Motion entry/stagger specs) — motion round still pending; existing rules unratified
15. Marketing design language (ui_kits/marketing: two-color hero highlights, orange-on-blue CTA) — never went through the ritual
16. Extended ramps (blue 300/800, neutral 50–900) — kept, not formally locked
17. Logo variant usage rules (orange/black/white/"2nd choice" alt set) — when each is allowed

---

## Round 13 — Motion

**Status:** locked
**Samples shown:** Instant utility (no movement) · Soft glide (200–250ms ease-out) · Springy (300ms overshoot)

### Feelings jotted

- Joshua picked **C — springy**: playful, energetic, things bounce into place. Consistent with choosing "Bold Momentum" in Round 1 — he wants the product to feel alive, not clinical.

### Winner

Springy, locked as motion tokens in both repos:

- `--ease-spring: cubic-bezier(.34,1.56,.64,1)` — the default, overshoots into place
- `--ease-out: cubic-bezier(.2,.7,.2,1)` — exits and dense data
- `--dur-fast 180ms` (color/opacity) · `--dur-base 300ms` (springy default) · `--dur-slow 420ms` (modals, page entrances)
- Buttons: hover lift 2px, press scale(.94) · Cards: `.eb-card-interactive` lifts 4px into deeper shadow
- Entrances: `.eb-enter` fade-up from translateY(14px) scale(.96); `.eb-enter-stagger` at 60ms per item (set `--i`)
- Modals and toasts animate in on spring

**Restraint rule (Claude's addition, adopted):** spring applies to things the user summons — buttons, cards, modals, toasts, entrances. Dense data (table rows, filter chips, inline validation) uses `--ease-out` at `--dur-fast` so scanning hundreds of invoices never feels wobbly. `prefers-reduced-motion` is respected globally in theme.css.

---

## Round 15 — Audit AI dashboard console (new surface)

**Context:** Easeinbiz repositions from "all-in-one business app" to "the app that tells you what's wrong and fixes it." The audit PRD (`Easeinbiz-web/prd/business-audit-feature/01–06`) specified only a wizard + static report — no dashboard presence, no conversation, no analytics integration. Joshua described the intended behaviour; it was confirmed absent from the PRD.

**Decisions (Joshua):**

- Console lives at the **top of the dashboard home**, above analytics
- Engaging it **expands to fill the content area** (sidebar and topbar stay — navigation is never lost); analytics fade down and out
- Analytics tabs below with **integration chips**; sources shared between console and analytics
- Audit AI can compare sources, combine them, or compute entirely new metrics

**Design rules set in this round:**

- Focus alone never expands — only typing, Ask, or a suggestion chip (tabbing must not detonate the layout)
- Console leads the transition, analytics follow 60ms later (`--dur-slow` spring out, `--ease-out` for the analytics fade)
- Every number in an answer names its source; combined series always carry a "Computed by Audit AI" pill, a method note, and "Show the math"
- Thread survives collapse; `Esc` always exits
- Never a blank loading state — a per-source step rail streams instead

**Deliverables:** `prd/business-audit-feature/07-audit-dashboard-spec.md` (full spec incl. states, motion, components, API additions, acceptance criteria) and `audit-dashboard.html` (working mockup: expansion animation, source chips, compare/combine chart, streaming answer with findings + opportunities).

### Three judgment calls — ratified by Joshua

1. **Expansion trigger:** typing / Ask / suggestion chip. **Focus alone never expands** — tabbing through the page must not detonate the layout.
2. **Derived data:** always labeled + verifiable — "Computed by Audit AI" pill, one-line method note, and an expandable "Show the math" listing each source's contribution. One wrong unverifiable number would discredit the whole feature.
3. **Timing:** the console leads, analytics follow **60ms later** (encoded as a CSS transition-delay on `.analytics`). The expansion reads as caused by the user's action rather than a layout swap.

### Applied

`dashboard-overview.html` **replaced** with the new design: console on top, analytics below (tabs → source chips → minimal stat cards with one hero → cross-source chart → campaign table). `audit-dashboard.html` kept as the standalone reference. Topbar now carries "Run audit" as its single primary action (Round 10 rule).

### Still undecided here

18. Formal chart round (bar/line style, gridlines, tooltips) — interim rules only, set in spec §5.4
19. Console credit cost per question — placeholder "2 credits" in the mockup
20. Whether the console appears on module pages (finance, payroll) or dashboard only

---

## Round 16 — Home page audit funnel (acquisition surface)

**Context:** the audit is now the acquisition mechanic, not just an in-app feature. The PRD had listed anonymous public audits as **out of scope** (`01` §14, two sentences) and the source `Audit-Easeinbiz.md` with the §9 funnel detail is not in the repo — so the flow was specified from scratch with Joshua rather than guessed.

**Decisions (Joshua):**

| Question | Choice |
|---|---|
| How much is free | **Teaser then gate** — real score, profile, and 2–3 findings run live; full findings, competitors, opportunities behind a free account |
| Hero behaviour | **Expand in place** — frame grows, stages stream inside, marketing copy fades (same grammar as the dashboard console) |
| Accepted input | **URL or social handle** — SMBs on Instagram/TikTok with no website are real customers |
| After signup | **Audit follows them in** — migrated to the new org, lands on the completed report, not onboarding |

**Design rules set this round:**

- **Never fake the teaser.** It must be a real audit of the submitted input; a canned demo is detectable in one try and destroys the feature's premise.
- **Lead with a positive finding.** Opening with only criticism reads as an attack on someone's livelihood; earning the right to criticise raises the odds they act on the rest.
- **Count what's behind the gate** ("11 more findings · 6 opportunities") — specificity converts, "See more" doesn't.
- **Gate server-side.** Gated content must be absent from the public API response, not merely blurred in the DOM.
- **Something new every 8 seconds** during the run; stream partial evidence per stage.
- Score count-up is the single permitted flourish.
- Public runs are capped (~8 credits: stage 1 + trimmed reviews); competitors and opportunities run after signup. Rate limits, duplicate suppression, and a daily spend ceiling that degrades to email capture rather than erroring.

**Deliverables:** `prd/business-audit-feature/08-public-funnel-spec.md` and `home.html` (working mockup: hero input → expand-in-place → streaming stages with evidence → profile confirmation → teaser score with count-up → blurred remainder + signup gate).

### Open questions carried into the spec

21. Category benchmark line ("most businesses in your category score 71") — real data or drop it
22. Shareable public report link — free distribution vs leaking gated value
23. Whether a second free audit of a *different* business is allowed within the 3/24h cap (agency prospecting use case)
24. Email-capture as a softer alternative at the gate, or single CTA only

---

## Round 17 — Dark mode + full production app migration

### 17a — Dark mode: "Deep ink" (locked)

**Samples shown:** Deep ink (ocean-tinted navy) · True charcoal (neutral greys) · Soft slate (lighter, gentle contrast)

**Feelings jotted:** Joshua picked **A — deep ink**: the only direction where the brand is still present after dark, and a descendant of the already-approved ink #0B2C3D.

**Two problems light mode never had, solved here:**

1. **Shadows don't read on dark.** Our whole light system floats cards on ink-tinted shadows. In dark mode depth comes from *surface lightness* instead: page #071B26 → card #0E2733 → popover #12303F. Shadows stay but are near-invisible by design.
2. **Ocean #0077B5 is unreadable on a dark page** — it turns muddy. Primary brightens to **#0A93DC** and takes *dark* text, the same inversion the orange already needs in light mode. Orange lifts to #FFC978.

### 17b — Production app migrated (`Easeinbiz-web`)

Scope chosen by Joshua: **tokens + primitives + full sweep**. Constraints honoured: no page added, none deleted, no button or feature removed (verified: 36/36 page exports, 567 `<Button>`, 67 `<Route>` intact, tsc clean).

**Tokens (`src/index.css`)** — Manrope → **Sora** (self-hosted, 4 weights in `public/fonts`); neutrals re-tinted ocean (bg #F4F7F9, text #1A2830, muted #64757F, border #DFE7EC); radius 8px → **10px** (all existing `rounded-lg/md` inherit automatically via the `borderRadius` map); ink-tinted shadow scale; springy motion tokens; charts lose purple/pink for sky/amber; full deep-ink dark block.

**Token bug found and fixed:** the app used `--accent` for brand orange, but shadcn uses `--accent` for *hover/focus surfaces* — so every dropdown item, ghost button, and notification row was hovering **orange**. Split into `--accent` (neutral hover surface) and **`--attention`** (brand orange). The four intentional orange usages on LandingPage and ReferEarnPage were moved to `bg-attention`/`text-attention`.

**Primitives** — button (10px, hover lift 2px, press scale .94, destructive rests tinted and only turns solid on hover, new `attention` variant, `--primary-hover` on default); card (borderless on `--shadow-md`, Sora card titles); input (soft filled #F9FCFE, 3px ocean focus ring); badge (tone-on-tone pills + `success`/`warning`/`attention` variants); dialog 14px + shadow-lg; dropdown/popover/select/sheet/tooltip 10px; table 13px.

**Sweep** — 234 hex replacements across 22 files, 1,173 utility-class replacements across ~90 files. Purple/indigo/violet/pink → ocean family per Joshua's ruling; greens → `success`; reds → `destructive`; ambers → `warning`; blues → `primary`; greys → system neutrals. **Third-party brand colors deliberately preserved** (Twitter #1DA1F2, Facebook #1877F2, LinkedIn #0A66C2, Instagram #E1306C, Google #4285F4/#EA4335/#34A853/#FBBC05) — those are platform identity, not ours.

### Still open

25. `tailwind.config.ts` also feeds a legacy `Plus Jakarta Sans` elsewhere? (checked: none remaining)
26. Dark mode has never been reviewed on real screens — needs a pass once someone runs the app with the toggle on
27. Chart components (`ui/chart.tsx`, recharts usages) still need the formal chart round (open item 18)
