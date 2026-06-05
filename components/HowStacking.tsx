'use client';

import { useT } from './LanguageProvider';

const META = [
  { top: 120, n: '01', icon: <path d="M12 2v20M2 12h20" /> },
  { top: 150, n: '02', icon: <path d="M3 12h4l3-9 4 18 3-9h4" /> },
  { top: 180, n: '03', icon: <path d="M3 3v18h18M7 14l4-4 3 3 5-6" /> },
  { top: 210, n: '04', icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" /> },
];

export default function HowStacking() {
  const t = useT();
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.how.idx}</span>
            <h2 className="h2">
              {t.how.title_a} <span className="gt">{t.how.title_b}</span>
            </h2>
          </div>
          <p>{t.how.sub}</p>
        </div>
        <div className="stack" id="stack">
          {META.map((m, i) => (
            <div className="stack-card" key={m.n} style={{ top: m.top }}>
              <div className="n">{m.n}</div>
              <div>
                <h3>{t.how.steps[i].title}</h3>
                <p>{t.how.steps[i].body}</p>
              </div>
              <div className="glyph">
                <svg viewBox="0 0 24 24">{m.icon}</svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
