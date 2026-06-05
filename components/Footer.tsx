'use client';

import { useT } from './LanguageProvider';

function LogoMark() {
  return (
    <svg className="mark" viewBox="0 0 40 40" fill="none">
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

export default function Footer() {
  const t = useT();
  return (
    <footer>
      <div className="wrap">
        <div className="news reveal">
          <div>
            <h4>{t.footer.newsH}</h4>
            <p>{t.footer.newsP}</p>
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
              <LogoMark />
              Capital<b>Chain</b>
            </a>
            <p>{t.footer.brandP}</p>
          </div>
          <div className="foot-col">
            <h5>{t.footer.platform}</h5>
            <a href="/#programs">{t.footer.programs}</a>
            <a href="/#payouts">{t.footer.payouts}</a>
            <a href="/#scaling">{t.footer.scaling}</a>
            <a href="/#platforms">{t.footer.platforms}</a>
          </div>
          <div className="foot-col">
            <h5>{t.footer.company}</h5>
            <a href="/about">{t.footer.about}</a>
            <a href="/affiliate">{t.footer.affiliate}</a>
            <a href="/#community">{t.footer.community}</a>
            <a href="/contact">{t.footer.contact}</a>
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
          {t.footer.disclaimer}
        </div>
        <div className="foot-bot">
          <span>{t.footer.rights}</span>
          <span>capitalchain.co</span>
        </div>
      </div>
    </footer>
  );
}
