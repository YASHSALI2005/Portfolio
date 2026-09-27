# Handover

**Live:** https://www.yashsali.me — `main` auto-deploys to Vercel project `portfolio-new`.
**Last updated:** 2026-09-27

## Current site (top to bottom)
- Floating glass pill nav (Experience · Projects · Skills · Contact · Resume); mobile hides Skills, labels
  Experience "Work"; bigger at ≥408 px wide. Pixel-font "Yash." logo.
- Hero: looping banner video, pixel avatar, serif name with red/cyan split, role decodes on load
  (React Bits DecryptedText), location + email with copy button, tagline, Alan Kay quote, icon links.
- Experience (3 EnPointe roles, 3 bullets each, "Working" shimmer badge) → Projects (Clickk, AI Movie
  Scheduler [client project, blurred real screenshot, no links], Deepfake, Chest X-Ray) → Skills (grouped
  by capability) → Education (B.E. IT, CGPA 8.20, IEEE paper link, HACKUP; HSC 2022, SSC 2020) →
  GitHub calendar → Contact (EmailJS form).
- Effects: glass cards with cursor spotlight, click sparks, oneko cat, background glows.
- Company: legal name "EnPointe IT Services Pvt. Ltd." (site/resume); LinkedIn page "Enpointe Global" is the same company. Full-time start Jul 2026.
- SEO (Search Console sitemap: Success): JSON-LD Person/WebSite/ScholarlyArticle, canonical, robots.txt, sitemap.xml, static fallback text.

## Open (needs the owner)
- **ML Engineer (full-time) bullets are generic** on site, resume and LinkedIn. Owner is asking a senior
  what client work may be named. Real work exists (see private context file) — rewrite once cleared.
- Render free-tier demos (Clickk, Deepfake, Chest X-Ray) sleep; first visit can take 1–2 min.

## Domain & DNS (Namecheap)
- `yashsali.me`, free via GitHub Student Pack. Expires **2027-09-26**, auto-renew OFF — renew before then.
- A `@` → 216.198.79.1 · CNAME `www` → e0b5eb0cfb4b45e9.vercel-dns-017.com.
- TXT `@` = `google-site-verification=…` (Search Console) — don't delete; TXT spf for email forwarding.
- `yashsali.me` 308-redirects to `www.yashsali.me`.

## Contact form
- EmailJS; keys are `VITE_EMAILJS_*` in Vercel env vars. It failed once with Gmail "Invalid grant";
  owner reconnected Gmail in the EmailJS dashboard. If it breaks again, same fix.

## Watch for
- Resume changes: re-export PDF, keep one page, bump `?v=` (browsers cache the old file otherwise).
- `src/assets/scheduler.webp` is a real client dashboard with confidential fields blurred. If replaced,
  blur client name/badge, emails, model/data-source names and cinema codes again.
- The GitHub calendar uses a third-party API (`react-github-calendar`); if it's down only that section fails.
