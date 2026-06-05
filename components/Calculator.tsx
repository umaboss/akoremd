'use client';

import { useState } from 'react';
import { useT } from './LanguageProvider';

// Calculator data + logic ported verbatim from the mockup's <script>.
const SZ = [5000, 25000, 100000, 200000, 500000];
const SPLITS = [0.6, 0.7, 0.8, 1.0];
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

const FEAT_ICONS = [
  <path key="0" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2" />,
  <path key="1" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
];

export default function Calculator() {
  const t = useT();
  const [acc, setAcc] = useState(2); // index into SZ
  const [ret, setRet] = useState(8); // monthly return %
  const [split, setSplit] = useState(3); // index into SPLITS

  const size = SZ[acc];
  const payout = size * (ret / 100) * SPLITS[split];

  return (
    <section className="sec">
      <div className="wrap">
        <div className="calc-grid">
          <div className="reveal">
            <span className="idx">{t.calc.idx}</span>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              {t.calc.title_a} <span className="gt">{t.calc.title_b}</span>
            </h2>
            <p style={{ color: 'var(--dim)', fontSize: 18, maxWidth: '42ch' }}>{t.calc.sub}</p>
            <div className="cfeat">
              {t.calc.feats.map((f, i) => (
                <div className="f" key={i}>
                  <div className="ic">
                    <svg viewBox="0 0 24 24">{FEAT_ICONS[i]}</svg>
                  </div>
                  <div>
                    <h4>{f.h}</h4>
                    <p>{f.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="calc reveal">
            <div className="crow">
              <div className="top">
                <span className="lbl">{t.calc.accountSize}</span>
                <span className="out" id="accOut">
                  {fmt(size)}
                </span>
              </div>
              <input
                type="range"
                id="accSlider"
                min="0"
                max="4"
                step="1"
                value={acc}
                onChange={(e) => setAcc(+e.target.value)}
              />
            </div>
            <div className="crow">
              <div className="top">
                <span className="lbl">{t.calc.monthlyReturn}</span>
                <span className="out" id="retOut">
                  {ret}%
                </span>
              </div>
              <input
                type="range"
                id="retSlider"
                min="2"
                max="20"
                step="1"
                value={ret}
                onChange={(e) => setRet(+e.target.value)}
              />
            </div>
            <div className="crow">
              <div className="top">
                <span className="lbl">{t.calc.payoutCycle}</span>
                <span className="out" id="splitOut">
                  {t.calc.cycles[split]}
                </span>
              </div>
              <input
                type="range"
                id="splitSlider"
                min="0"
                max="3"
                step="1"
                value={split}
                onChange={(e) => setSplit(+e.target.value)}
              />
            </div>
            <div className="cres">
              <div className="lbl">
                {t.calc.yourPayout}
                <span>{t.calc.payoutHint}</span>
              </div>
              <div className="payout" id="payoutOut">
                {fmt(payout)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
