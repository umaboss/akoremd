'use client';

import SectionHeader from './SectionHeader';
import { useT } from './LanguageProvider';

function Stars({ count }: { count: number }) {
  return <span className="testimonial-stars" aria-label={`${count} out of 5 stars`}>{'★'.repeat(count)}</span>;
}

export default function Testimonials() {
  const t = useT();
  return (
    <section className="landing-section band" id="testimonials">
      <div className="wrap">
        <SectionHeader
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          titleAccent={t.testimonials.titleAccent}
          description={t.testimonials.sub}
        />
        <div className="testimonials-grid">
          {t.testimonials.reviews.map((review) => (
            <article className="card testimonial-card reveal" key={review.name}>
              <Stars count={review.rating} />
              <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true" />
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
