/**
 * Client-side language utilities.
 * Used by interactive components (Navbar, LanguageToggle, etc.)
 */

export type Lang = 'en' | 'zh';

export function getCurrentLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const path = window.location.pathname;
  if (/^\/(zh)(?:\/|$)/.test(path)) return 'zh';
  return 'en';
}

export function switchLangPath(targetLang: Lang): string {
  const path = window.location.pathname;
  const cleaned = path.replace(/^\/(en|zh)(?=\/|$)/, '') || '/';
  const normalized = cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
  return `/${targetLang}${normalized === '/' ? '' : normalized}`;
}
