---
name: Ralph Lauren × PGA TOUR · Cinematic
description: Microsite design target for the Polo Golf and RLX Ralph Lauren pro shop wholesale programme. Ralph Lauren standard (brand/rl/DESIGN.md) with the PGA TOUR accent and a motion register.
extends: brand/rl/DESIGN.md
colors:
  cobrand-accent: "#d9000a"
  cobrand-accent-contrast: "#ffffff"
  cobrand-accent-soft: "#fbefee"
  cobrand-accent-on-image: "#ff9e97"
motion:
  hero-drift: "scale 1.12 → 1, 24s ease-out, once"
  hero-rise: "translateY 24px → 0 with fade, 1.4s cubic-bezier(.2,.7,.2,1); CTA delayed 0.5s"
  reveal: "translateY 28px → 0 with fade, 1.1s cubic-bezier(.2,.7,.2,1), 0.12s stagger (max 4)"
  settle: "image scale 1.08 → 1, 2.4s cubic-bezier(.2,.7,.2,1), once"
  reduced-motion: "all motion off"
---

# Design System: Ralph Lauren × PGA TOUR · Cinematic

<!-- Microsite design target. Everything not listed here is inherited unchanged from brand/rl/DESIGN.md and is locked by brand/rl/COBRAND-RULES.md. Partner values live in styles/cobrand.css. -->

## Overview

**Creative North Star: "The Quiet Flagship, in Motion"**

The Ralph Lauren flagship voice, slowed down to the pace of a round of golf. The page settles into place: the course drifts in behind the title, text rises gently as it enters the view, and photographs settle from a slight zoom. One immersive black statement interrupts the white pages, the way a film cuts to a title card. PGA TOUR is present but quiet: the lockup in the header, thin red bars under image titles and CTA rules, and a pale red ground for the contact section.

## Colors

All Ralph Lauren colours are inherited and locked. The partner adds one hue:

- **PGA TOUR Red** (`--cobrand-accent`, #d9000a): the red from the PGA TOUR shield. Used for CTA rules on `cobrand` teasers and in a `cobrand-accent` band (not used on the homepage). 5.31:1 on white.
- **Red on image** (`--cobrand-accent-on-image`, #ff9e97): the title bars on `cobrand` heroes and teasers. 3.53:1 against the darkened image.
- **Red tint** (`--cobrand-accent-soft`, #fbefee): the `cobrand` section ground behind navy text. Navy on it is 14.94:1.

PGA TOUR blue (#003970) is not used: it sits too close to RL Navy to read as an accent.

## Typography, Layout, Shapes, Elevation

Inherited unchanged from `brand/rl/DESIGN.md`.

## Motion

The motion register is new in this direction. It ships as the `cb-motion` layer and only runs when the visitor allows motion (`prefers-reduced-motion: no-preference`).

- **Hero drift:** the hero image eases from 112% to 100% over 24s, once. The title and CTA link rise in (the link 0.5s later).
- **Reveal:** headings, paragraphs and quotes below the hero rise 28px and fade in as they enter the viewport, staggered by 0.12s.
- **Settle:** column and teaser images ease from 108% to 100% inside their frames as they enter.
- **Never animated:** the header, footer and both logos; every primary button (including its paragraph); text over teaser images.

### Named Rules
**The Slow Round Rule.** Motion is slow and runs once. Nothing loops, bounces or follows the cursor.

## Components

All core components are inherited. New in this direction:

- **cb-statement:** a `black` section with one serif line at display size (60px desktop / 40px mobile, weight 400, 790px measure) and a plain attribution beneath. At most one per page. Only verbatim, attributed quotations or programme statements.
- **cb-motion:** the motion register above, applied site-wide as a lazy enhancement.

## Homepage composition

hero (`cobrand`) → programme intro (`center narrow`) → collections (columns: Polo Golf, RLX Ralph Lauren) → cb-statement (founder quotation) → merchandising (columns) → ordering teaser (`cobrand`) → contact (`center narrow cobrand`).

Reference prototype: `stardust/prototypes/pga-tour-home-C-proposed.html`.
