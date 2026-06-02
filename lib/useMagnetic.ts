'use client';

import { useEffect } from 'react';

const isFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer:fine)').matches;

/** Magnetic pull on [data-magnetic] elements (desktop / fine pointer only). */
export function useMagnetic() {
  useEffect(() => {
    if (!isFinePointer()) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'));
    const cleanups = els.map((b) => {
      const onMove = (e: MouseEvent) => {
        const r = b.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        b.style.transform = `translate(${x * 0.25}px,${y * 0.35}px)`;
      };
      const onLeave = () => {
        b.style.transform = '';
      };
      b.addEventListener('mousemove', onMove);
      b.addEventListener('mouseleave', onLeave);
      return () => {
        b.removeEventListener('mousemove', onMove);
        b.removeEventListener('mouseleave', onLeave);
      };
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);
}

/** 3D tilt on [data-tilt] cards (desktop / fine pointer only). */
export function useTilt() {
  useEffect(() => {
    if (!isFinePointer()) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
    const cleanups = els.map((t) => {
      const onMove = (e: MouseEvent) => {
        const r = t.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        t.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        t.style.transform = '';
      };
      t.addEventListener('mousemove', onMove);
      t.addEventListener('mouseleave', onLeave);
      return () => {
        t.removeEventListener('mousemove', onMove);
        t.removeEventListener('mouseleave', onLeave);
      };
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);
}
