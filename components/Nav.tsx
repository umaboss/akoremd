'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { useT } from './LanguageProvider';

function LogoMark() {
  return (
    <svg className="mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        className="lkp"
        d="M14 20a6 6 0 016-6h0a6 6 0 016 6m0 0a6 6 0 01-6 6h0a6 6 0 01-6-6"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        className="lkp"
        cx="20"
        cy="20"
        r="17"
        strokeWidth="2.4"
        strokeDasharray="4 5"
        opacity=".5"
        fill="none"
      />
    </svg>
  );
}

export default function Nav() {
  const { toggleTheme } = useTheme();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="hdr" className={scrolled ? 'scrolled' : undefined}>
      <div className="wrap">
        <nav className="bar" aria-label="Main navigation">
          <a href="/" className="logo">
            <LogoMark />
            Akore<b>MD</b>
          </a>
          <div className="nav-links">
            <a href="/#features">{t.nav.features}</a>
            <a href="/#about">{t.nav.about}</a>
            <a href="/#services">{t.nav.services}</a>
            <a href="/#how">{t.nav.how}</a>
            <a href="/#faq">{t.nav.faq}</a>
          </div>
          <div className="nav-cta">
            <button className="theme-tg" id="themeTg" aria-label="Toggle theme" onClick={toggleTheme}>
              <svg className="sun" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
              <svg className="moon" viewBox="0 0 24 24">
                <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
              </svg>
            </button>
            <a href="/contact" className="btn btn-p" data-magnetic>
              {t.nav.buy}
            </a>
          </div>
          <button className="menu-btn" aria-label="Open menu">
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
}
