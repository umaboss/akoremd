'use client';

import { useT } from './LanguageProvider';

export default function FinalCTA() {
  const t = useT();
  return (
    <section className="final landing-section">
      <div className="wrap">
        <h2 className="h2 reveal">
          {t.finalCta.title_a} {t.finalCta.title_b}{' '}
          <span className="gt">{t.finalCta.title_c}</span>
        </h2>
        <p className="text-body">{t.finalCta.sub}</p>
        <div className="final-actions">
          <a href="/contact" className="btn btn-p btn-lg" data-magnetic>
            {t.finalCta.buy}
          </a>
          <a href="/#services" className="btn btn-lg">
            {t.finalCta.how}
          </a>
        </div>
      </div>
    </section>
  );
}
