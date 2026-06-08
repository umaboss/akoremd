'use client';

import { useState } from 'react';
import { useT } from './LanguageProvider';

// Service-plan pricing. Rates are a percentage of monthly collections and step
// down as practice volume grows. `rows` mark which services are included per plan.
// TODO: replace placeholder rates with real, quoted pricing.
type RowToken = 'inc' | 'add';
interface Plan {
  rows: RowToken[]; // aligned to SPEC_KEYS below
  rates: Record<string, { rate: number; was: number }>;
}

// Monthly collections tiers shown as selectable pills.
const SIZES = ['25K', '75K', '150K', '300K', '600K', '900K'];

// Spec rows, in render order, keyed to t.programs.spec.*
const SPEC_KEYS = ['target', 'dd', 'daily', 'split', 'minDays', 'timeLimit', 'news', 'payouts'] as const;

const DATA: Record<string, Plan> = {
  // Full RCM — everything included.
  '1step': {
    rows: ['inc', 'inc', 'inc', 'inc', 'inc', 'inc', 'inc', 'inc'],
    rates: {
      '25K': { rate: 6.0, was: 7.0 },
      '75K': { rate: 5.5, was: 6.5 },
      '150K': { rate: 5.0, was: 6.0 },
      '300K': { rate: 4.5, was: 5.5 },
      '600K': { rate: 4.0, was: 5.0 },
      '900K': { rate: 3.5, was: 4.5 },
    },
  },
  // Billing Only — eligibility & prior auths are add-ons.
  '2step': {
    rows: ['add', 'inc', 'inc', 'inc', 'inc', 'add', 'inc', 'inc'],
    rates: {
      '25K': { rate: 4.5, was: 5.5 },
      '75K': { rate: 4.0, was: 5.0 },
      '150K': { rate: 3.5, was: 4.5 },
      '300K': { rate: 3.2, was: 4.2 },
      '600K': { rate: 2.9, was: 3.9 },
      '900K': { rate: 2.6, was: 3.6 },
    },
  },
  // Front Office — coding, claims, denials & AR are add-ons.
  instant: {
    rows: ['inc', 'add', 'add', 'add', 'add', 'inc', 'inc', 'inc'],
    rates: {
      '25K': { rate: 3.5, was: 4.5 },
      '75K': { rate: 3.2, was: 4.2 },
      '150K': { rate: 3.0, was: 4.0 },
      '300K': { rate: 2.8, was: 3.8 },
      '600K': { rate: 2.5, was: 3.5 },
      '900K': { rate: 2.2, was: 3.2 },
    },
  },
};

const TAB_IDS = ['1step', '2step', 'instant'] as const;

export default function ProgramsConfigurator() {
  const t = useT();
  const [tab, setTab] = useState<string>('1step');
  const [size, setSize] = useState('300K');

  const plan = DATA[tab];
  const activeSize = SIZES.includes(size) ? size : SIZES[0];
  const d = plan.rates[activeSize];

  // Map a row token to its translated label + whether it counts as "on".
  const rowValue = (token: RowToken) => (token === 'inc' ? t.programs.unlimited : t.programs.none);

  return (
    <section className="sec band" id="programs">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.programs.idx}</span>
            <h2 className="h2">
              {t.programs.title_a} <span className="gt">{t.programs.title_b}</span>
            </h2>
          </div>
          <p>{t.programs.sub}</p>
        </div>
        <div className="config">
          <div className="reveal">
            <div className="seg">
              {TAB_IDS.map((id) => (
                <button
                  key={id}
                  className={id === tab ? 'active' : undefined}
                  data-tab={id}
                  onClick={() => setTab(id)}
                >
                  {t.programs.tabs[id]}
                </button>
              ))}
            </div>
            <div className="seg-note" id="segNote">
              {t.programs.notes[tab as (typeof TAB_IDS)[number]]}
            </div>
            <div className="size-track" id="sizeRow">
              {SIZES.map((s) => (
                <button
                  key={s}
                  className={`size-pill ${s === activeSize ? 'active' : ''}`}
                  data-s={s}
                  onClick={() => setSize(s)}
                >
                  ${s}
                </button>
              ))}
            </div>
            <div className="spec-list" id="specList">
              {SPEC_KEYS.map((key, i) => {
                const token = plan.rows[i];
                return (
                  <div className="r" key={key}>
                    <span className="k">{t.programs.spec[key]}</span>
                    <span className={`v${token === 'inc' ? ' ok' : ''}`}>{rowValue(token)}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="buy reveal">
            <div className="cap">{t.programs.balance}</div>
            <div className="acct" id="buyAcct">
              ${activeSize.replace('K', '')}
              <span>K</span>
            </div>
            <div>
              <span className="was" id="buyWas">
                {d.was}%
              </span>
              <div className="now" id="buyNow">
                <span className="gt">{d.rate}%</span>
                <small>{t.programs.oneTime}</small>
              </div>
            </div>
            <div className="refund">{t.programs.refund}</div>
            <a href="#" className="btn btn-p btn-lg" data-magnetic>
              {t.programs.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
