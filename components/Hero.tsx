'use client';

import { useT } from './LanguageProvider';

export default function Hero() {
  const t = useT();
  return (
    <section className="hero landing-section">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow reveal">
            <span className="dot" />
            {t.hero.eyebrow}
          </span>
          <h1 className="reveal">
            {t.hero.title_a} <span className="gt">{t.hero.title_traders}</span> {t.hero.title_to}{' '}
            <span className="gt">{t.hero.title_capital}</span>
          </h1>
          <p className="hero-sub reveal">{t.hero.sub}</p>
          <div className="hero-actions reveal">
            <a href="/contact" className="btn btn-p btn-lg" data-magnetic>
              {t.hero.cta}
            </a>
            <a href="/#services" className="btn btn-lg">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="hero-stats reveal">
            {t.hero.stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="trustline reveal">
            <span className="av" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            {t.hero.trust}
          </div>
        </div>
      </div>
    </section>
  );
}
