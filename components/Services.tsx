'use client';

import { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import { useT } from './LanguageProvider';

type ServiceGroup = 'front' | 'billing' | 'recovery' | 'enrollment';

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="svc-check-list">
      {items.map((item) => (
        <li key={item}>
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  const t = useT();
  const [filter, setFilter] = useState<ServiceGroup>('front');
  const [active, setActive] = useState(0);

  const categories = useMemo(
    () =>
      [
        { id: 'front' as const, label: t.services.categories.front },
        { id: 'billing' as const, label: t.services.categories.billing },
        { id: 'recovery' as const, label: t.services.categories.recovery },
        { id: 'enrollment' as const, label: t.services.categories.enrollment },
      ],
    [t.services],
  );

  const filtered = useMemo(() => {
    const items = t.services.items.map((svc, index) => ({ ...svc, index }));
    return items.filter((svc) => svc.group === filter);
  }, [filter, t.services.items]);

  const selectedIndex = filtered.findIndex((svc) => svc.index === active);
  const displayIndex = selectedIndex >= 0 ? selectedIndex : 0;
  const activeInFilter = filtered[displayIndex] ?? filtered[0];
  const detail = activeInFilter ? t.services.items[activeInFilter.index] : t.services.items[0];

  const pickFilter = (id: ServiceGroup) => {
    setFilter(id);
    const first = t.services.items.findIndex((svc) => svc.group === id);
    if (first >= 0) setActive(first);
  };

  return (
    <section className="landing-section band services-sec" id="services">
      <div className="wrap">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title_a}
          titleAccent={t.services.title_b}
          description={t.services.sub}
        />

        <div className="services-shell reveal">
          <aside className="services-sidebar">
            <div className="services-tabs" role="tablist" aria-label="Service categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat.id}
                  className={`services-tab${filter === cat.id ? ' on' : ''}`}
                  onClick={() => pickFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <ul className="services-menu" role="list">
              {filtered.map((svc, i) => (
                <li key={svc.title}>
                  <button
                    type="button"
                    className={`services-menu-item${activeInFilter?.index === svc.index ? ' on' : ''}`}
                    onClick={() => setActive(svc.index)}
                  >
                    <span className="services-menu-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="services-menu-text">
                      <strong>{svc.title}</strong>
                      <small>{svc.tagline}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {detail && (
            <article className="services-panel" key={detail.title}>
              <div className="services-panel-head">
                <span className="services-panel-tag">
                  {t.services.categories[detail.group as ServiceGroup]}
                </span>
                <h3>{detail.title}</h3>
                <p className="text-body">{detail.intro}</p>
              </div>

              <div className="services-panel-cols">
                <div className="services-panel-col">
                  <h4>{t.services.includesLabel}</h4>
                  <CheckList items={detail.includes} />
                </div>
                <div className="services-panel-col">
                  <h4>{t.services.benefitsLabel}</h4>
                  <CheckList items={detail.benefits} />
                </div>
              </div>

              {'common' in detail && detail.common && (
                <div className="services-panel-common">
                  <h4>{t.services.commonLabel}</h4>
                  <div className="services-common-pills">
                    {detail.common.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
