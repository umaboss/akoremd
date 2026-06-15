'use client';

import SectionHeader from './SectionHeader';
import FaqList from './FaqList';
import { useT } from './LanguageProvider';

export default function FAQ() {
  const t = useT();

  return (
    <section className="landing-section" id="faq">
      <div className="wrap">
        <SectionHeader
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          titleAccent={t.faq.titleAccent}
          description={t.faq.sub}
        />
        <FaqList items={t.faq.items} defaultOpen={0} />
      </div>
    </section>
  );
}
