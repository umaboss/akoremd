'use client';

import Logo from './Logo';
import { useT } from './LanguageProvider';

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
            <a href="/" className="logo">
              <Logo />
            </a>
            <p className="text-sm">{t.footer.brandP}</p>
            <div className="foot-social">
              {t.footer.social.map((name) => (
                <a href="#" key={name} aria-label={name}>
                  {name}
                </a>
              ))}
            </div>
          </div>
          <div className="foot-col">
            <h5>{t.footer.platform}</h5>
            <a href="/features">{t.footer.programs}</a>
            <a href="/services">{t.nav.services}</a>
            <a href="/rewards">{t.footer.results}</a>
            <a href="/how-it-works">{t.footer.howItWorks}</a>
          </div>
          <div className="foot-col">
            <h5>{t.footer.company}</h5>
            <a href="/about">{t.footer.about}</a>
            <a href="/contact">{t.footer.contact}</a>
            <a href="/faq">{t.footer.platforms}</a>
            <a href="/contact">{t.footer.community}</a>
          </div>
          <div className="foot-col">
            <h5>{t.footer.legal}</h5>
            <a href="/terms">{t.footer.termsOfUse}</a>
            <a href="/terms#risk">{t.footer.privacy}</a>
            <a href="/terms#risk">{t.footer.risk}</a>
            <a href="/terms#refund">{t.footer.refund}</a>
          </div>
        </div>
        <div className="disclaimer">
          <strong style={{ color: 'var(--dim)' }}>{t.footer.riskTitle}</strong>
          <span className="text-sm">{t.footer.disclaimer}</span>
        </div>
        <div className="foot-bot">
          <span className="text-sm">{t.footer.rights}</span>
          <span className="text-sm">akoremd.com</span>
        </div>
      </div>
    </footer>
  );
}
