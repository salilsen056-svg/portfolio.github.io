# Orbit portfolio

Premium, responsive portfolio using Next.js App Router, React, Three.js, Express, and MongoDB. The projects and biography are explicitly illustrative. Replace them in `app/page.jsx` with your own work.

## Run locally

Requires Node.js 22 or newer.

```sh
npm install
cp .env.example .env
npm run server
```

In a second terminal:

```sh
npm run dev
```

Open http://localhost:3000. Configure `MONGODB_URI` in `.env` with your local MongoDB or Atlas URI. Never commit `.env`. The API listens on port 4000. `GET /api/health` reports database availability; `POST /api/contact` validates and stores contact messages with rate limiting. No public endpoint exposes messages.

## Production

`npm run build` creates a static Next.js frontend in `out/`. Host the Express server separately on a Node-compatible host and connect it to MongoDB. Set `CLIENT_ORIGIN` to the frontend origin. Set `NEXT_PUBLIC_API_URL` to the publicly reachable HTTPS Express URL **before building** the frontend. Without that variable, the form clearly reports that the contact service awaits setup and does not pretend to send messages.

The Sites deployment hosts the frontend only. Sites uses a Worker runtime, so the requested Express/MongoDB backend is supplied as separate runnable source rather than running on that host. For a static frontend production preview run `npx serve out`; `next start` is incompatible with static export.

## Customize

- `app/page.jsx`: name, project concepts, biography, contact copy.
- `app/globals.css`: ivory, charcoal, orange palette and responsive layout.
- `components/Sculpture.jsx`: real WebGL torus knot, lighting, and pointer motion.
- `server/index.mjs`: contact storage and API.

External Google Fonts fall back to system fonts. The sculpture uses no external models or textures. Reduced-motion preferences disable continuous rotation and marquee animation.

## GitHub Pages

The `.github/workflows/deploy-pages.yml` workflow builds and deploys the static frontend on every push to `main`. In repository **Settings → Pages**, choose **GitHub Actions** as the build source. The project URL is:

https://salilsen056-svg.github.io/portfolio.github.io/

The repository link itself is a source-code page. The workflow sets `GITHUB_PAGES=true` to add the required `/portfolio.github.io` base path and exports the site into `out/`.

GitHub Pages cannot run Express or MongoDB. Deploy `server/index.mjs` separately, configure its MongoDB URI and `CLIENT_ORIGIN=https://salilsen056-svg.github.io`, then set the repository Actions variable `NEXT_PUBLIC_API_URL` to its HTTPS URL and rerun the workflow. Without that setting, the portfolio still works and the contact form reports that its service awaits setup.
