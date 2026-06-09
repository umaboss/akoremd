'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import { useT } from './LanguageProvider';

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.maxHeight = open ? `${el.scrollHeight}px` : '';
  }, [open, a]);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        {q} <span className="pm">+</span>
      </button>
      <div className="faq-a" ref={ref}>
        <div className="text-body">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="landing-section" id="faq">
      <div className="wrap">
        <SectionHeader
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          titleAccent={t.faq.titleAccent}
          description={t.faq.sub}
        />
        <div className="faq-landing reveal">
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
