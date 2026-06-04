'use client';

import { useEffect, useRef, useState } from 'react';

interface Settlement {
  flag: string;
  name: string;
  country: string;
  amt: string;
  time: string;
  net: string;
}

// TODO: replace with the real live payout feed (country + amount + tx proof).
const SETTLEMENTS: Settlement[] = [
  { flag: '🇮🇳', name: 'Rashmeet Kaur', country: 'India', amt: '$2,140', time: '8m', net: 'USDT (TRC-20)' },
  { flag: '🇩🇪', name: 'Nik Dolja', country: 'Germany', amt: '$1,680', time: '14m', net: 'Bank transfer' },
  { flag: '🇳🇱', name: 'Jasper Hof', country: 'Netherlands', amt: '$1,499', time: '3h', net: 'USDT (TRC-20)' },
  { flag: '🇮🇳', name: 'Shreyas M V', country: 'India', amt: '$1,205', time: '4h', net: 'USDT (TRC-20)' },
  { flag: '🇵🇰', name: 'Saim Ahmed', country: 'Pakistan', amt: '$940', time: '4h', net: 'USDT (TRC-20)' },
  { flag: '🇲🇾', name: 'Jun Jye Ooi', country: 'Malaysia', amt: '$3,310', time: '6h', net: 'Bank transfer' },
  { flag: '🇵🇰', name: 'Shahyan Zahid', country: 'Pakistan', amt: '$3,020', time: '8h', net: 'USDT (TRC-20)' },
  { flag: '🇵🇰', name: 'Zohaib Sajjad', country: 'Pakistan', amt: '$710', time: '14h', net: 'USDT (TRC-20)' },
];

export default function LiveRewards() {
  // `active` drives the left card visibility + scroll pause; `last` keeps the card
  // filled while it fades out after the pointer leaves a row.
  const [active, setActive] = useState<Settlement | null>(null);
  const [last, setLast] = useState<Settlement>(SETTLEMENTS[2]);
  const card = active ?? last;

  // Continuous upward scroll driven by rAF (robust across reduced-motion quirks).
  // `paused` is a ref so toggling hover never restarts the animation loop.
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  useEffect(() => {
    const SPEED = 32; // px per second
    let raf = 0;
    let offset = 0;
    let prev: number | null = null;
    const tick = (t: number) => {
      if (prev === null) prev = t;
      const dt = (t - prev) / 1000;
      prev = t;
      const track = trackRef.current;
      if (track && !paused.current) {
        const half = track.scrollHeight / 2;
        offset += SPEED * dt;
        if (half > 0 && offset >= half) offset -= half;
        track.style.transform = `translateY(${-offset}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="sec band" id="rewards">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 10 — LIVE REWARDS ]</span>
            <h2 className="h2">
              Verified payouts. <span className="gt">On-chain proof.</span>
            </h2>
          </div>
          <p>Real traders, real withdrawals — every settlement is provable and updated live.</p>
        </div>

        <div className="rewards reveal">
          <div className="rewards-lead">
            <span className="rewards-tag">
              <span className="lr-dot" /> LIVE REWARDS
            </span>
            <div className="rewards-total gt">$5.31M</div>
            <p className="rewards-cap">Total paid to Capital Chain traders — and counting.</p>

            <div className={`reward-feature${active ? ' is-on' : ''}`} aria-hidden={!active}>
              <div className="rf-top">
                <span className="rf-flag">{card.flag}</span> {card.country.toUpperCase()}
              </div>
              <div className="rf-name">{card.name}</div>
              <div className="rf-amt">{card.amt}</div>
              <div className="rf-meta">
                {card.time} ago · {card.net}
              </div>
              <a href="#rewards" className="btn btn-p" data-magnetic style={{ marginTop: 22 }}>
                View proof of payment →
              </a>
            </div>
          </div>

          <div className="rewards-list">
            <div className="rl-head">
              <span>Recent settlements</span>
              <a href="#rewards">View rewards →</a>
            </div>
            <div
              className="rl-viewport"
              onMouseLeave={() => {
                paused.current = false;
                setActive(null);
              }}
            >
              <div className="rl-track" ref={trackRef}>
                {[...SETTLEMENTS, ...SETTLEMENTS].map((s, i) => (
                  <div
                    className="rrow"
                    key={`${s.name}-${i}`}
                    onMouseEnter={() => {
                      paused.current = true;
                      setActive(s);
                      setLast(s);
                    }}
                  >
                    <span className="rf-flag">{s.flag}</span>
                    <div>
                      <div className="rr-name">{s.name}</div>
                      <div className="rr-country">{s.country}</div>
                    </div>
                    <div className="rr-amt">{s.amt}</div>
                    <div className="rr-time">{s.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rl-foot">On-chain proof on every transfer.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
