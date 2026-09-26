# Decisions

## 2026-09-26 — Rebuild as minimal single-page site on the existing Vite stack
Model: Opus 5.5
Type: decision
Reasoning: User wanted a fresh portfolio in the style of animeshh.me / samworks.vercel.app
           (dark, minimal, single column). The repo already used Vite + React + TS + Tailwind,
           the same stack as animeshh.me, so the scaffold was kept and only src/ was rewritten.
           Built as an original design in that style rather than copying either site — neither
           publishes an open license.
Rejected: Migrating to Next.js (no SSR/routing need for one page); cloning the reference sites' code.
Reverses: —

## 2026-09-26 — Kept framer-motion instead of switching to motion; no icon library
Model: Opus 5.5
Type: decision
Reasoning: framer-motion was already installed and covers the fade-in animations. Links use text + ↗
           instead of icons, so lucide-react wasn't needed.
Rejected: motion + lucide-react (what animeshh.me uses) — extra churn for no visible gain.
Reverses: —

## 2026-09-26 — Removed Three.js and 3D assets
Model: Opus 5.5
Type: decision
Reasoning: The 3D desktop/planet scenes were the template's signature and several MB of models;
           the new design has no 3D. Removed three, drei, fiber, maath, tilt, vertical-timeline, router.
           Rollback: `git checkout main` — the old site is untouched there.
Rejected: Keeping a small 3D element — clashes with the minimal look.
Reverses: —

## 2026-09-26 — Cat cursor via vendored oneko.js; pixel avatar generated from own photo
Model: Opus 5.5
Type: decision
Reasoning: Owner asked for a cat that runs after the mouse. oneko.js (adryd325, MIT) is the standard
           one; vendored into public/oneko/ with its LICENSE instead of adding an npm dep. It already
           disables itself under prefers-reduced-motion.
           Avatar: owner supplied a reference pixel avatar but asked not to use it as-is. Generated one
           from their own GitHub photo (crop → 36px → 12 colours → yellow disc) with a one-off Pillow
           script; not kept in the repo since it only runs once.
Rejected: Using the reference image (not the owner's likeness); hand-rolled cat animation (oneko exists).
Reverses: —
