'use client';

import FaqList from './FaqList';
import { useT } from './LanguageProvider';

export default function FaqPageContent() {
  const t = useT();

  return (
    <section className="sec band">
      <div className="wrap" style={{ maxWidth: 840 }}>
        <FaqList items={t.faq.items} defaultOpen={0} />
      </div>
    </section>
  );
}
