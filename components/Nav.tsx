'use client';

import { useEffect, useState } from 'react';
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
