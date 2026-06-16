import type { MetadataRoute } from 'next';
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#050A14',
    theme_color: '#19E6D6',
    lang: 'en',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
