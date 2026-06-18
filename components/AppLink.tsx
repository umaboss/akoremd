'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';

type AppLinkProps = ComponentProps<typeof Link>;

/** Internal navigation — client-side route change with smooth scroll handled globally. */
export default function AppLink({ scroll = false, ...props }: AppLinkProps) {
  return <Link scroll={scroll} {...props} />;
}
