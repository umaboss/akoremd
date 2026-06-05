'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { DICT } from '@/lib/i18n';

export type Lang = 'en' | 'ar' | 'hi';

export const LANGS: { code: Lang; label: string; flag: string; native: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧', native: 'English' },
  { code: 'ar', label: 'AR', flag: '🇸🇦', native: 'العربية' },
  { code: 'hi', label: 'HI', flag: '🇮🇳', native: 'हिन्दी' },
];

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default English for stable SSR markup; restored from localStorage on mount.
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'ar' || saved === 'hi') setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {
      /* ignore */
    }
  }, []);

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';

  // Mirror onto <html> so the whole document flips direction + swaps fonts (CSS),
  // and onto <body class="rtl"> for any RTL-specific tweaks.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.classList.toggle('rtl', dir === 'rtl');
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}

/** Active language's translation slice. */
export function useT() {
  const { lang } = useLang();
  return DICT[lang];
}

/** Pick the active language's strings from an {en, ar, hi} record. */
export function pick<T>(lang: Lang, table: Record<Lang, T>): T {
  return table[lang];
}
