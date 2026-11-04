// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages:
// - Repo "<username>.github.io"  -> site: 'https://<username>.github.io', base: '/'
// - Repo lain, mis. "portfolio"   -> site: 'https://<username>.github.io', base: '/portfolio'
export default defineConfig({
  site: 'https://dwikyalfira.github.io',
  base: '/',
  integrations: [sitemap()],
  // gallery photos are downloaded from Pexels at build time and served from this site
  // (optimised to WebP, no third-party cookies for visitors)
  image: { domains: ['images.pexels.com'] },
});
