'use client';

import { useT } from './LanguageProvider';

const ICONS = [
  <path key="0" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8M20 8v6M23 11h-6" />,
  <path key="1" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />,
  <path key="2" d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />,
];

export default function HowItWorksPageContent() {
  const t = useT();

  return (
    <>
      <section className="sec band how-sec">
        <div className="wrap">
          <div className="shead reveal center">
            <span className="idx">{t.how.eyebrow.toUpperCase()}</span>
            <h2 className="h2">
              {t.how.title} <span className="gt">{t.how.titleAccent}</span>
            </h2>
            <p>{t.how.sub}</p>
          </div>
          <div className="how-timeline reveal">
            <div className="how-track" aria-hidden="true" />
            {t.how.steps.map((step, i) => (
              <article className="how-timeline-step" key={step.title}>
                <div className="how-timeline-node">
                  <span className="how-timeline-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="how-timeline-icon">
                    <svg viewBox="0 0 24 24">{ICONS[i]}</svg>
                  </div>
                </div>
                <div className="how-timeline-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="shead reveal">
            <span className="idx">{t.rcm.idx}</span>
            <h2 className="h2">
              {t.rcm.title_a} <span className="gt">{t.rcm.title_b}</span>
            </h2>
            <p className="text-body">{t.rcm.sub}</p>
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

      <section className="sec band">
        <div className="wrap">
          <div className="shead reveal center">
            <span className="idx">{t.platforms.idx}</span>
            <h2 className="h2">
              {t.platforms.title_a} <span className="gt">{t.platforms.title_b}</span>
            </h2>
            <p>{t.platforms.sub}</p>
          </div>
          <div className="plat-bento plat-bento-8 reveal">
            {t.platforms.tiles.map((tile) => (
              <div className="ptile" key={tile.h}>
                <span className="badge">{tile.h}</span>
                <p className="text-body">{tile.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
