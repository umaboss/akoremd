'use client';

import { Fragment } from 'react';
import { useT } from './LanguageProvider';

const Check = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// Render **bold** segments inside an otherwise plain translated string.
function rich(s: string) {
  return s.split('**').map((part, i) =>
    i % 2 === 1 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>,
  );
}

const SPLITS = ['98%', '95%', '30%', '99%'];

export default function PayoutCycles() {
  const t = useT();
  return (
    <section className="sec band" id="payouts">
      <div className="wrap">
        <div className="shead center reveal">
          <span className="idx">{t.payouts.idx}</span>
          <h2 className="h2">
            {t.payouts.title_a} <span className="gt">{t.payouts.title_b}</span>
          </h2>
          <p>{t.payouts.sub}</p>
        </div>
        <div className="cycles">
          {t.payouts.cards.map((c, i) => {
            const best = i === t.payouts.cards.length - 1;
            return (
              <div className={`cyc reveal${best ? ' best' : ''}`} key={i} data-tilt>
                {best && <div className="badge">{t.payouts.maxSplit}</div>}
                <div className="cn">{c.cn}</div>
                <div className="split">
                  <span>{SPLITS[i]}</span>
                </div>
                <div className="spl-l">{t.payouts.split}</div>
                <ul>
                  {c.items.map((item, j) => (
                    <li key={j}>
                      <Check />
                      {rich(item)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
