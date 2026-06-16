// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ── TODO: Change these to match your GitHub setup ──────────────────────────
// If deploying to <username>.github.io (user/org site):
//   → site: "https://<username>.github.io"
//   → base: "/"
//
// If deploying to <username>.github.io/<repo> (project site):
//   → site: "https://<username>.github.io"
//   → base: "/<repo>/"
// ───────────────────────────────────────────────────────────────────────────
const SITE = 'https://CXY-Olaf.github.io';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
