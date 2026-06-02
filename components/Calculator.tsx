'use client';

import { useState } from 'react';

// Calculator data + logic ported verbatim from the mockup's <script>.
const SZ = [5000, 25000, 100000, 200000, 500000];
const CYC = [
  { n: 'Daily · 60%', s: 0.6 },
  { n: 'Friday · 70%', s: 0.7 },
  { n: 'Bi-weekly · 80%', s: 0.8 },
  { n: 'Monthly · 100%', s: 1.0 },
];
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

export default function Calculator() {
  const [acc, setAcc] = useState(2); // index into SZ
  const [ret, setRet] = useState(8); // monthly return %
  const [split, setSplit] = useState(3); // index into CYC

  const size = SZ[acc];
  const cy = CYC[split];
  const payout = size * (ret / 100) * cy.s;

  return (
    <section className="sec">
      <div className="wrap">
        <div className="calc-grid">
          <div className="reveal">
            <span className="idx">[ 05 — CALCULATOR ]</span>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              See your payout <span className="gt">before you trade.</span>
            </h2>
            <p style={{ color: 'var(--dim)', fontSize: 18, maxWidth: '42ch' }}>
              Drag the sliders — account size, monthly return and which payout cycle you&apos;d pick.
              We do the math.
            </p>
            <div className="cfeat">
              <div className="f">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h4>From 1 business day</h4>
                  <p>Bank, card or stablecoin — fastest cycle settles next day.</p>
                </div>
              </div>
              <div className="f">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4>Scaling to $2M</h4>
                  <p>Consistency steps your allocation up automatically.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="calc reveal">
            <div className="crow">
              <div className="top">
                <span className="lbl">Account size</span>
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
                <span className="lbl">Monthly return</span>
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
                <span className="lbl">Payout cycle</span>
                <span className="out" id="splitOut">
                  {cy.n}
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
                Your payout<span>Gross profit × split for the chosen cycle</span>
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
