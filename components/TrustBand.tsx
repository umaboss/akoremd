'use client';

import Image from 'next/image';
import { TRUST_LOGOS, type PartnerLogo } from '@/lib/partnerLogos';
import { useT } from './LanguageProvider';

function TrustLogoItem({ partner }: { partner: PartnerLogo }) {
  const isBadge = partner.variant === 'badge';

  return (
    <div className={`trust-logo-item${isBadge ? ' trust-logo-item--badge' : ''}`}>
      {!isBadge ? <span className="trust-logo-name">{partner.name}</span> : null}
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={isBadge ? 220 : 160}
        height={isBadge ? 56 : 44}
        className="trust-logo-img"
      />
    </div>
  );
}

export default function TrustBand() {
  const t = useT();
  const marqueeLogos = [...TRUST_LOGOS, ...TRUST_LOGOS];

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
      </div>
      <div className="trust-marquee-wrap reveal" aria-label="Trusted partners and certifications">
        <div className="trust-marquee">
          <div className="trust-marquee-track">
            {marqueeLogos.map((partner, index) => (
              <TrustLogoItem key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
