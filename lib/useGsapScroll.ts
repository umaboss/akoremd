'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function showRevealsInstantly() {
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    el.classList.add('in');
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

/**
 * GSAP ScrollTrigger scroll animations for `.reveal` blocks and key landing sections.
 */
export function useGsapScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showRevealsInstantly();
      return;
    }

    let active = true;
    let ctx: { revert: () => void } | undefined;

    async function init() {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      if (!active) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        ScrollTrigger.batch('.reveal', {
          start: 'top 88%',
          once: true,
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, y: 36 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                overwrite: 'auto',
              },
            );
          },
        });

        gsap.utils.toArray<HTMLElement>('.about-split').forEach((split) => {
          const copy = split.querySelector<HTMLElement>('.about-copy');
          const visual = split.querySelector<HTMLElement>('.about-visual');
          if (!copy || !visual) return;

          gsap.set([copy, visual], { opacity: 0 });

          const tween = gsap.timeline({
            scrollTrigger: {
              trigger: split,
              start: 'top 82%',
              once: true,
            },
          });

          tween
            .fromTo(copy, { opacity: 0, x: -48 }, { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out' })
            .fromTo(
              visual,
              { opacity: 0, x: 48, scale: 0.96 },
              { opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'power3.out' },
              '-=0.55',
            );
        });
      });

      ScrollTrigger.refresh();
    }

    init();

    return () => {
      active = false;
      ctx?.revert();
    };
  }, [pathname]);
}
