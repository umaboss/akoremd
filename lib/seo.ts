import type { Metadata } from 'next';
import { GOOGLE_SITE_VERIFICATION } from '@/lib/analytics';

export const SITE_NAME = 'AkoreMD';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akoremd.com';
export const SITE_TAGLINE = 'Medical Billing & Revenue Cycle Management';
export const DEFAULT_DESCRIPTION =
  'AkoreMD | Trusted U.S. Medical Billing & Revenue Cycle Management Partner for Modern Healthcare Practices';

export const DEFAULT_KEYWORDS = [
  'medical billing',
  'revenue cycle management',
  'RCM services',
  'healthcare billing',
  'claim denial management',
  'HIPAA compliant billing',
  'medical coding',
  'AR follow up',
  'payment posting',
  'healthcare providers',
  'AkoreMD',
];

export const DEFAULT_OG_IMAGE = '/about/about-hero.jpg';

type PageSeo = {
  title: string;
  description: string;
  path: `/${string}` | '/';
  keywords?: string[];
  noIndex?: boolean;
};

export const PAGE_SEO = {
  home: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    path: '/',
    keywords: DEFAULT_KEYWORDS,
  },
  about: {
    title: 'About Us — AkoreMD',
    description:
      'Learn about AkoreMD — our mission to simplify medical billing and provide dependable revenue cycle support for healthcare providers nationwide.',
    path: '/about',
    keywords: ['about AkoreMD', 'medical billing company', 'RCM partner', ...DEFAULT_KEYWORDS],
  },
  features: {
    title: 'Features — AkoreMD',
    description:
      'Why healthcare providers choose AkoreMD — dedicated RCM specialists, accurate billing, faster claims, denial management, and HIPAA-compliant support.',
    path: '/features',
  },
  services: {
    title: 'Medical Billing Services — AkoreMD',
    description:
      'Complete medical billing services — scheduling, eligibility verification, medical coding, claims submission, payment posting, denial management, AR follow-up, credentialing, and more.',
    path: '/services',
    keywords: [
      'medical billing services',
      'claims submission',
      'eligibility verification',
      'credentialing',
      ...DEFAULT_KEYWORDS,
    ],
  },
  howItWorks: {
    title: 'How It Works — AkoreMD',
    description:
      'Learn how AkoreMD manages your full revenue cycle — onboarding, coding, claims, payment posting, denial management, and technology integrations.',
    path: '/how-it-works',
  },
  faq: {
    title: 'FAQ — AkoreMD',
    description:
      'Frequently asked questions about AkoreMD medical billing services, pricing, HIPAA compliance, software integrations, and onboarding.',
    path: '/faq',
  },
  contact: {
    title: 'Contact Us — AkoreMD',
    description:
      'Contact AkoreMD for a free consultation. Discover how our billing experts can help increase collections, reduce denials, and streamline your practice operations.',
    path: '/contact',
    keywords: ['contact medical billing', 'free billing consultation', ...DEFAULT_KEYWORDS],
  },
  terms: {
    title: 'Terms of Use — AkoreMD',
    description:
      'Read the AkoreMD Terms of Use. Understand our scope of medical billing services, compliance and acceptable use, pricing, service policy and HIPAA disclosures.',
    path: '/terms',
  },
  affiliate: {
    title: 'Partner Program — AkoreMD',
    description:
      'Join the AkoreMD Partner Program. Refer practices to our medical billing service and earn a 15% reward on collections, with monthly payouts and real-time tracking.',
    path: '/affiliate',
  },
  rewards: {
    title: 'Results — AkoreMD',
    description:
      'Every payment AkoreMD has collected and posted for its client practices, logged with transparent reporting. No press releases — just results.',
    path: '/rewards',
  },
} satisfies Record<string, PageSeo>;

export type PageSeoKey = keyof typeof PAGE_SEO;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildPageMetadata(key: PageSeoKey): Metadata {
  const page: PageSeo = PAGE_SEO[key];
  const url = absoluteUrl(page.path);
  const ogImage = absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords ?? DEFAULT_KEYWORDS,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    robots: page.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_SEO.home.title,
    template: `%s`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: PAGE_SEO.home.title,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_SEO.home.title,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  robots: { index: true, follow: true },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};
