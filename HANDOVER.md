# Handover

**Live:** https://www.yashsali.me — `main` auto-deploys to Vercel project `portfolio-new`. (`redesign` branch merged 2026-09-26; can be deleted.)

## Done
- Replaced the Three.js template with a minimal dark single-page site (see ARCHITECTURE.md).
- All real content moved to `src/data.ts`; placeholder testimonials from the template dropped.
- `npm run build` and `npm run lint` pass; checked visually in Chrome via `vite preview`.

## Open (owner input needed — from recruiter-style review 2026-09-26)
- ML Engineer (full-time) bullets in `src/data.ts` are generic — need 2–3 concrete ones with a result.
- Resume: source is `docs/resume.html` (no phone; `<!--PHONE-->` marks where it goes). Export with Chrome "Print → Save as PDF" (A4, no headers) to `public/Yash-Sali-Resume.pdf` and bump `?v=` on `profile.resume` in `src/data.ts`; must stay 1 page. Full-time ML Engineer bullets there are placeholders too.
- Render free-tier demos (Clickk, Deepfake, Chest X-Ray) sleep; first visit can take 1–2 min.
- `README.md` still mentions the old live URL; point it at https://www.yashsali.me.

## Domain
- `yashsali.me` — Namecheap account `Yashsali12`, free via GitHub Student Pack (claimed through GitHub account `yashsali1`). Expires **2027-09-26**, auto-renew OFF.
- Vercel project `portfolio-new`: `www.yashsali.me` serves Production; `yashsali.me` 308-redirects to www.
- Namecheap DNS: A `@` → 216.198.79.1, CNAME `www` → e0b5eb0cfb4b45e9.vercel-dns-017.com.

## Watch for
- Before 2027-09-26: renew `yashsali.me` (paid) or it lapses.
- The GitHub calendar fetches from a third-party API (`github-contributions-api.jogruber.de`, via `react-github-calendar`). If it's down, that section shows an error message; the rest of the page is unaffected.
