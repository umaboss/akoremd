'use client';

import dynamic from 'next/dynamic';

// ssr:false must live inside a Client Component in the App Router — loading the
// globe lazily on the client avoids `window is not defined` during prerender.
const GlobeBackground = dynamic(() => import('./GlobeBackground'), { ssr: false });

export default function GlobeMount() {
  return <GlobeBackground />;
}
