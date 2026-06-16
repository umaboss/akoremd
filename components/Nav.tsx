'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { useT } from './LanguageProvider';

const NAV_LINKS = [
  { href: '/features', key: 'features' as const },
  { href: '/about', key: 'about' as const },
  { href: '/services', key: 'services' as const },
  { href: '/how-it-works', key: 'how' as const },
  { href: '/faq', key: 'faq' as const },
];

export default function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="hdr" className={scrolled ? 'scrolled' : undefined}>
      <div className="wrap">
        <nav className="bar" aria-label="Main navigation">
          <a href="/" className="logo" onClick={closeMenu}>
            <Logo />
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {t.nav[link.key]}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <a href="/contact" className="btn btn-p" data-magnetic>
              {t.nav.buy}
            </a>
          </div>
          <button
            type="button"
            className={`menu-btn${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-btn-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </nav>
      </div>

      <div
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
        id="mobile-nav"
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        />
        <div className="mobile-nav-panel">
          <div className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {t.nav[link.key]}
              </a>
            ))}
          </div>
          <a href="/contact" className="btn btn-p btn-lg mobile-nav-cta" onClick={closeMenu}>
            {t.nav.buy}
          </a>
        </div>
      </div>
    </header>
  );
}
