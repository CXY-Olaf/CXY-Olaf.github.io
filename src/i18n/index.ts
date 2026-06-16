import en from './en';
import zh from './zh';
import type { Translations } from './en';

export type Lang = 'en' | 'zh';

const translations: Record<Lang, Translations> = { en, zh };

export const supportedLangs: Lang[] = ['en', 'zh'];
export const defaultLang: Lang = 'en';

/**
 * Get translations for a given language.
 * Falls back to English for unknown languages.
 */
export function getTranslations(lang: string): Translations {
  return translations[lang as Lang] ?? translations.en;
}

/**
 * Resolve the preferred language from a URL path prefix like "/en/" or "/zh/".
 */
export function langFromPath(pathname: string): Lang {
  const match = pathname.match(/^\/(en|zh)(?:\/|$)/);
  if (match) return match[1] as Lang;
  return defaultLang;
}

/**
 * Convert a bare path (e.g. "/about") to the language-prefixed version.
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/(en|zh)(?=\/|$)/, '') || '/';
  const normalized = clean.startsWith('/') ? clean : `/${clean}`;
  return `/${lang}${normalized === '/' ? '' : normalized}`;
}

/**
 * Resolve the best language from the browser's Accept-Language header
 * or navigator.language. Defaults to English if no match.
 */
export function detectLanguage(acceptLanguage?: string | null): Lang {
  if (!acceptLanguage) return defaultLang;
  const lowered = acceptLanguage.toLowerCase();
  if (lowered.includes('zh')) return 'zh';
  return 'en';
}
