# CLAUDE.md — Yash Sali portfolio (https://www.yashsali.me)

Read these before doing anything, in this order:
1. `HANDOVER.md` — current state, open items, what to watch for.
2. `CONSTRAINTS.md` — what must never happen here.
3. `DECISIONS.md` — why things are the way they are (append-only).
4. `ARCHITECTURE.md` — how the files fit together.
5. `../SESSION-CONTEXT-PRIVATE.md` (outside this repo, on the owner's machine only) — full history of
   the build session, the owner's preferences, accounts and pending decisions. Not in git on purpose.

## Essentials
- Vite + React 18 + TypeScript + Tailwind + framer-motion. Single page. All text/content lives in
  `src/data.ts`; components: `App.tsx`, `Hero.tsx`, `Nav.tsx`, `Contact.tsx`, `icons.tsx`, `src/bits/`.
- Every push to `main` auto-deploys to Vercel (project `portfolio-new`) → www.yashsali.me.
  Don't push without the owner's go-ahead.
- Check a change: `npm run build && npm run lint`, then `npx vite preview` and look at it in a browser
  (desktop and ~360–412 px phone widths — the nav is tuned for those).
- Resume: source `docs/resume.html` → Chrome print-to-PDF → `public/Yash-Sali-Resume.pdf`, one page,
  then bump `?v=` on `profile.resume` in `src/data.ts`.

## Rules the owner cares about
- This repo is PUBLIC. Never commit passwords, phone numbers, `.env`, client names, internal model
  names or unblurred client screenshots. Client work (EnPointe) is described generically.
- Only state facts that come from the owner, the resume, LinkedIn, or the repos — no invented metrics.
- Keep the look: dark, glassy, violet accents, pixel details (avatar, oneko cat, nav logo).
- The owner writes casually and briefly; answer plainly, short, and confirm before anything public.
