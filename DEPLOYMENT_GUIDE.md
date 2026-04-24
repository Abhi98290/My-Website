# Vercel Deployment Guide

This project builds a static client app into `dist/client`.
If Vercel is pointing to `dist` (or default), the site can show 404.

## 1. One-time setup in Vercel

1. Import repo into Vercel.
2. Framework preset: `Other` (or keep auto-detected if build command/output are read from `vercel.json`).
3. Root Directory: project root.
4. Confirm these values:
	- Build Command: `npm run build`
	- Output Directory: `dist/client`
5. Click Deploy.

## 2. Local pre-check before deploy

Run:

```bash
npm install
npm run build
```

Expected output folders:

- `dist/client`
- `dist/server`

Only `dist/client` is used by Vercel for hosting.

## 3. Why 404 happened

Common reasons:

1. Vercel output directory set to wrong folder.
2. SPA routing rewrite missing.
3. Old failed deployment cache/config still active.

## 4. Included fix in this repo

`vercel.json` now explicitly sets:

- `buildCommand: npm run build`
- `outputDirectory: dist/client`
- SPA rewrite rule for client-side routes (without breaking static assets)

## 5. If 404 still appears

1. In Vercel dashboard, open Project Settings -> Build & Output Settings and verify output is `dist/client`.
2. Trigger a fresh deployment using "Redeploy" with "Use existing Build Cache" turned off.
3. Check deployment logs for:
	- build command executed successfully
	- files uploaded from `dist/client`
4. Open deployment URL and test:
	- `/`
	- `/about` (or any deep route)

## 6. Optional CLI deploy

```bash
npm i -g vercel
vercel login
vercel --prod
```

When asked:

- Build Command: `npm run build`
- Output Directory: `dist/client`

