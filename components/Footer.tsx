'use client';

import AppLink from './AppLink';
import Logo from './Logo';
import { useT } from './LanguageProvider';

type SocialName = 'LinkedIn' | 'Twitter' | 'Facebook';

function SocialIcon({ name }: { name: SocialName }) {
  switch (name) {
    case 'LinkedIn':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="foot-social-icon">
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"
          />
        </svg>
      );
    case 'Twitter':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="foot-social-icon">
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      );
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="foot-social-icon">
          <path
            fill="currentColor"
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

export default function Footer() {
  const t = useT();
  return (
    <footer>
      <div className="wrap">
        <div className="news reveal">
          <div>
            <h4>{t.footer.newsH}</h4>
            <p className="text-sm">{t.footer.newsP}</p>
          </div>
          <div className="form">
            <input type="email" placeholder={t.footer.emailPlaceholder} aria-label="email" />
            <a href="#" className="btn btn-p" data-magnetic>
              {t.footer.subscribe}
            </a>
          </div>
        </div>
        <div className="foot-grid">
          <div className="foot-brand">
            <AppLink href="/" className="logo">
              <Logo />
            </AppLink>
            <p className="text-sm">{t.footer.brandP}</p>
            <div className="foot-social">
              {t.footer.social.map((name) => (
                <a href="#" key={name} className="foot-social-link" aria-label={name}>
                  <SocialIcon name={name} />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="foot-col">
            <h5>{t.footer.platform}</h5>
            <AppLink href="/features">{t.footer.programs}</AppLink>
            <AppLink href="/services">{t.nav.services}</AppLink>
            <AppLink href="/rewards">{t.footer.results}</AppLink>
            <AppLink href="/how-it-works">{t.footer.howItWorks}</AppLink>
          </div>
          <div className="foot-col">
            <h5>{t.footer.company}</h5>
            <AppLink href="/about">{t.footer.about}</AppLink>
            <AppLink href="/contact">{t.footer.contact}</AppLink>
            <AppLink href="/faq">{t.footer.platforms}</AppLink>
            <AppLink href="/contact">{t.footer.community}</AppLink>
          </div>
          <div className="foot-col">
            <h5>{t.footer.legal}</h5>
            <AppLink href="/terms">{t.footer.termsOfUse}</AppLink>
            <AppLink href="/terms#risk">{t.footer.privacy}</AppLink>
            <AppLink href="/terms#risk">{t.footer.risk}</AppLink>
            <AppLink href="/terms#refund">{t.footer.refund}</AppLink>
          </div>
        </div>
        <div className="foot-compliance">
          <div className="foot-compliance-head">
            <span className="foot-compliance-badge" aria-hidden="true">
              HIPAA
            </span>
            <h6>{t.footer.riskTitle}</h6>
          </div>
          <div className="foot-compliance-body">
            {t.footer.disclaimer.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="foot-bot">
          <span>{t.footer.rights}</span>
          <a href="https://akoremd.com" className="foot-domain">
            akoremd.com
          </a>
        </div>
      </div>
    </footer>
  );
}
