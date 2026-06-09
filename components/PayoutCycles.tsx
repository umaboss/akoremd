'use client';

import { Fragment, useState, type CSSProperties } from 'react';
import SectionHeader from './SectionHeader';
import { useT } from './LanguageProvider';

const Check = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const ORBIT_ICONS = [
  <path key="0" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  <path key="1" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  <path key="2" d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />,
  <path key="3" d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />,
];

const ORBIT_ANGLES = [0, 90, 180, 270];

function rich(s: string) {
  return s.split('**').map((part, i) =>
    i % 2 === 1 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>,
  );
}

export default function PayoutCycles() {
  const t = useT();
  const [active, setActive] = useState<number | null>(null);
  const cards = t.payouts.cards;
  const bestIdx = cards.length - 1;

  return (
    <section className="landing-section orbit-sec" id="payouts">
      <div className="wrap">
        <SectionHeader
          eyebrow={t.payouts.eyebrow}
          title={t.payouts.title_a}
          titleAccent={t.payouts.title_b}
          description={t.payouts.sub}
        />

        <div className={`orbit-stage${active !== null ? ' has-active' : ''}`}>
          <div className="orbit-ring orbit-ring-1" aria-hidden="true" />
          <div className="orbit-ring orbit-ring-2" aria-hidden="true" />
          <span className="orbit-traveler" aria-hidden="true" />

          <div className="orbit-core">
            {active === null ? (
              <span className="orbit-dot" aria-hidden="true">
                <span className="orbit-dot-pulse" />
              </span>
            ) : (
              <article className="orbit-detail-card">
                {active === bestIdx && (
                  <span className="orbit-detail-badge">{t.payouts.maxSplit}</span>
                )}
                <span className="orbit-detail-cn">{cards[active].cn}</span>
                <div className="orbit-detail-split">
                  {cards[active].stat}
                  <small>{t.payouts.split}</small>
                </div>
                <ul>
                  {cards[active].items.map((item, j) => (
                    <li key={j}>
                      <Check />
                      {rich(item)}
                    </li>
                  ))}
                </ul>
              </article>
            )}
            {active === null && <p className="orbit-hint">{t.payouts.hint}</p>}
          </div>

          <div className="orbit-icons">
            {cards.map((c, i) => (
              <button
                type="button"
                key={c.cn}
                className={`orbit-icon${active === i ? ' is-active' : ''}${active !== null && active !== i ? ' is-dim' : ''}`}
                style={{ '--orbit-angle': `${ORBIT_ANGLES[i]}deg` } as CSSProperties}
                aria-label={c.cn}
                aria-pressed={active === i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="orbit-icon-inner">
                  <span className="orbit-icon-face">
                    <svg viewBox="0 0 24 24">{ORBIT_ICONS[i]}</svg>
                  </span>
                  <span className="orbit-icon-label">{c.stat}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
