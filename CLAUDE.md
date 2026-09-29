# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for **ERVIA**, an AI-automation agency. React 18 + Vite SPA, all copy in Spanish, no backend — the contact form is client-side only (no API call; it just shows a fake "sent" confirmation state).

## Commands

```
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

There is no lint or test setup in this repo.

Docker: `Dockerfile` does a multi-stage build (`npm ci && npm run build` → nginx serving `dist/`), configured by `nginx.conf`.

## Architecture

**One page, one component tree.** [src/App.jsx](src/App.jsx) renders the entire site as a fixed, linear stack of section components (Navbar → Hero → Problema → Servicios → Casos → Proceso → Pricing → FAQ → ContactForm → Footer → CookieBanner), each in its own file under [src/components/](src/components/). There is no router for the main page — internal navigation is anchor links (`#section-id`) inside a single scrolling document.

**Styling is a hybrid of global utility classes + inline styles.** [src/index.css](src/index.css) defines the entire design system as CSS custom properties on `:root` (color scale, spacing, radii, shadows, typography) plus a small set of reusable utility classes (`.section`, `.card`, `.btn btn-primary/secondary/outline`, `.form-input`, etc.). Components then use those classes for structure/interactive states and inline `style={{ ... }}` (referencing the same `var(--token)` values) for one-off layout. When adding UI, reuse existing CSS variables/classes rather than inventing new colors or spacing values — the tokens are dark-first (navy canvas, green primary, blue secondary).

**Static legal pages are served outside the React app**, at `/politica-de-privacidad` and `/politica-de-cookies`. These are plain HTML files, not React routes, because they need to work in the Vite dev server and in production nginx identically:
- `public/politica-de-privacidad/index.html` and `public/politica-de-cookies/index.html` are the actual served files (copied verbatim into `dist/` by Vite since anything in `public/` is copied as-is).
- `vite.config.js` has a custom `serve-policy-pages` middleware plugin that intercepts `/politica-de-privacidad` and `/politica-de-cookies` (no trailing slash) in dev and serves those same files with the right `Content-Type`, since Vite's default static server otherwise wouldn't resolve the extension-less path.
- `nginx.conf` mirrors this in production with explicit `location =` blocks using `try_files ... /politica-de-*/index.html`.
- `politicas/*.html` at the repo root are source copies of the same content (excluded from the Docker build via `.dockerignore`) — if you edit the policy text, update both `politicas/*.html` and the corresponding `public/.../index.html` so they stay in sync.
- If you need to add another extension-less static route, see the `anthropic-skills:vite-static-routes` skill — this exact pattern (static HTML in `public/` not resolving under Vite+React SPA) is what it documents.

**Assets** (logo, favicon) live in `public/assets/` and are referenced by absolute path (`/assets/...`).

**Content source of truth**: [docs/ervia-landing.md](docs/ervia-landing.md) contains the full approved copy deck (headlines, body text, CTAs) per section, plus conversion notes (funnel order, objections, CTA A/B variants, social-proof recommendations). Treat this as the copy spec — when editing on-page text, check it for the intended wording/tone rather than improvising, and note it uses `[PLACEHOLDER]`/`[PRECIO]` markers for real numbers not yet confirmed (don't invent figures to fill these in).

## Content/tone rules (from the copy spec)

- Spanish, informal "tú" throughout.
- Short sentences, no filler marketing language ("transforma tu negocio" etc. is explicitly banned).
- Never fabricate metrics/testimonials/prices — use `[PLACEHOLDER]` if a real number isn't available.
