# Ashish Jain — Portfolio

This is a personal portfolio site built with React + Vite.

## What I changed
- Added `.gitignore` to avoid committing `node_modules` and build artifacts.
- Implemented lazy-loading for major content sections using `React.lazy` + `Suspense` in `src/App.jsx` to improve initial load.
- Added this `README.md` with build and deployment instructions.

## Local development
Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment
Deploy the `dist/` folder to any static hosting (Netlify, Vercel, GitHub Pages, etc.). Add the live URL here once deployed.

**Live site:** (add your deployed URL here)

## Screenshots
Add screenshots of the live site to `public/screenshots/` and reference them below.

## Notes & Next steps
- Consider using `React.Suspense` placeholders and route-based splitting for further optimization.
- Use a custom domain and enable HTTPS for a professional touch.
