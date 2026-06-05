'use client';

import { useT } from './LanguageProvider';

export default function WhyBento() {
  const t = useT();
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.why.idx}</span>
            <h2 className="h2">
              {t.why.title_a} <span className="gt">{t.why.title_b}</span>
            </h2>
          </div>
          <p>{t.why.sub}</p>
        </div>
        <div className="bento">
          <div className="tile feature big reveal" data-tilt>
            <div className="big-num gt">{t.why.keep.num}</div>
            <h3>{t.why.keep.h}</h3>
            <p>{t.why.keep.p}</p>
          </div>
          <div className="tile sm reveal" data-tilt>
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2" />
              </svg>
            </div>
            <h3>{t.why.support.h}</h3>
            <p>{t.why.support.p}</p>
          </div>
          <div className="tile sm reveal" data-tilt>
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M21 12a9 9 0 11-6.2-8.6M22 4l-9 9-3-3" />
              </svg>
            </div>
            <h3>{t.why.flexible.h}</h3>
            <p>{t.why.flexible.p}</p>
          </div>
          <div className="tile med reveal" data-tilt>
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h4l3-9 4 18 3-9h4" />
              </svg>
            </div>
            <h3>{t.why.raw.h}</h3>
            <p>{t.why.raw.p}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
