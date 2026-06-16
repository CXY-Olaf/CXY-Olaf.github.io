/**
 * Shared getStaticPaths for all [lang] pages.
 * Generates one page per supported language (en, zh).
 */
import type { GetStaticPaths } from 'astro';

export const getStaticPaths: GetStaticPaths = () => {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'zh' } },
  ];
};
