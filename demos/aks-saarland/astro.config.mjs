// @ts-check
import { defineConfig } from 'astro/config';

// Concept de démonstration : pas de sitemap, pages non indexées (voir Base.astro).
export default defineConfig({
  site: 'https://arizikismartness.com',
  base: process.env.DEMO_BASE ?? '/',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  trailingSlash: 'ignore',
  compressHTML: true,
});
