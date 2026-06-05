'use client';

import { useT } from './LanguageProvider';

export default function FinalCTA() {
  const t = useT();
  return (
    <section className="final">
      <div className="wrap">
        <h2>
          {t.finalCta.title_a}
          <br />
          {t.finalCta.title_b} <span className="gt">{t.finalCta.title_c}</span>
        </h2>
        <p>{t.finalCta.sub}</p>
        <div className="final-actions">
          <a href="/#programs" className="btn btn-p btn-lg" data-magnetic>
            {t.finalCta.buy}
          </a>
          <a href="/#how" className="btn btn-lg">
            {t.finalCta.how}
          </a>
        </div>
      </div>
    </section>
  );
}
