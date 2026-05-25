# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Warning: Non-standard Next.js version

This project uses **Next.js 16** (with React 19). APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Commands

```bash
npm run dev      # start dev server on localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

No test suite exists.

## Architecture

Two-page Next.js App Router site for the Ules food-rescue app (Astana / Almaty, Kazakhstan).

### Pages

| Route | Files |
|---|---|
| `/` | `app/page.tsx` → `app/HomeContent.tsx` |
| `/business` | `app/business/page.tsx` → `app/business/BusinessContent.tsx` |

`page.tsx` in each route is a thin Server Component that re-exports metadata and renders the `*Content` client component. All interactive content lives in the `*Content` files.

### i18n

All copy is in `lib/i18n.ts` — three full translation dictionaries (`en`, `ru`, `kz`) exported as `translations: Record<Locale, Translations>`. `Translations` is inferred from the English object, so TypeScript enforces completeness.

Language state lives in `context/LanguageContext.tsx` (`LanguageProvider` wraps the root layout). Persisted to `localStorage` under `'ules-lang'`. To access translations in any component: `const { t, locale, setLocale } = useLanguage()`.

### Styling

All design tokens are CSS custom properties defined at the top of `app/globals.css`. Use them directly — no Tailwind, no CSS modules. Key tokens: `--teal` (primary brand), `--orange` (business-side accent), `--text-1/2/3`, `--surface/surface-2/surface-3`.

Font: **DM Sans** loaded via `next/font/google` in `layout.tsx`.

Breakpoints: `max-width: 960px` (single-column, nav links hidden) and `max-width: 600px` (tightest layout). Mobile hamburger menu is not yet implemented.

### Design reference

`../design_handoff_ules_website/` (sibling directory) contains the original HTML/CSS prototype and a detailed `README.md` covering design tokens, phone mockup class system, responsive behavior, and known gaps. Use this as the pixel-reference when implementing or changing sections.
