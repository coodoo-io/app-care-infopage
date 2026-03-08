# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server at http://localhost:4321
npm run build     # Production build (run by CI — don't run manually before releases)
npm run preview   # Preview production build locally
```

## Releasing & Deploying

Use the `/release` skill — it handles versioning, tagging, and pushing in the correct order.

**Never run `npm run build` before a release** — CI handles the build.

Two deployment workflows exist:
- **Production** (`deploy-cloudflare.yml`): triggered by a `v*` tag push → deploys to `app-care.pages.dev` with `branch: main`
- **Preview** (`deploy-cloudflare-preview.yml`): triggered by a push to `main` where the commit message does NOT start with `Release v` → deploys to `preview-main.app-care.pages.dev`

So commit messages that start with exactly `Release v` skip the preview workflow and only trigger production via the tag.

## Architecture

Static marketing site built with **Astro 5** + **Tailwind CSS 3**. No framework components (no React/Vue) — everything is `.astro` files. No CMS, no database. German-language site for App-Care (by coodoo GmbH, Mainz).

### Page structure

- `src/layouts/BaseLayout.astro` — wraps every page, includes SEO meta, favicon, Header, Footer, Google Fonts
- `src/pages/` — one file per route (file-based routing)
- `src/components/sections/` — full-width page sections imported into pages
- `src/components/layout/` — Header, Footer
- `src/components/ui/` — small reusable UI primitives (Button, Card, Badge)

### Homepage composition (`src/pages/index.astro`)

Sections render in this order: Hero → Problems → AppCareComparison → Solution → PackagesOverview → ReferencesTeaser → TeamTeaser → WhitepaperTeaser → FinalCTA

### Design system

All design tokens live in `tailwind.config.mjs`. Key custom tokens:

- `brand-*` — Blue scale (primary colour), `brand-600` (#2563eb) for CTAs, `brand-950` (#172554) for dark sections
- No accent colour — single colour system, use brand-* at different intensities
- Neutral greys use Tailwind's `slate-*` scale (cool blue undertone)
- `font-display` — JetBrains Mono (headlines, buttons, labels)
- `font-sans` — Inter (body)

Reusable CSS component classes in `src/styles/global.css`:
- Layout: `.section-container`, `.section-padding`
- Typography: `.section-title`, `.section-subtitle`
- UI: `.card`, `.card-highlight`, `.badge`, `.badge-brand`, `.badge-accent`, `.badge-gray`
- Buttons: `.btn-primary` (mono, uppercase, tracking-wide), `.btn-secondary`, `.btn-ghost`
- Backgrounds: `.gradient-hero` (resolves to `bg-brand-950`), `.gradient-section` (resolves to `bg-slate-50`)

### Assets

- `public/assets/team/` — team photos as `.avif` files (Arend, Eike, Erik, Flo, Jan, Klemens, Marcel, Markus, Nico, Richard, Thanh)
- `public/assets/mgmt-summary/` — real Management Summary screenshots (meteosol reference)
- `public/favicon.svg` — SVG favicon
- `docs/ci.md` — brand/CI reference document

### Key conventions

- `import.meta.env.BASE_URL.replace(/\/?$/, '')` — always use this pattern for asset/link hrefs to handle base URL correctly
- No emojis in UI (except where explicitly kept in TeamTeaser skills tags) — use SVG icons instead
- Dark sections use `bg-brand-950` not `bg-gray-950`
- Tool names are generic ("Task-Board") — no specific vendor names like ClickUp
