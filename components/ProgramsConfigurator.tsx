'use client';

import { useState } from 'react';

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
  note: string;
  sizes: Record<string, SizeSpec>;
}

const DATA: Record<string, Program> = {
  '1step': {
    note: 'One profit target. Hit it within the drawdown limits — no minimum days, no deadline.',
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
    note: 'Two phases, lower targets and a smaller fee. The patient route to a funded account.',
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
    note: 'Skip the evaluation. Pay once and trade a funded account immediately.',
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

const TABS: { id: string; label: string }[] = [
  { id: '1step', label: '1-Step' },
  { id: '2step', label: '2-Step' },
  { id: 'instant', label: 'Instant' },
];

export default function ProgramsConfigurator() {
  const [tab, setTab] = useState('1step');
  const [size, setSize] = useState('100K');

  const program = DATA[tab];
  const sizes = Object.keys(program.sizes);
  // Keep selected size valid when switching tabs (all tabs share the same keys).
  const activeSize = sizes.includes(size) ? size : sizes[0];
  const d = program.sizes[activeSize];

  return (
    <section className="sec band" id="programs">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 02 — PROGRAMS ]</span>
            <h2 className="h2">
              Configure your <span className="gt">funded account.</span>
            </h2>
          </div>
          <p>Pick a path and a size. The evaluation fee is refunded with your first payout.</p>
        </div>
        <div className="config">
          <div className="reveal">
            <div className="seg">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={t.id === tab ? 'active' : undefined}
                  data-tab={t.id}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="seg-note" id="segNote">
              {program.note}
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
                <span className="k">Profit target</span>
                <span className="v">{d.target}</span>
              </div>
              <div className="r">
                <span className="k">Max drawdown</span>
                <span className="v">{d.dd}</span>
              </div>
              <div className="r">
                <span className="k">Daily loss limit</span>
                <span className="v">{d.daily}</span>
              </div>
              <div className="r">
                <span className="k">Profit split (up to)</span>
                <span className="v ok">100%</span>
              </div>
              <div className="r">
                <span className="k">Min days</span>
                <span className="v ok">None</span>
              </div>
              <div className="r">
                <span className="k">Time limit</span>
                <span className="v ok">Unlimited</span>
              </div>
              <div className="r">
                <span className="k">News &amp; EAs</span>
                <span className="v ok">Allowed</span>
              </div>
              <div className="r">
                <span className="k">Payouts</span>
                <span className="v">4 cycles</span>
              </div>
            </div>
          </div>
          <div className="buy reveal">
            <div className="cap">Account balance</div>
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
                <small> one-time</small>
              </div>
            </div>
            <div className="refund">↻ Fully refundable with first payout</div>
            <a href="#" className="btn btn-p btn-lg" data-magnetic>
              Buy Evaluation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
