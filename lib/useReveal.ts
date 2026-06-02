'use client';

import { useEffect } from 'react';

/**
 * IntersectionObserver reveal-on-scroll. Adds `.in` to every `.reveal` element,
 * with a small staggered transition-delay among siblings — mirrors the mockup.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            const siblings = Array.from(
              target.parentElement?.querySelectorAll<HTMLElement>('.reveal') ?? []
            );
            target.style.transitionDelay = `${(siblings.indexOf(target) % 6) * 70}ms`;
            target.classList.add('in');
            io.unobserve(target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
