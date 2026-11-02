# cb-motion

Cobrand **cb-motion** block. Purpose: applies the Cinematic motion register to the whole page (DESIGN.md § Motion): a slow hero image drift and title rise, text that rises in as it enters the view, and images that settle from a slight zoom.

## Authoring (Document Authoring)

Model: `standalone`

An empty block table named `CB Motion`, placed once per page in the same section as the hero, directly after the hero table. Placing it there loads its styles before the first section is shown, so the hero drift starts without a jump.

The block renders nothing. Motion is off for visitors who prefer reduced motion, and it never applies to the header, footer, logos, primary buttons or text over teaser images.

## Supported variations

No variations.

## Universal Editor fields

N/A (Document Authoring project)
