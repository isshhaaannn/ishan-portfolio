import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ishan.vryks.com',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
