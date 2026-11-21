// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ariziki.com',
  // URLs propres : /en/ au lieu de /en/index.html
  build: { format: 'directory', inlineStylesheets: 'auto' },
  trailingSlash: 'ignore',
  i18n: {
    locales: ['fr', 'en', 'de'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/api/') && !page.includes('/404'),
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US', de: 'de-DE' } },
    }),
  ],
  compressHTML: true,
});
