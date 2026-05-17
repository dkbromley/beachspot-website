# BeachSpot website

The public marketing site at **[beachspotapp.com](https://beachspotapp.com)**.

Static HTML/CSS/JS with React 18 + Babel loaded in-browser via UNPKG. No
build step. Deploys to Netlify site `0250a8d1-88e2-4a0d-8e71-a4e76014f2ec`
(project `beachparking`) by syncing the repo root.

## What's here

```
/                       — repo root is also the deploy root
├── index.html          — the SPA entry; hash-routes to all 5 pages
├── colors_and_type.css — design tokens (Claude-Design package)
├── styles.css          — page-level styles
├── motion.css          — scroll + reveal animation styles
├── Atoms.jsx           — Nav, Footer, StatusPill, LotCard, PhoneMock
├── CoastalMap.jsx      — animated map illustration
├── Home1.jsx           — / (driver-first home)
├── Home2.jsx           — alt home (not currently routed)
├── LotOwners.jsx       — #lot-owners
├── Pages.jsx           — #support, #privacy, #terms
├── Extras.jsx          — shared decorative components
├── assets/             — logo, favicon, illustrations, badges
└── fonts/              — self-hosted Geist + Geist Mono
```

## Routes

In-page hash routing handled by `App` inside `index.html`. Netlify
rewrites the deep-link URLs so `/lot-owners`, `/support`, `/privacy`,
and `/terms` all resolve correctly from external referrers.

| URL | Renders |
|---|---|
| `/` | Home (driver-first) |
| `/lot-owners` | Lot-owner funnel |
| `/support` | Support + Apple-required account deletion |
| `/privacy` | Privacy policy (mobile-app deep links here) |
| `/terms` | Terms of service (mobile-app deep links here) |

## Hard product constraints

- **`/privacy` and `/terms` URLs must stay live.** The iOS app deep-links
  them from Settings; breaking the URL breaks App Store compliance.
- **Lot-owner billing must never be linked from the mobile app**
  (App Store 3.1.1). All `List your lot` CTAs link to
  `app.beachspotapp.com/onboarding/become-owner` from this site only.
- **Never fabricate stats, testimonials, or app-store ratings.** The
  design follows this rule; copy edits must too.

## Local dev

Static site — open `index.html` in any browser, or run a quick HTTP
server from the repo root:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploy

Pushing to `main` triggers an automatic Netlify deploy (no build step,
just sync). Cloudflare fronts the domain — cache may take 5-30 min to
propagate after each deploy.

## Design source

This site implements the **BeachSpot Design System** handoff package
from claude.ai/design. Source files live in
`gsp-mobile/.design/BeachSpot Design System/` (not in this repo).
Re-import via the Claude Design viewer if iterating on the design.
