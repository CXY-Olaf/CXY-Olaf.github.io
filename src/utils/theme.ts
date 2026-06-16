/**
 * Client-side dark mode utilities.
 *
 * Strategy:
 *  1. A tiny inline <script> in <head> reads localStorage and applies
 *     the "dark" class before the first paint (avoids FOUC).
 *  2. This module is imported by the ThemeToggle component for
 *     interactive switching after hydration.
 */

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme';

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined')
    return 'system';
  return (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'system';
}

export function setStoredTheme(theme: Theme): void {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined')
    return;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  root.classList.toggle('dark', isDark);
}

/**
 * Initialize theme on page load — call once from the inline <script>.
 * Uses the same logic as applyTheme() but is self-contained for the
 * blocking <script> in <head>, which runs before any module loads.
 */
export function themeInitScript(): string {
  return `
(function() {
  var theme = localStorage.getItem('theme') || 'system';
  var dark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (dark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
})();
`.trim();
}
