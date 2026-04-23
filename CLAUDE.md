# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Glen Waverley Tennis Club (GWTC) website — a static marketing/info site for a community tennis club in Melbourne, Australia. Frontend only; the `backend/` directory exists but is currently empty.

## Commands

All commands run from `frontend/`:

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run lint     # ESLint
npm run preview  # serve the dist/ build locally
npm run deploy   # build + push to GitHub Pages (gh-pages branch)
```

There are no tests.

## Architecture

**Stack**: React 19 + Vite 7, React Router v7, Bootstrap 5 + react-bootstrap, deployed to GitHub Pages.

**Entry point**: `src/main.jsx` wraps the app in `BrowserRouter` with `basename={import.meta.env.BASE_URL}`. `src/App.jsx` defines all routes inside a `<Layout>` wrapper.

**Layout shell**: `src/components/Layout.jsx` renders `<Header>` → `<main>` (route outlet) → `<Footer>` for every page. Adding a new page requires: a file in `src/pages/`, a `<Route>` in `App.jsx`, and an entry in the `navItems` array in `Header.jsx`.

**Static data layer**: Content lives in `src/data/` as plain JS exports — not fetched from an API.
- `membershipData.js` — exports `membershipOptions` (legacy), `joinLinks`, `contactDetails`, `downloads`. `contactDetails` is imported by `Footer.jsx` and `Membership.jsx`.
- `membershipPrices.js` — newer `membershipPrices` array used by `Membership.jsx` for the pricing cards. `membershipData.membershipOptions` is superseded by this file.
- `committeeData.js` — `committeeMembers` array consumed by `CommitteePreview` (home page, first 3) and `Committee.jsx` (full page).

**Static assets**: Images and PDFs go in `/public`, not imported via JS. All paths must be prefixed with `import.meta.env.BASE_URL` so they resolve correctly on GitHub Pages (base path `/gwtc-club-site/` in production, `/` in dev). Example: `` `${import.meta.env.BASE_URL}tennis1.jpg` ``.

**Styling**: Global CSS custom properties in `src/index.css` (colours, spacing, layout). Committee-specific styles are in `src/App.css`. No CSS modules or Tailwind — use the existing utility classes (`.btn`, `.section`, `.container`, `.feature-card`, `.pricing-card`, etc.) before adding new styles. Primary brand colour is `--color-primary: #4e7d47`.

**Responsive / mobile nav**: The `Header` component renders a desktop `<nav>` hidden below 800 px, and a slide-in drawer (`mobile-menu`) shown via hamburger button. The drawer includes full keyboard accessibility: focus trap, Escape-to-close, body scroll lock, and focus-return to trigger button.

**Hero image carousel**: `Home.jsx` manages a manual fade cycle (`DISPLAY_MS = 10000 ms`, `FADE_MS = 600 ms`) with `useState`/`useEffect`. The `is-fading` CSS class drives the opacity transition in `index.css`. Image filenames are listed in the `heroImages` array at the top of `Home.jsx`.

## Deployment Notes

- `vite.config.js` sets `base: '/gwtc-club-site/'` in production and `'/'` in dev.
- The `public/404.html` exists to handle client-side routing on GitHub Pages (SPA fallback).
- `npm run deploy` uses the `gh-pages` package to push `dist/` to the `gh-pages` branch.
