'use client';

import { useT } from './LanguageProvider';

export default function RevenueCycle() {
  const t = useT();
  return (
    <section className="sec" id="rcm">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.rcm.idx}</span>
            <h2 className="h2">
              {t.rcm.title_a} <span className="gt">{t.rcm.title_b}</span>
            </h2>
          </div>
          <p>{t.rcm.sub}</p>
        </div>
        <div className="rcm-grid reveal">
          {t.rcm.includes.map((item, i) => (
            <div className="rcm-item" key={item}>
              <span className="rcm-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="rcm-closing reveal">{t.rcm.closing}</p>
      </div>
    </section>
  );
}
