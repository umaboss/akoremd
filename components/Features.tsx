'use client';

import SectionHeader from './SectionHeader';
import { useT } from './LanguageProvider';

const ICONS = [
  <path key="0" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8m12 4v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
  <path key="1" d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />,
  <path key="2" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  <path key="3" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  <path key="4" d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />,
  <path key="5" d="M3 3v18h18M7 14l4-4 3 3 5-6" />,
];

export default function Features() {
  const t = useT();
  return (
    <section className="landing-section" id="features">
      <div className="wrap">
        <SectionHeader
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          titleAccent={t.features.titleAccent}
          description={t.features.sub}
        />
        <div className="features-grid">
          {t.features.items.map((item, i) => (
            <article className="card feature-card reveal" key={item.title} data-tilt>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">{ICONS[i]}</svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
