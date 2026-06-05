'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { useT } from './LanguageProvider';

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.maxHeight = open ? `${el.scrollHeight}px` : '';
  }, [open]);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={onToggle}>
        {q} <span className="pm">+</span>
      </button>
      <div className="faq-a" ref={ref}>
        <div>{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="sec band" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="reveal">
            <span className="idx">{t.faq.idx}</span>
            <h2 className="h2">
              {t.faq.title_a} <span className="gt">{t.faq.title_b}</span>
            </h2>
            <p style={{ color: 'var(--dim)', marginTop: 14 }}>{t.faq.sub}</p>
          </div>
          <div className="faq-list reveal">
            {t.faq.items.map((it, i) => (
              <FaqItem
                key={it.q}
                q={it.q}
                a={it.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
