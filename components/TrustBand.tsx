'use client';

// TODO: replace with real verified figures (paid-to-traders, funded accounts,
// countries, Trustpilot score). Numbers below are illustrative placeholders.
import { useT } from './LanguageProvider';

export default function TrustBand() {
  const t = useT();
  return (
    <div className="trust">
      <div className="wrap">
        <div className="st reveal">
          <div className="v">
            <span className="u">$</span>
            <span data-count="0" data-suffix="M+">
              0
            </span>
          </div>
          <div className="k">{t.trust.paid}</div>
        </div>
        <div className="st reveal">
          <div className="v">
            <span data-count="0" data-suffix="K+">
              0
            </span>
          </div>
          <div className="k">{t.trust.funded}</div>
        </div>
        <div className="st reveal">
          <div className="v">
            <span data-count="0" data-suffix="+">
              0
            </span>
          </div>
          <div className="k">{t.trust.countries}</div>
        </div>
        <div className="st reveal">
          <div className="v">0.0</div>
          <div className="tp">
            <span className="stars">★★★★★</span>
            <span className="tx">{t.trust.trustpilot}</span>
          </div>
          <div className="k">{t.trust.reviews}</div>
        </div>
      </div>
    </div>
  );
}
