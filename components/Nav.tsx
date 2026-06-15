'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { useT } from './LanguageProvider';

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
            <Logo />
          </a>
          <div className="nav-links">
            <a href="/features">{t.nav.features}</a>
            <a href="/about">{t.nav.about}</a>
            <a href="/services">{t.nav.services}</a>
            <a href="/how-it-works">{t.nav.how}</a>
            <a href="/faq">{t.nav.faq}</a>
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
