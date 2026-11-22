# ishan.vryks.com

Ishan Mitra's portfolio: Astro, hosted free on GitHub Pages. Every push to `main` rebuilds and publishes the site automatically (about 1–2 minutes).

## Add a new card (project)

1. Export the images (and any `.mp4`) for the project.
2. Make a folder `public/work/<project-name>/` (lowercase, dashes, e.g. `public/work/acme-launch/`) and put the files in it. Name them `01.jpg`, `02.jpg` and so on, in the order you want.
   - Keep images under about 1600 px on the long side. WebP or JPG both work.
   - Or let the script optimise them: add the source folder to the list at the top of `scripts/prepare_assets.py`, then run `npm run assets`.
3. Open `src/data/projects.ts` and copy any existing entry. Change `slug` to the folder name, then fill in `name`, `team`, `set` (`carousels`, `brand`, `motion` or `ads`), `position` and `blurb`. Add `stats` only with real numbers.
4. Commit and push. The site updates itself.

## Going live on ishan.vryks.com

Right now the site is served at https://isshhaaannn.github.io/ishan-portfolio/. When you're ready for the real address:

1. In Hostinger DNS for vryks.com, add a CNAME record: name `ishan`, pointing to `isshhaaannn.github.io`.
2. Rename `CNAME.later` to `public/CNAME`.
3. In `.github/workflows/deploy.yml`, delete the `env:` block under `npm run build` (SITE_URL and SITE_BASE).
4. Push, then in GitHub repo Settings → Pages set the custom domain to ishan.vryks.com and tick Enforce HTTPS.

## Settings

`src/data/site.ts` holds:
- `CAL_LINK`: your Cal.com event, e.g. `ishan-mitra/intro`. Until it's set, the "Book a call" buttons open an email to contact@vryks.com.
- `goatcounter`: your free GoatCounter code, for privacy-friendly visitor stats.

## Run locally

```
npm install
npm run dev
```
