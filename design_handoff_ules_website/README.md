# Handoff: Ules Marketing Website

This is a developer handoff for the **Ules** marketing website — a public-facing site that introduces the Ules food-rescue app to consumers, restaurant partners, and general visitors.

## Overview

A single-scroll landing page (`index.html`) with a dedicated sub-page for restaurant partners (`business.html`). Designed to be informational and warm — there's no hard conversion CTA. Visitors should leave understanding what Ules is, who it's for, and how the app works.

## About the Design Files

**The HTML in this bundle is a working prototype, not necessarily production-ready code.** It's intentionally simple — vanilla HTML, one CSS file, ~30 lines of vanilla JavaScript for the language switcher and smooth-scroll. There are no build tools, no frameworks, no asset pipeline.

You have two reasonable paths to implement this:

1. **Ship the HTML as-is** (or with light cleanup). It's plain, accessible, has no JS framework dependency, and should perform well. Drop it behind your domain and you're done. Suitable if this is a one-off marketing site that won't change often.
2. **Port to your stack** (Next.js, Astro, Nuxt, Eleventy, whatever fits). The design is component-friendly — sections, cards, phone mockups, etc. all decompose naturally. Use the HTML as a pixel-reference and rebuild idiomatically.

If you're going to add a CMS, blog, or i18n routing, option 2 makes more sense. Otherwise option 1 is faster.

## Fidelity

**High-fidelity.** All colours, typography, spacing, copy, and layout are final. The phone mockups inside the page are intentionally **abstracted placeholders** (grey blocks, simple shapes) — they're a visual stand-in for real screenshots of the app. Replace with real app screenshots before launch.

## Pages

| Path | Purpose |
|---|---|
| `index.html` | Main landing page — single long scroll with all sections |
| `business.html` | Restaurant partner sub-page — linked from `/index.html`'s "For business" section |

### `index.html` — sections in order

1. **Sticky nav** — logo, in-page links, EN/RU/KZ language switcher
2. **Hero** — headline, lede, three meta stats, abstracted phone with floating bubbles
3. **Mission** — two-column warm intro to why Ules exists
4. **Audiences** — two cards (For people · For restaurants) side-by-side; the business card links to `business.html`
5. **Features** — three alternating rows, each with copy + abstracted phone mockup (Home & map, Food detail, Settings/impact)
6. **App tour gallery** — 6 abstracted mini phones in a row (Onboarding, Login, Home, Restaurant, Cart, Order paid)
7. **For business** — a light pitch with abstracted dashboard mockup + CTA to `business.html`
8. **Team** — 4 cards with avatars (initials), names, roles, short bios
9. **Footer** — brand + 4 link columns (Product, Partners, Contact, Legal) + bottom row

### `business.html` — sections in order

1. **Sticky nav** — same as above but the brand reads "ules / business"
2. **Hero** — orange-accented variant pitching to restaurants, abstracted partner-dashboard phone mockup
3. **How it works** — 4 numbered cards (Sign up, List bags, Customers pay, Collect)
4. **Dashboard showcase** — two alternating rows demonstrating the partner app
5. **Pricing / Fees** — 3-cell card (0₸ setup · 15% per bag · Weekly payouts)
6. **FAQ** — 6-question `<details>` accordion
7. **Contact strip** — dark card with `partners@ules.kz` CTA
8. **Footer** — same structure as index

## Design Tokens

All tokens are CSS custom properties on `:root` in `styles.css`.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--teal` | `#4BBDE8` | Primary brand. Buttons, links, accents |
| `--teal-light` | `#EBF7FD` | Brand tint surface |
| `--teal-soft` | `#E6F8FA` | Hero card backgrounds, biz section gradient end |
| `--teal-dark` | `#2A9DC8` | Brand-darker text on tint surfaces |
| `--orange` | `#F4622E` | Business-side accent (orange CTAs, "Out of stock" badges) |
| `--green` | `#22C55E` | Impact / success accent |
| `--green-light` | `#F0FDF4` | Impact-card tint background |
| `--yellow` | `#F59E0B` | Star ratings |
| `--red` | `#EF4444` | Errors / destructive |
| `--surface` | `#FFFFFF` | Card surfaces, page background |
| `--surface-2` | `#F8F8F7` | Warm off-white section backgrounds |
| `--surface-3` | `#F0F0EE` | Track backgrounds (progress bars, dividers) |
| `--border` | `rgba(0,0,0,0.07)` | Hairline dividers |
| `--text-1` | `#111111` | Primary text |
| `--text-2` | `#555555` | Secondary text |
| `--text-3` | `#999999` | Tertiary text |

### Typography

**Font family: DM Sans** (Google Fonts) — weights 300, 400, 500, 600, 700, 800. Loaded via `<link rel="stylesheet">` in both HTML files.

| Role | Size | Weight |
|---|---|---|
| Hero h1 | clamp(44px, 6vw, 72px) | 800 |
| Section h2 | clamp(32px, 4vw, 48px) | 800 |
| Feature h3 | 36px | 800 |
| Card title | 18–28px | 800 |
| Body / lede | 16–18px | 400 |
| Caption / meta | 12–14px | 400–600 |
| Eyebrow | 12px | 700, uppercase, 1.5px letter-spacing |

### Spacing & layout

