'use client';

import { useLayoutEffect, useRef, useState } from 'react';

const ITEMS: { q: string; a: string }[] = [
  {
    q: 'What is a prop firm?',
    a: "A proprietary trading firm supplies its own capital to skilled traders. You prove your edge in an evaluation, then trade the firm's capital and share the profit — without risking a large balance of your own.",
  },
  {
    q: 'How do the payout cycles work?',
    a: 'You choose: Daily (60% split, paid in one business day, up to 25% of balance per request), Pay Friday (70%, every Friday), Bi-weekly (80%, every 10 business days), or Monthly (100%, every 21 business days). Faster access trades a little split for speed.',
  },
  {
    q: 'What exactly am I trading?',
    a: "Evaluation accounts run in a simulated environment that mirrors live market data. Once funded, your performance is allocated against Capital Chain's risk capital under full market conditions.",
  },
  {
    q: 'Is the fee really refundable?',
    a: "Yes. The one-time fee is returned with your first payout after you become funded and complete a withdrawal. It's a deposit on your discipline, not a subscription.",
  },
  {
    q: 'How does scaling to $2M work?',
    a: 'Stay consistent and profitable across payout cycles and your allocation steps up automatically — no new fee and no re-evaluation — up to $2M.',
  },
];

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
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="sec band" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="reveal">
            <span className="idx">[ 12 — FAQ ]</span>
            <h2 className="h2">
              Straight <span className="gt">answers.</span>
            </h2>
            <p style={{ color: 'var(--dim)', marginTop: 14 }}>
              If it isn&apos;t here, our team replies in under an hour.
            </p>
          </div>
          <div className="faq-list reveal">
            {ITEMS.map((it, i) => (
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
