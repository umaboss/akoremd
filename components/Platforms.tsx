'use client';

import { useT } from './LanguageProvider';

const META = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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
        <div className="plat-bento plat-bento-8">
          {t.platforms.tiles.map((tile, i) => (
            <div className={`ptile ${META[i % META.length]} reveal`} key={tile.h} data-tilt>
              <h4>{tile.h}</h4>
              <p>{tile.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
