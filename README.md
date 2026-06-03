# ules-web

Marketing website for **Ules** — a food-rescue app for Astana & Almaty that lets
people pick up surplus restaurant food at the end of the day at up to 70% off.

## Repository layout

| Path | What it is |
|---|---|
| [`ules-website/`](ules-website/) | The Next.js 16 site (the actual app — start here). See its [README](ules-website/README.md) and [CLAUDE.md](ules-website/CLAUDE.md). |
| `design_handoff_ules_website/` | Original HTML/CSS prototype used as the pixel reference. |
| `photo/` | Source app screenshots (the optimized copies live in `ules-website/public/`). |
| `.github/workflows/deploy.yml` | CI that builds the static export and deploys to GitHub Pages. |

## Quick start

```bash
cd ules-website
npm install
npm run dev      # http://localhost:3000
```

## Deployment

Pushing to `main` triggers the GitHub Pages workflow, which runs `next build`
(static export to `ules-website/out`) and publishes it. The custom domain is set
via `CNAME`.
