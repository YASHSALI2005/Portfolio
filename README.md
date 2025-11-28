# Yash Sali — Immersive 3D Portfolio

[![Made by Yash Sali](https://img.shields.io/badge/Made%20by-Yash%20Sali-7c3aed?style=flat-square)](https://github.com/YASHSALI2005)
[![GitHub Repo](https://img.shields.io/badge/Repo-Portfolio-black?logo=github)](https://github.com/YASHSALI2005/Portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981.svg)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Three.js%20%7C%20TS-2563eb.svg)](#-tech-stack)

![3D Portfolio preview](preview.png)

> A cinematic, keyboard-first developer portfolio that blends a Three.js hero experience with real projects, testimonials, and a contact form powered by EmailJS.

- **Role**: Full-stack developer & IT engineering student  
- **Focus**: 3D storytelling, responsive UI, and real-time interactions  
- **Stack**: React 18, TypeScript, Vite, Three.js, Tailwind, Framer Motion

---

## ✨ Highlights

- **3D hero moment** – floating desktop scene rendered with Three.js + react-three-fiber.
- **Magnetic sections** – smooth scroll-triggered transitions, parallax tilt project cards, and keyboard-friendly CTAs.
- **Real projects** – Smart Home dashboard, Deepfake detection system, TravelPlanner web app, and Clickk (AI code editor).
- **Production-ready pipeline** – ESLint, Prettier, TypeScript strictness, and EmailJS support baked in.

---

## 🧠 Tech Stack

| Category | Tools |
| --- | --- |
| Framework & Bundler | React 18, Vite |
| 3D & Motion | Three.js, @react-three/fiber, Framer Motion, Parallax Tilt |
| Styling | Tailwind CSS, custom gradients, responsive utilities |
| Language & Tooling | TypeScript, ESLint, Prettier |
| Email & Forms | EmailJS REST API |
| Deployment | Vercel / Netlify (static export) |

[![Tech icons](https://skillicons.dev/icons?i=ts,react,threejs,tailwind,vite,vercel,netlify,git)](https://skillicons.dev)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm (comes with Node) or pnpm/yarn
- Git

### Clone & Install
```bash
git clone https://github.com/YASHSALI2005/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Development server runs at `http://localhost:5173`.

### Environment Variables
Create a `.env` file (never commit secrets) and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=xxxx
VITE_EMAILJS_TEMPLATE_ID=xxxx
VITE_EMAIL_JS_ACCESS_TOKEN=xxxx
```

> Get the keys from [EmailJS](https://www.emailjs.com/) and enable the template you wired into `Contact.tsx`.

### Useful Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Generate production bundle (./dist) |
| `npm run preview` | Serve the built bundle locally |
| `npm run lint` | Run ESLint |
| `npm run ts:check` | Type-check using tsc |

---

## 🧱 Project Anatomy

<details>
<summary>Expand the tree</summary>

```bash
src/
├── components/        # Hero, About, Works, Tech, Contact, Canvas scenes
├── constants/         # Config copy, services, projects, experience data
├── assets/            # Logos, tech icons, project screenshots, 3D textures
├── hoc/               # SectionWrapper HOC for consistent spacing
├── utils/             # Motion variants and helper functions
├── types/             # Shared TypeScript types
└── main.tsx           # App bootstrap with React.StrictMode and Tailwind styles
```
</details>

---

## 🌍 Deployment

### Vercel (recommended)
1. Push the repo to GitHub.
2. Import into [Vercel](https://vercel.com/new) and pick the `Portfolio` repo.
3. Vercel auto-detects Vite → Build command: `npm run build`, Output: `dist`.
4. Set the EmailJS env vars in *Project Settings → Environment Variables*.
5. Ship previews on every push to `main`.

### Netlify
1. `npm run build`.
2. Connect the repo at [Netlify](https://app.netlify.com/start).
3. Build command `npm run build`, Publish directory `dist`.
4. Configure env vars in Netlify dashboard.

### Static Export
Need a bare-metal/static hosting option? Run `npm run build` and drop the `dist/` folder into any static host (Cloudflare Pages, GitHub Pages, etc).

---

## 🤝 Contributing / Forking

This project started as my personal portfolio, but feel free to explore, fork, or adapt it for yours.  
If you add something cool, open an issue or PR so I can check it out!

1. `git checkout -b feature/awesome`
2. Push your branch
3. Open a PR with screenshots or a short Loom

---

## 📬 Contact

- Portfolio: [https://yashsali.dev](https://yashsali.dev) _(coming soon)_
- GitHub: [@YASHSALI2005](https://github.com/YASHSALI2005)
- LinkedIn: [Yash Sali](https://www.linkedin.com/in/yashsali05)
- Email: [salirajesh7@gmail.com](mailto:salirajesh7@gmail.com)

---

## 📝 License

Released under the [MIT License](LICENSE).  
You’re free to remix it—credit is appreciated!