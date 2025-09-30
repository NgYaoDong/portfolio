# Portfolio (Vite + React)

This is a small single-page portfolio built with Vite + React and Tailwind. The README below covers the common workflows: run locally, build, and deploy to GitHub Pages (project page).

Quick overview

- Framework: React (Vite)
- Styling: Tailwind CSS
- Router: react-router-dom (HashRouter for GitHub Pages)

Requirements

- Node.js 18+ (or compatible LTS)
- npm (or yarn/pnpm)

Quick start (development)

1. Install deps:

```powershell
npm install
```

1. Start dev server (hot reload):

```powershell
npm run dev
```

Build (production)

```powershell
npm run build
npm run preview
```

The production build output will be in `dist/`.

Deploy (GitHub Pages)

- This project is designed to be hosted as a repository project page (for example: `https://<your-user>.github.io/<repo>/`).

- Where to edit content

- `src/pages/Home.jsx` — main page layout and sections

- `src/components/` — reusable UI pieces (NavBar, Footer, ProjectsSection, ContactSection, ThemeToggle)

- `public/` — static assets (project placeholders, images)
- If you host as a project page, make sure `vite.config.js` has `base` set to `'/<repo>/'` (for example `'/portfolio/'`). After setting base, run `npm run build` and publish the `dist/` directory using your preferred method (GitHub Actions, gh-pages, or manual upload).

Where to edit content

- `src/pages/Home.jsx` — main page layout and sections
- `src/components/` — reusable UI pieces (NavBar, Footer, ProjectsSection, ContactSection, ThemeToggle)
- `public/` — static assets (project placeholders, images)

Common tweaks

- To change the site title in the nav, edit `src/components/NavBar.jsx` (the brand link).
- To add/remove projects, edit `src/components/ProjectsSection.jsx` and place images in `public/projects/`.
- Theme is controlled by `src/components/ThemeToggle.jsx` and persisted to `localStorage`.

Debugging & tests

- Run `npm run dev` and watch the browser console for errors.
- If assets 404 on a GitHub Pages project site, confirm `vite.config.js` `base` and that `import.meta.env.BASE_URL` is used for public asset URLs.

Need help or changes?

- Tell me which component or behavior you want to change (nav, projects, contact form, theme). I can make focused edits and run a quick local test.
