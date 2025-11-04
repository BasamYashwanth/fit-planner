Render deployment guide for Fit Planner

This repository is prepared for deployment on Render (https://render.com). It includes a Dockerfile and a `render.yaml` manifest.

Quick steps (recommended)

1. Commit and push your changes to GitHub

```bash
git add -A
git commit -m "Prepare repo for Render: Dockerfile + render manifest + deploy docs"
git push origin main
```

2. Create a Render Web Service

- Go to https://dashboard.render.com and sign in.
- Click "New" → "Web Service".
- Connect your GitHub account and choose this repository.
- Render will detect `render.yaml` and offer to use it. Accept it.
  - If you prefer Docker, you can select "Docker" and Render will build the `Dockerfile` directly.
- Confirm settings (buildCommand: `pnpm build`, startCommand: `pnpm start`, port: `3000`).
- Create the service — Render will build and provide a public URL (your "render link").

Notes and troubleshooting

- PNPM and Corepack
  - The Dockerfile enables corepack and activates pnpm. If your build fails on Render due to pnpm, try switching the Dockerfile base to a non-slim Debian image (already set to `node:20-bullseye`).

- Build cache and large files
  - Render ignores `.dockerignore` by default when using the Dockerfile; if you have big local files, add a `.dockerignore` to avoid copying unnecessary files into the image.

- Using the `render.yaml`
  - If you use `render.yaml`, Render will deploy according to the manifest. You can include environment variables there or set them in the Render dashboard.

- Environment variables / secrets
  - Add any secrets (API keys) in the Render Dashboard under your service > Environment.

- Alternate: Vercel
  - For Next.js apps, Vercel is very simple (auto-detects Next.js); if you'd like, I can provide Vercel-specific instructions instead.

Local verification (before pushing)

- Run locally to ensure the app builds and runs:

```bash
pnpm install
pnpm build
pnpm start
```

- For local development:

```bash
pnpm install
pnpm run dev
```

If you'd like, I can:
- Create a `.dockerignore` for you.
- Try to build the Docker image here (I can't run Docker in this environment, but I can produce the exact `docker build` command and Dockerfile tweaks).
- Prepare a short set of Render health checks or add a `HEALTHCHECK` instruction to the Dockerfile.

If you're ready, I can also attempt to start the dev server here to verify (I'll run the workspace task).