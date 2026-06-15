'use client';

import { useT } from './LanguageProvider';

export default function FeaturesPageContent() {
  const t = useT();

  return (
    <section className="sec band">
      <div className="wrap">
        <ul className="why-grid reveal">
          {t.features.whyChoose.map((item) => (
            <li key={item.title} className="why-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div>
                <strong style={{ display: 'block', marginBottom: 4 }}>{item.title}</strong>
                <span style={{ color: 'var(--dim)', fontSize: 14, lineHeight: 1.5 }}>{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-body reveal" style={{ marginTop: 32, maxWidth: '62ch' }}>
          {t.features.pageClosing}
        </p>
      </div>
    </section>
  );
}
