'use client';

import { createContext, useContext } from 'react';
import { DICT } from '@/lib/i18n';

interface LanguageContextValue {
  dir: 'ltr';
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <LanguageContext.Provider value={{ dir: 'ltr' }}>{children}</LanguageContext.Provider>;
}

/** Active site content dictionary. */
export function useT() {
  return DICT.en;
}
