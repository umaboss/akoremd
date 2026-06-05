'use client';

import { useT } from './LanguageProvider';

const AMTS = [
  <>$100<span>K</span></>,
  <>$200<span>K</span></>,
  <>$400<span>K</span></>,
  <>$1<span>M</span></>,
  <>$2M</>,
];

export default function ScalingLadder() {
  const t = useT();
  return (
    <section className="sec band" id="scaling">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.scaling.idx}</span>
            <h2 className="h2">
              {t.scaling.title_a} <span className="gt">{t.scaling.title_b}</span>
            </h2>
          </div>
          <p>{t.scaling.sub}</p>
        </div>
        <div className="ladder">
          {t.scaling.rungs.map((lv, i) => {
            const peak = i === t.scaling.rungs.length - 1;
            return (
              <div className={`rung reveal${peak ? ' peak' : ''}`} key={i}>
                <div className="lv">{lv}</div>
                <div className="amt">{AMTS[i]}</div>
              </div>
            );
          })}
        </div>
        <div className="ladder-note">{t.scaling.note}</div>
      </div>
    </section>
  );
}
