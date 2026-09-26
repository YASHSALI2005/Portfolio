# Architecture

Static single-page site built by Vite, deployed to Vercel.

```
index.html ─ src/main.tsx ─ src/App.tsx   page layout: header, hero, sections, footer
                               ├─ src/data.ts      all content (profile, experience, projects, skills)
                               └─ src/Contact.tsx  contact form → EmailJS (browser) → email inbox
```

- Styling: Tailwind utility classes only; fonts (Instrument Serif / Inter / JetBrains Mono) loaded from Google Fonts in `src/globals.css`.
- Motion: Framer Motion fade-up on each section as it enters the viewport.
- External calls at runtime: EmailJS (form submit), GitHub contributions API (calendar), Google Fonts.
