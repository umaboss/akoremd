'use client';

import { useGsapScroll } from '@/lib/useGsapScroll';
import { useMagnetic, useTilt } from '@/lib/useMagnetic';
import { useScrollProgress, useSpotlight, useCountUp } from '@/lib/useChrome';

/**
 * Renders the fixed background scrims + JS-driven chrome (scroll bar, spotlight)
 * and wires every page-wide micro-interaction. Mounted once in the root layout.
 */
export default function Effects() {
  useGsapScroll();
  useMagnetic();
  useTilt();
  useScrollProgress();
  useSpotlight();
  useCountUp();

  return (
    <>
      <div id="prog" />
      <div className="mesh" />
      <div className="scrim t" />
      <div className="scrim v" />
      <div id="spot" />
    </>
  );
}
