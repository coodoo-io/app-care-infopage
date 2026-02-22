import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://coodoo-io.github.io',
  base: process.env.GITHUB_ACTIONS ? '/app-care-infopage' : '/',
});
