import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/seo';
import { DICT } from '@/lib/i18n';

type FaqJsonLdProps = {
  path?: `/${string}` | '/';
};

export default function FaqJsonLd({ path = '/faq' }: FaqJsonLdProps) {
  const items = DICT.en.faq.items;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
    url: absoluteUrl(path),
  };

  return <JsonLd data={data} />;
}
