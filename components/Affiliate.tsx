'use client';

import { useT } from './LanguageProvider';

export default function Affiliate() {
  const t = useT();
  return (
    <section className="sec" id="affiliate">
      <div className="wrap">
        <div className="aff">
          <div className="reveal">
            <span className="idx">{t.affiliate.idx}</span>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              {t.affiliate.title_a} <span className="gt">{t.affiliate.title_b}</span>
            </h2>
            <p style={{ color: 'var(--dim)', fontSize: 18, maxWidth: '44ch', marginBottom: 30 }}>
              {t.affiliate.sub}
            </p>
            <a href="#" className="btn btn-p btn-lg" data-magnetic>
              {t.affiliate.cta}
            </a>
          </div>
          <div className="aff-card reveal" data-tilt>
            <div className="pct">15%</div>
            <div className="pl">{t.affiliate.pct}</div>
            <div className="arow">
              <div>
                <div className="v gt">{t.affiliate.monthly}</div>
                <div className="k">{t.affiliate.payouts}</div>
              </div>
              <div>
                <div className="v gt">{t.affiliate.realtime}</div>
                <div className="k">{t.affiliate.dashboard}</div>
              </div>
              <div>
                <div className="v gt">{t.affiliate.noCap}</div>
                <div className="k">{t.affiliate.earnings}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
