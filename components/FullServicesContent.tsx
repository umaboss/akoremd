'use client';

import Image from 'next/image';
import { useT } from './LanguageProvider';
import { getServiceImagePath } from '@/lib/serviceImages';

type ServiceGroup = 'front' | 'billing' | 'recovery' | 'enrollment';

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function FullServicesContent() {
  const t = useT();

  const groups: { id: ServiceGroup; label: string }[] = [
    { id: 'front', label: t.services.categories.front },
    { id: 'billing', label: t.services.categories.billing },
    { id: 'recovery', label: t.services.categories.recovery },
    { id: 'enrollment', label: t.services.categories.enrollment },
  ];

  return (
    <div className="service-detail-page">
      {groups.map((group) => {
        const items = t.services.items
          .map((svc, index) => ({ ...svc, index }))
          .filter((svc) => svc.group === group.id);

        if (items.length === 0) return null;

        return (
          <section className="sec band" key={group.id} id={group.id}>
            <div className="wrap">
              <div className="shead reveal">
                <span className="idx">{group.label.toUpperCase()}</span>
                <h2 className="h2">{group.label}</h2>
              </div>

              <div className="service-detail-stack">
                {items.map((svc) => (
                  <article className="service-detail-block reveal" key={svc.title} id={slugify(svc.title)}>
                    <div className="service-detail-head">
                      <div className="service-detail-copy">
                        <span className="services-panel-tag">{group.label}</span>
                        <h3>{svc.title}</h3>
                        <p className="text-body">{svc.intro}</p>
                        <p className="text-sm" style={{ marginTop: 8 }}>{svc.tagline}</p>
                      </div>
                      <div className="services-panel-image">
                        <Image
                          src={getServiceImagePath(svc.index)}
                          alt={svc.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 280px"
                          className="services-panel-photo"
                        />
                      </div>
                    </div>

                    <div className="services-panel-cols">
                      <div className="services-panel-col">
                        <h4>{t.services.includesLabel}</h4>
                        <ul className="svc-check-list">
                          {svc.includes.map((item) => (
                            <li key={item}>
                              <Check />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="services-panel-col">
                        <h4>{t.services.benefitsLabel}</h4>
                        <ul className="svc-check-list">
                          {svc.benefits.map((item) => (
                            <li key={item}>
                              <Check />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {'common' in svc && svc.common && (
                      <div className="services-panel-common">
                        <h4>{t.services.commonLabel}</h4>
                        <div className="services-common-pills">
                          {svc.common.map((item) => (
                            <span key={item}>{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
