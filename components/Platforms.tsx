'use client';

import { useT } from './LanguageProvider';

const META = [
  { cls: 'a', badge: 'KAREO / ADVANCEDMD' },
  { cls: 'b', badge: 'ATHENAHEALTH' },
  { cls: 'c', badge: 'eCW / NEXTGEN' },
  { cls: 'd', badge: '⚡ DRCHRONO' },
  { cls: 'e', badge: '🔗 OFFICE ALLY' },
  { cls: 'f', badge: '✓ ANY SYSTEM' },
];

export default function Platforms() {
  const t = useT();
  return (
    <section className="sec" id="platforms">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.platforms.idx}</span>
            <h2 className="h2">
              {t.platforms.title_a} <span className="gt">{t.platforms.title_b}</span>
            </h2>
          </div>
          <p>{t.platforms.sub}</p>
        </div>
        <div className="plat-bento">
          {META.map((m, i) => (
            <div className={`ptile ${m.cls} reveal`} key={m.cls} data-tilt>
              <span className="badge">{m.badge}</span>
              <h4>{t.platforms.tiles[i].h}</h4>
              <p>{t.platforms.tiles[i].p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
