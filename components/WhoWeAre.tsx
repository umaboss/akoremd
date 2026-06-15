'use client';

import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { useT } from './LanguageProvider';
import { HOME_IMAGES } from '@/lib/homeImages';

export default function WhoWeAre() {
  const t = useT();
  return (
    <section className="landing-section who-sec" id="about">
      <div className="who-sec-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="about-split">
          <div className="about-copy">
            <SectionHeader
              eyebrow={t.who.eyebrow}
              title={t.who.title_a}
              titleAccent={t.who.title_b}
              description={t.who.sub}
              center={false}
              showImage={false}
              className="about-section-header"
            />
            <p className="about-text">{t.who.body}</p>
            <ul className="about-highlights">
              {t.who.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="about-foot">{t.who.closing}</p>
          </div>

          <div className="about-visual" data-tilt>
            <div className="about-visual-frame">
              <Image
                src={HOME_IMAGES.whoWeAre}
                alt={t.who.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="about-visual-badge">
              <span className="about-visual-badge-num">RCM</span>
              <span className="about-visual-badge-label">End-to-end support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
