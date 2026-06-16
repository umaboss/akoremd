import JsonLd from './JsonLd';
import { absoluteUrl, SITE_NAME, SITE_TAGLINE, DEFAULT_DESCRIPTION } from '@/lib/seo';

export default function SiteJsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${absoluteUrl('/')}#organization`,
    name: SITE_NAME,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/akoremd-logo3.png'),
    image: absoluteUrl('/about/about-hero.jpg'),
    description: DEFAULT_DESCRIPTION,
    email: 'support@akoremd.com',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: [
      'Medical Billing',
      'Revenue Cycle Management',
      'Medical Coding',
      'Claims Processing',
      'Denial Management',
    ],
    knowsAbout: [
      'HIPAA compliance',
      'ICD-10 coding',
      'CPT coding',
      'Healthcare revenue cycle',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    name: SITE_NAME,
    url: absoluteUrl('/'),
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': `${absoluteUrl('/')}#organization` },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${absoluteUrl('/faq')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl('/')}#webpage`,
    url: absoluteUrl('/'),
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    isPartOf: { '@id': `${absoluteUrl('/')}#website` },
    about: { '@id': `${absoluteUrl('/')}#organization` },
    inLanguage: 'en-US',
  };

  return <JsonLd data={[organization, website, webPage]} />;
}
