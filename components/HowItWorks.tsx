'use client';

import SectionHeader from './SectionHeader';
import { useT } from './LanguageProvider';

const ICONS = [
  <path key="0" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8M20 8v6M23 11h-6" />,
  <path key="1" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />,
  <path key="2" d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />,
];

export default function HowItWorks() {
  const t = useT();
  return (
    <section className="landing-section band how-sec" id="how">
      <div className="wrap">
        <SectionHeader
          eyebrow={t.how.eyebrow}
          title={t.how.title}
          titleAccent={t.how.titleAccent}
          description={t.how.sub}
        />

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
  );
}
