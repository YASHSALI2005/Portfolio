# Handover

**Branch:** `redesign` (not merged, not pushed). `main` still holds the old 3D template site, which is what's live.

## Done
- Replaced the Three.js template with a minimal dark single-page site (see ARCHITECTURE.md).
- All real content moved to `src/data.ts`; placeholder testimonials from the template dropped.
- `npm run build` and `npm run lint` pass; checked visually in Chrome via `vite preview`.

## Open
- Experience bullets for the ML roles are thin (written from LinkedIn posts) — owner to fill in real work.
- Full-stack internship dates are just "2025" — owner to confirm exact months.
- Avatar (`src/assets/avatar.png`) is auto-pixelated from the GitHub photo; replace with a hand-drawn one if wanted.
- Changes since the last commit not yet checked visually in a browser.
- `travelplanner.png` (1.3 MB) and `chestxrayai.png` (800 KB) should be compressed / converted to WebP.
- Contact form not tested end-to-end (needs the EmailJS env vars locally).

## Watch for
- The GitHub calendar fetches from a third-party API (`github-contributions-api.jogruber.de`, via `react-github-calendar`). If it's down, that section shows an error message; the rest of the page is unaffected.
