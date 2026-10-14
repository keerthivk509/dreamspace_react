# DreamSpace Interior Design — React + Vite

## Run locally
1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite (usually http://localhost:5173).

Build production files with `npm run build`.

## Dynamic navigation
Edit `src/data/siteData.js` and update the `navigation` array. Top-level menus are Home, About Us, Services, Gallery, and Contact Us. Home has no submenu. About Us, Services, and Gallery have nested `submenu` arrays. Navbar.jsx renders menus with `.map()`.

Services, gallery items and testimonials are also data-driven from `siteData.js`. Replace the demo phone/email/address, sample photos, statistics and testimonials before publishing. The contact form currently validates client-side only; connect it to a backend or form service to receive submissions.

## Animations
All motion lives in two places, with no extra dependencies:
- `src/animations.css` — hover effects, hero transitions, marquee, reveal styles (respects `prefers-reduced-motion`).
- `src/components/Motion.jsx` — `<Reveal variant="up|left|right|zoom|wipe" delay={ms}>` for scroll reveals, `<CountUp value="500+"/>` for counters, and `<ScrollEffects/>` for the progress bar and shrinking navbar.
Wrap any new block in `<Reveal>` to animate it on scroll.
