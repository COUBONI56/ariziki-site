// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arizikismartness.com',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/api/') && !page.includes('/404') })],
  compressHTML: true,
});
