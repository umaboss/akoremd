'use client';

import { useEffect, useRef, useState } from 'react';
import { useT } from './LanguageProvider';

interface Settlement {
  flag: string;
  name: string;
  country: string;
  amt: string;
  time: string;
  net: string;
}

// TODO: replace with the real payment-posting feed (practice + payer + amount).
// `country` is repurposed as the paying insurer; `net` as the remittance method.
const SETTLEMENTS: Settlement[] = [
  { flag: '❤️', name: 'Cardiology Group', country: 'Medicare', amt: '$12,140', time: '8m', net: 'EFT / ERA' },
  { flag: '🦴', name: 'Orthopedic Clinic', country: 'Aetna', amt: '$8,680', time: '14m', net: 'EFT / ERA' },
  { flag: '🩺', name: 'Internal Medicine', country: 'BCBS', amt: '$4,499', time: '3h', net: 'Check / EOB' },
  { flag: '🧒', name: 'Pediatrics Assoc.', country: 'Medicaid', amt: '$3,205', time: '4h', net: 'EFT / ERA' },
  { flag: '🧴', name: 'Dermatology Clinic', country: 'Cigna', amt: '$2,940', time: '4h', net: 'EFT / ERA' },
  { flag: '🧠', name: 'Neurology Assoc.', country: 'UnitedHealthcare', amt: '$9,310', time: '6h', net: 'EFT / ERA' },
  { flag: '🤰', name: 'OB-GYN Practice', country: 'Humana', amt: '$5,020', time: '8h', net: 'Check / EOB' },
  { flag: '🚑', name: 'Urgent Care', country: 'Aetna', amt: '$2,710', time: '14h', net: 'EFT / ERA' },
];

export default function LiveRewards() {
  // `active` drives the left card visibility + scroll pause; `last` keeps the card
  // filled while it fades out after the pointer leaves a row.
  const t = useT();
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
            <span className="idx">{t.live.idx}</span>
            <h2 className="h2">
              {t.live.title_a} <span className="gt">{t.live.title_b}</span>
            </h2>
          </div>
          <p>{t.live.sub}</p>
        </div>

        <div className="rewards reveal">
          <div className="rewards-lead">
            <span className="rewards-tag">
              <span className="lr-dot" /> {t.live.tag}
            </span>
            <div className="rewards-total gt">$48.6M</div>
            <p className="rewards-cap">{t.live.total}</p>

            <div className={`reward-feature${active ? ' is-on' : ''}`} aria-hidden={!active}>
              <div className="rf-top">
                <span className="rf-flag">{card.flag}</span> {card.country.toUpperCase()}
              </div>
              <div className="rf-name">{card.name}</div>
              <div className="rf-amt">{card.amt}</div>
              <div className="rf-meta">
                {card.time} {t.live.ago} · {card.net}
              </div>
              <a href="#rewards" className="btn btn-p" data-magnetic style={{ marginTop: 22 }}>
                {t.live.proof}
              </a>
            </div>
          </div>

          <div className="rewards-list">
            <div className="rl-head">
              <span>{t.live.recent}</span>
              <a href="#rewards">{t.live.viewRewards}</a>
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
            <div className="rl-foot">{t.live.onchain}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
