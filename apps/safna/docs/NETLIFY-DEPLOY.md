# Deploy to Netlify

## Option A — Drag and drop (no GitHub needed)

1. Build the static site:

```bash
cd C:\Users\Vishnu\Desktop\AI_Product_Lab\Invitation
npm run build:static
```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the **`out`** folder onto the page (the whole folder, not its contents)
4. Netlify uploads it and gives you a live URL like `https://random-name.netlify.app`
5. To update the site later: run `npm run build:static` again, then in Netlify go to
   **Deploys → drag the new `out` folder** onto the deploys page
6. Rename the site: **Site settings → Change site name** (e.g. `safna-jithin-wedding`)

Note: drag-and-drop uses the static export (`STATIC_EXPORT=1`). The old
`/api/blessings` route is not part of the live experience and was moved to
`src/legacy-api/` so the static build succeeds.

## Option B — Git-based deploy (auto-updates on push)

## 1. Push to GitHub

```bash
cd C:\Users\Vishnu\Desktop\AI_Product_Lab\Invitation
git init   # if not already
git add .
git commit -m "Safna wedding invitation v2 — cinematic experience"
git remote add origin <your-repo-url>
git push -u origin main
```

## 2. Connect Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Select your repository
3. Build settings (auto-detected from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (handled by Next.js plugin)
4. Deploy

## 3. Install Netlify Next.js plugin

The repo includes `netlify.toml` with `@netlify/plugin-nextjs`. Netlify installs it automatically on first build.

If build fails, run locally first:

```bash
npm install
npm run build
```

## 4. Environment variables

None required for basic deploy. Add later if using Supabase, etc.

## 5. Custom domain

Netlify → Site settings → Domain management → Add custom domain

## 6. Assets checklist before go-live

- [ ] `public/video/canva-invitation.mp4` present
- [ ] `public/assets/scenes/*.png` present
- [ ] Update `WEDDING.venue.mapsUrl` in `src/lib/constants.ts`
- [ ] Optional: `public/audio/ambient-piano.mp3`
