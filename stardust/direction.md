# Direction: Ralph Lauren × PGA TOUR

**Brief.** Polo Golf and RLX Ralph Lauren wholesale launch for PGA TOUR and TPC course pro shops. Audience: merchandise buyers and pro shop teams. Partner brand source: https://www.pgatour.com/ (captured 2026-11-02, see `brand/cobrand/partner.json`).

**Phrase.** Cobranded microsite for PGA TOUR pro shop buyers — 3 variants. Brand-faithful to the Ralph Lauren standard (brand/rl/DESIGN.md); targeted palette move: add the partner accent #d9000a as an accent role only, per brand/rl/COBRAND-RULES.md. A = Flagship (faithful, partner quiet), B = Partner Spotlight (amplify full-bleed photography, programme-first IA, one accent band), C = Cinematic (A's structure with a motion register). Density balanced.

**Partner tokens** (`styles/cobrand.css`): accent `#d9000a` (PGA TOUR logo red, 5.31:1 on white), contrast `#ffffff` (5.31:1), soft `#fbefee` (navy 14.94:1), on-image `#ff9e97` (3.53:1 on #595959). PGA TOUR blue `#003970` was set aside: it sits too close to RL Navy to read as an accent.

## Examples (homepage)

| Example | File | Composition | Partner elements |
|---|---|---|---|
| A · Flagship | `prototypes/pga-tour-home-A-proposed.html` | hero → intro → collections columns → founder quote → ordering teaser → contact | Lockup, `cobrand` hero and teaser bars, one `cobrand` soft section |
| B · Partner Spotlight | `prototypes/pga-tour-home-B-proposed.html` | hero → accent programme band → two full-width collection teasers → showroom-to-shop columns → buyer resources list → contact | Lockup, `cobrand-accent` band (one), `cobrand` teasers, soft contact section |
| C · Cinematic | `prototypes/pga-tour-home-C-proposed.html` | A's order, with a black display statement in place of the quote block | Lockup, A's accent placements, motion register (hero drift, scroll reveals, image settle) |

All three use core blocks only (hero, columns, quote, teaser, news-list). C adds two prototype-only layers that would ship as `cb-statement` and `cb-motion`.

## Checks

`tools/cobrand-check/cobrand-check.js`, 2026-11-02: A, B and C `passed: true` with 0 findings at 1440px and 390px. C's motion is off under `prefers-reduced-motion: reduce`, and the logos and primary buttons never animate. Screenshots: `validation/pga-tour-home-{A,B,C}/`.

## Choice

**C · Cinematic**, chosen by the user on 2026-11-02 (no reason given). Its direction is now the microsite's root `PRODUCT.md`, `DESIGN.md` and `DESIGN.json`. A and B stay on disk for reference.

## Remaining pages (step 6)

Prototyped in the Cinematic direction on 2026-11-02. They share `prototypes/cinematic.css` and `prototypes/cinematic.js` (the future `cb-statement` and `cb-motion`), and the nav and footer link them together.

| Page | File | Composition | Check (1440 / 390) | Approval |
|---|---|---|---|---|
| Homepage | `prototypes/pga-tour-home-C-proposed.html` | as above | pass / pass, 0 findings | chosen |
| Collection (template, shown as Polo Golf) | `prototypes/pga-tour-polo-golf-proposed.html` | hero → intro → Polos / Layers / Outerwear columns → statement → resources list → RLX teaser → contact | pass / pass, 0 findings | approved 2026-11-02 |
| Buyer Resources | `prototypes/pga-tour-buyer-resources-proposed.html` | hero → intro → Line Sheets / Lookbooks & Imagery / For Store Teams lists → contact | pass / pass, 0 findings | approved 2026-11-02 |
| Merchandising guide | `prototypes/pga-tour-merchandising-proposed.html` | hero → intro → Floor / Fixtures & Folding / Window steps → statement → downloads → resources teaser → contact | pass / pass, 0 findings | approved 2026-11-02 |
| Ordering & Contact | `prototypes/pga-tour-ordering-contact-proposed.html` | hero → four-step ordering columns → statement → line sheets teaser → account team contacts | pass / pass, 0 findings | approved 2026-11-02 |

Open content questions: the account team names, emails and phone numbers (placeholders on Ordering & Contact); the real resource files; the product copy for the collection categories (written from the brief, to be confirmed by the Ralph Lauren product team).

RLX collection page added from the same template on 2026-11-02 (`prototypes/pga-tour-rlx-proposed.html`, pass / pass, 0 findings), at the user's request.

## Build (step 7), 2026-11-02

- Blocks: `blocks/cb-statement/`, `blocks/cb-motion/` (lint clean).
- Pages generated from the approved prototypes by `migration-work/pga-build/convert.mjs` (output in `migration-work/pga-build/out/`), copied to local `content/`: `index`, `collections/polo-golf`, `collections/rlx`, `buyer-resources`, `merchandising`, `ordering-contact`, `nav`, `footer`. Images in `content/assets/` with page-relative paths.
- Local preview: `tools/cobrand-check` pass at 1440 and 390 on all six pages, 0 findings; every block loaded, no broken images. Screenshots: `validation/built-*/`.
- Document Authoring: **not uploaded**. The upload was blocked because it needs an explicit request in the user's own message. Before uploading: upload `content/assets/*` to `/assets/` in DA, switch the local image paths to `https://content.da.live/adobedevxsc/rl-pga-cobrand-idea/assets/…`, then upload each page from `content/`.
