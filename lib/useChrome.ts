'use client';

import { useEffect } from 'react';

/** Top gradient scroll-progress bar (#prog) driven by scroll position. */
export function useScrollProgress() {
  useEffect(() => {
    const prog = document.getElementById('prog');
    if (!prog) return;
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = `${h > 0 ? (y / h) * 100 : 0}%`;
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

/** Cursor spotlight (#spot), desktop / fine pointer only. */
export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const spot = document.getElementById('spot');
    if (!spot) return;
    const onMove = (e: MouseEvent) => {
      spot.style.opacity = '1';
      spot.style.left = `${e.clientX}px`;
      spot.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
}

/** Animated number counters for any [data-count] element (with [data-suffix]). */
export function useCountUp() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / 1300, 1);
            const ez = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * ez) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }),
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
