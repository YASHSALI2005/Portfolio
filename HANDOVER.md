# Handover

**Live:** https://www.yashsali.me — `main` auto-deploys to Vercel project `portfolio-new`. (`redesign` branch merged 2026-09-26; can be deleted.)

## Done
- Replaced the Three.js template with a minimal dark single-page site (see ARCHITECTURE.md).
- All real content moved to `src/data.ts`; placeholder testimonials from the template dropped.
- `npm run build` and `npm run lint` pass; checked visually in Chrome via `vite preview`.

## Open
- `public/resume.pdf` is older than the site: says student / ML Intern "Present" and shows phone number publicly. Owner to update.
- ML Engineer (full-time) bullets are still generic.
- Avatar (`src/assets/avatar.png`) is cut from the ChatGPT share preview (1200×630), so it's only ~560px source. Swap in the original full-size download if available.
- `travelplanner.png` (1.3 MB) and `chestxrayai.png` (800 KB) should be compressed / converted to WebP.
- Contact form not tested end-to-end (needs the EmailJS env vars locally).

## Domain
- `yashsali.me` — Namecheap account `Yashsali12`, free via GitHub Student Pack (claimed through GitHub account `yashsali1`). Expires **2027-09-26**, auto-renew OFF.
- Vercel project `portfolio-new`: `www.yashsali.me` serves Production; `yashsali.me` 308-redirects to www.
- Namecheap DNS: A `@` → 216.198.79.1, CNAME `www` → e0b5eb0cfb4b45e9.vercel-dns-017.com.

## Watch for
- Before 2027-09-26: renew `yashsali.me` (paid) or it lapses.
- The GitHub calendar fetches from a third-party API (`github-contributions-api.jogruber.de`, via `react-github-calendar`). If it's down, that section shows an error message; the rest of the page is unaffected.
