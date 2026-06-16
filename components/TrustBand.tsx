'use client';

import Image from 'next/image';
import { PARTNER_LOGOS } from '@/lib/partnerLogos';
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
          {PARTNER_LOGOS.map((partner) => (
            <div className="trust-logo-item" key={partner.name}>
              <span className="trust-logo-name">{partner.name}</span>
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={80}
                height={28}
                className="trust-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
