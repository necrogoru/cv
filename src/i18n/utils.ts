import { ui, defaultLang } from './ui';
import type { AstroCookies } from 'astro';

export const LANG_COOKIE = 'cv-lang';

export type Lang = keyof typeof ui;

function parseAcceptLanguage(header: string | null): Lang | null {
  if (!header) return null;
  const preferred = header
    .split(',')
    .map((part) => part.trim().split(';')[0].split('-')[0].toLowerCase());
  for (const code of preferred) {
    if (code in ui) return code as Lang;
  }
  return null;
}

export function getLang(cookies: AstroCookies, request: Request): Lang {
  const cookieLang = cookies.get(LANG_COOKIE)?.value;
  if (cookieLang && cookieLang in ui) return cookieLang as Lang;
  return parseAcceptLanguage(request.headers.get('accept-language')) ?? defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
