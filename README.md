# Yash Sali — Portfolio

Minimal single-page developer portfolio. React 18 + TypeScript + Vite + Tailwind + Framer Motion.

**Live:** https://www.yashsali.me

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

Contact form needs these in `.env` (and in Vercel project settings):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Editing content

All text, projects, experience and skills live in `src/data.ts`. Project screenshots go in `src/assets/`.

## Project docs

Read `HANDOVER.md` first, then `ARCHITECTURE.md`, `DECISIONS.md` and `CONSTRAINTS.md`.

## License

© 2026 Yash Sali. All rights reserved — the code and content here may not be copied or reused
without permission. Third-party pieces (original template config, React Bits, oneko.js) keep
their own licenses; see [LICENSE](LICENSE).
