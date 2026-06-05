'use client';

import { useState } from 'react';
import { useT } from './LanguageProvider';

// Program data + pricing ported verbatim from the mockup's <script>.
// TODO: replace placeholder fees/targets with real program pricing.
interface SizeSpec {
  fee: number;
  was: number;
  target: string;
  dd: string;
  daily: string;
}
interface Program {
  sizes: Record<string, SizeSpec>;
}

const DATA: Record<string, Program> = {
  '1step': {
    sizes: {
      '5K': { fee: 49, was: 59, target: '8%', dd: '10%', daily: '5%' },
      '25K': { fee: 189, was: 229, target: '8%', dd: '10%', daily: '5%' },
      '50K': { fee: 289, was: 349, target: '8%', dd: '10%', daily: '5%' },
      '100K': { fee: 489, was: 540, target: '8%', dd: '10%', daily: '5%' },
      '200K': { fee: 889, was: 999, target: '8%', dd: '10%', daily: '5%' },
      '500K': { fee: 1899, was: 2199, target: '8%', dd: '10%', daily: '5%' },
    },
  },
  '2step': {
    sizes: {
      '5K': { fee: 39, was: 49, target: '8% / 5%', dd: '12%', daily: '5%' },
      '25K': { fee: 149, was: 189, target: '8% / 5%', dd: '12%', daily: '5%' },
      '50K': { fee: 229, was: 289, target: '8% / 5%', dd: '12%', daily: '5%' },
      '100K': { fee: 389, was: 449, target: '8% / 5%', dd: '12%', daily: '5%' },
      '200K': { fee: 699, was: 799, target: '8% / 5%', dd: '12%', daily: '5%' },
      '500K': { fee: 1499, was: 1799, target: '8% / 5%', dd: '12%', daily: '5%' },
    },
  },
  instant: {
    sizes: {
      '5K': { fee: 199, was: 249, target: 'None', dd: '6%', daily: '4%' },
      '25K': { fee: 699, was: 849, target: 'None', dd: '6%', daily: '4%' },
      '50K': { fee: 1199, was: 1399, target: 'None', dd: '6%', daily: '4%' },
      '100K': { fee: 1999, was: 2399, target: 'None', dd: '6%', daily: '4%' },
      '200K': { fee: 3499, was: 3999, target: 'None', dd: '6%', daily: '4%' },
      '500K': { fee: 7999, was: 8999, target: 'None', dd: '6%', daily: '4%' },
    },
  },
};

const TAB_IDS = ['1step', '2step', 'instant'] as const;

export default function ProgramsConfigurator() {
  const t = useT();
  const [tab, setTab] = useState<string>('1step');
  const [size, setSize] = useState('100K');

  const program = DATA[tab];
  const sizes = Object.keys(program.sizes);
  const activeSize = sizes.includes(size) ? size : sizes[0];
  const d = program.sizes[activeSize];
  const target = d.target === 'None' ? t.programs.none : d.target;

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
              {sizes.map((s) => (
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
              <div className="r">
                <span className="k">{t.programs.spec.target}</span>
                <span className="v">{target}</span>
              </div>
              <div className="r">
                <span className="k">{t.programs.spec.dd}</span>
                <span className="v">{d.dd}</span>
              </div>
              <div className="r">
                <span className="k">{t.programs.spec.daily}</span>
                <span className="v">{d.daily}</span>
              </div>
              <div className="r">
                <span className="k">{t.programs.spec.split}</span>
                <span className="v ok">100%</span>
              </div>
              <div className="r">
                <span className="k">{t.programs.spec.minDays}</span>
                <span className="v ok">{t.programs.none}</span>
              </div>
              <div className="r">
                <span className="k">{t.programs.spec.timeLimit}</span>
                <span className="v ok">{t.programs.unlimited}</span>
              </div>
              <div className="r">
                <span className="k">{t.programs.spec.news}</span>
                <span className="v ok">{t.programs.allowed}</span>
              </div>
              <div className="r">
                <span className="k">{t.programs.spec.payouts}</span>
                <span className="v">{t.programs.cycles4}</span>
              </div>
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
                ${d.was}
              </span>
              <div className="now" id="buyNow">
                <span className="gt">${d.fee}</span>
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
