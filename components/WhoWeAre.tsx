'use client';

import type { CSSProperties, MouseEvent } from 'react';
import { useT } from './LanguageProvider';

const ICONS = [
  <path key="0" d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />,
  <path key="1" d="M3 12h4l3-9 4 18 3-9h4" />,
  <path key="2" d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />,
  <path key="3" d="M21 12a9 9 0 11-6.2-8.6M22 4l-9 9-3-3" />,
];

function trackGlow(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--gx', `${e.clientX - r.left}px`);
  el.style.setProperty('--gy', `${e.clientY - r.top}px`);
}

function resetGlow(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.setProperty('--gx', '50%');
  el.style.setProperty('--gy', '0px');
}

export default function WhoWeAre() {
  const t = useT();
  return (
    <section className="sec who-sec" id="about">
      <div className="who-sec-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.who.idx}</span>
            <h2 className="h2">
              {t.who.title_a} <span className="gt">{t.who.title_b}</span>
            </h2>
          </div>
          <p>{t.who.sub}</p>
        </div>
        <div className="svc-grid who-grid">
          {t.who.cards.map((c, i) => (
            <article
              className="who-card reveal"
              data-tilt
              key={c.h}
              style={{ '--card-i': i } as CSSProperties}
              onMouseMove={trackGlow}
              onMouseLeave={resetGlow}
            >
              <span className="who-card-glow" aria-hidden="true" />
              <span className="who-card-shine" aria-hidden="true" />
              <span className="who-card-line" aria-hidden="true" />
              <span className="who-card-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="who-card-ic">
                <svg viewBox="0 0 24 24">{ICONS[i]}</svg>
              </div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
