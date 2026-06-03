'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  isLight: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Light is the default. No localStorage — pure React state so SSR markup is stable.
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  // Mirror the theme onto <body class="light"> so the ported CSS variables swap.
  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, isLight: theme === 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
