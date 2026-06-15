import type { ReactNode } from 'react';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="hero landing-section">
      <div className="wrap">
        <span className="eyebrow reveal">
          <span className="dot" />
          {eyebrow}
        </span>
        <h1 className="reveal">{title}</h1>
        {subtitle && (
          <p className="hero-sub reveal" style={{ maxWidth: '720px' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
