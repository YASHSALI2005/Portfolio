# Architecture

Static single-page site built by Vite, deployed to Vercel.

```
index.html ─ src/main.tsx ─ src/App.tsx   page layout: glow backdrop, sections, footer
                               ├─ src/Nav.tsx      floating glass nav, highlights section in view
                               ├─ src/Hero.tsx     banner video, avatar, name, links
                               ├─ src/icons.tsx    shared inline SVG icons
                               ├─ src/bits/        vendored React Bits effects (see DECISIONS.md)
                               ├─ src/data.ts      all content (profile, experience, projects, skills)
                               └─ src/Contact.tsx  contact form → EmailJS (browser) → email inbox
```

- Styling: Tailwind utility classes only; fonts (Instrument Serif hero name / Bricolage Grotesque headings / Pixelify Sans nav logo / Geist body / Geist Mono details) loaded from Google Fonts in `src/globals.css`.
- Motion: Framer Motion fade-up on each section as it enters the viewport.
- External calls at runtime: EmailJS (form submit), GitHub contributions API (calendar), Google Fonts.
