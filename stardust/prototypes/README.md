# Ralph Lauren × PGA TOUR homepage examples

Three example directions (see `../direction.md`). Each page is decorated by the real core blocks, scripts and styles of this repo.

```bash
node stardust/prototypes/serve.mjs
# http://localhost:3100/stardust/prototypes/pga-tour-home-A-proposed.html (and -B-, -C-)
```

`serve.mjs` serves the repo root and answers `/nav.plain.html` and `/footer.plain.html` with `fragments/`, which hold the example nav (Ralph Lauren | PGA TOUR lockup) and footer ("In partnership with" PGA TOUR).

## Placeholder assets (prototype only, never publish)

- `assets/rl-*`: Ralph Lauren starter imagery from the boilerplate.
- `assets/golf-*`: Unsplash photography used as stand-ins for approved Polo Golf / RLX / PGA TOUR campaign imagery. Replace them with licensed assets uploaded to Document Authoring before building (COBRAND-RULES § 2.3).
- `assets/pga-tour-logo.svg`: PGA TOUR shield taken from pgatour.com (source copy in `brand/cobrand/logos/`). Ask the partner for the approved file and a horizontal lockup.
