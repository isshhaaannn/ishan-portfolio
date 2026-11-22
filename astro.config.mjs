import { defineConfig } from 'astro/config';

// While the site lives at isshhaaannn.github.io/ishan-portfolio, the deploy workflow sets
// SITE_URL and SITE_BASE. Once ishan.vryks.com points at GitHub Pages, remove both from
// .github/workflows/deploy.yml and the defaults below take over.
const site = process.env.SITE_URL || 'https://ishan.vryks.com';
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
