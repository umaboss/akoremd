'use client';

import { useT } from './LanguageProvider';

// TODO: replace with real verified testimonials — names, accounts and payouts are placeholders.
const META = [
  { nm: 'Evgeny M.', size: '$100K', pay: '$36,393' },
  { nm: 'Mac Ting', size: '$200K', pay: '$50,400' },
  { nm: 'Nipong', size: '$50K', pay: '$12,656' },
  { nm: 'Aisha N.', size: '$100K', pay: '$41,210' },
];

export default function Testimonials() {
  const t = useT();
  return (
    <section className="sec" id="reviews">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.testimonials.idx}</span>
            <h2 className="h2">
              {t.testimonials.title_a} <span className="gt">{t.testimonials.title_b}</span>
            </h2>
          </div>
          <p>{t.testimonials.sub}</p>
        </div>
      </div>
      <div className="wrap">
        <div className="hscroll">
          {META.map((m, i) => (
            <div className="hcard rev reveal" key={m.nm}>
              <div className="stars">★★★★★</div>
              <p>{t.testimonials.reviews[i]}</p>
              <div className="who">
                <span className="av" />
                <div>
                  <div className="nm">{m.nm}</div>
                  <div className="l">
                    {m.size} · {t.testimonials.funded}
                  </div>
                </div>
                <span className="pay">{m.pay}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
