'use client';

import { useT } from './LanguageProvider';

export default function TrustBand() {
  const t = useT();
  return (
    <section className="trust-band landing-section" aria-label="Trust and social proof">
      <div className="wrap">
        <div className="trust-stats reveal">
          {t.trust.stats.map((stat) => (
            <div className="trust-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="trust-logos reveal" aria-label="Supported platforms">
          {t.trust.logos.map((logo) => (
            <span className="trust-logo" key={logo}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