- Page max-width: **1180px** (`.section-wrap`)
- Narrow content max-width: **880px** (`.section-wrap-narrow`)
- Section vertical padding: **96px** desktop, **72px** mobile
- Standard horizontal page padding: **32px**
- Border radii: 10 / 12 / 14 / 16 / 18 / 22 / 28 / 38 (for phone mockups)
- Standard shadow: `0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)`

### Brand logo

The Ules "Ü" mark is an inline SVG used throughout. Reference SVG (also in `ules-logo-reference.txt` if you have it from the app handoff):

```svg
<svg width="32" height="32" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="22" fill="#4BBDE8" />
  <circle cx="37" cy="22" r="7" fill="white" />
  <circle cx="63" cy="22" r="7" fill="white" />
  <path d="M25 36 L25 63 Q25 80 50 80 Q75 80 75 63 L75 36"
        stroke="white" stroke-width="14"
        stroke-linecap="round" stroke-linejoin="round" fill="none" />
</svg>
```

Replace with a proper vector asset (SVG file) in your production build.

## Phone Mockups

Every "phone" in the design is an abstracted CSS-only mockup — a div with `aspect-ratio: 390 / 844` (real iPhone proportions), a notch, a screen area, and a tab bar. The contents inside are decorative shapes (`.ps-line`, `.ps-card`, `.ps-chip`, etc.) standing in for real UI.

**Two paths for production:**

1. **Replace with real screenshots.** Export each app screen as a PNG, drop it inside the phone bezel. Cleanest, most accurate. Requires asset prep.
2. **Keep the abstracted mockups.** Faster to ship, looks design-y, but every change to the app requires updating the mockups.

I recommend path 1 once you have launchable app screens. For now (the design is shipped without real screenshots), path 2 is fine.

The phone class system:
- `.phone` — base, 260px wide, 390/844 aspect ratio
- `.phone-tilt` — adds `rotate(-4deg)` (used in hero)
- `.phone-static` — 280px wide (used in feature rows)
- `.phone-mini` — 184px wide (used in gallery strip)
- `.phone-biz` — same as base, with adjusted padding for business app content

## Interactions / Behavior

### Language switcher

The EN/RU/KZ pills in the top-right currently only swap the visual `active` state — they don't actually swap content. Wire up to your i18n solution:

- Each button has `data-lang="EN|RU|KZ"`
- Active state is the `.active` class
- The script at the bottom of each HTML toggles this on click

Suggested implementation: route-based (`/en/`, `/ru/`, `/kz/`) or query-string (`?lang=ru`), and serve translated copy from your i18n layer.

### Smooth scroll

Vanilla JS at the bottom of each HTML intercepts `a[href^="#"]` clicks and scrolls with `behavior: 'smooth'`, with a 70px offset for the sticky nav. Replace with whatever your framework offers.

### FAQ (business.html)

Native HTML `<details>` / `<summary>`. The first item is `open` by default. Custom styling: `+` icon when closed, `−` (with teal background) when open. Behaves correctly with no JS.

### Sticky nav

`position: sticky; top: 0` with a frosted-glass effect (`backdrop-filter: blur`). Make sure your hosting serves the right `Content-Security-Policy` header if any (none currently required).

## Responsive Behavior

Three breakpoints in `styles.css`:

- **Default:** ≥960px — full multi-column grids, nav links visible
- **`max-width: 960px`** — single-column hero & sections, nav links hidden (you'll want to add a mobile menu — see "Known gaps")
- **`max-width: 600px`** — team grid collapses to 1 column, gallery to 2 columns, footer to 1 column

The design is mobile-friendly but **the mobile nav menu is not implemented** — when nav links are hidden below 960px, there's no replacement (hamburger menu, drawer, etc.). Add this before shipping. The language switcher remains visible on all sizes.

## Known Gaps / Things to Add

| Gap | Suggested fix |
|---|---|
| Mobile menu / hamburger | Add a button that toggles a slide-down or drawer with the nav links |
| Real app screenshots | Replace abstracted CSS mockups with real PNG/SVG renders |
| Real translations (RU, KZ) | Wire EN/RU/KZ switcher to your i18n layer |
| `Terms of Service`, `Privacy Policy`, `Payment & Refund` | Footer placeholders link to `#` — replace when documents exist |
| Real team photos | Replace gradient + initial avatars with real photos |
| Open Graph / meta tags | Currently only basic `<title>` and viewport. Add OG image, description, Twitter card |
| `favicon.ico` / app icons | Not included |
| Analytics | Not included |
| Form (newsletter / contact) | Not in design — was excluded by user. Add if needed |

## Files in This Bundle

| File | Purpose |
|---|---|
| `README.md` | This file |
| `index.html` | Main landing page |
| `business.html` | Restaurant partner sub-page |
| `styles.css` | All site styles |

## Suggested Implementation Order

1. **Set up the project** — pick a stack (or just `index.html` + nginx), copy `styles.css`, install DM Sans (Google Fonts or self-host)
2. **Build the shared components** — nav, footer, phone mockup, eyebrow heading, audience card, feature row, faq item
3. **Build `index.html`** — section by section, top to bottom
4. **Build `business.html`** — reuses 80% of the same components
5. **Add mobile menu** — required before public launch
6. **Wire up i18n** — KZ and RU translations, language switcher
7. **Swap mockups for real screenshots** — once the app has screens worth showing
8. **Polish** — meta tags, OG image, favicon, analytics, performance audit
