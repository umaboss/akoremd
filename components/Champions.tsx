'use client';

import { useT } from './LanguageProvider';

// TODO: replace with real leaderboard data — names, flags and amounts are placeholders.
const CHAMPS = [
  { rank: '#01', flag: '🇦🇪', name: 'A. Rahman', size: '$200K', amt: '$96,316' },
  { rank: '#02', flag: '🇩🇪', name: 'B. Schneider', size: '$200K', amt: '$80,517' },
  { rank: '#03', flag: '🇵🇰', name: 'U. Bin Hannan', size: '$100K', amt: '$80,369' },
  { rank: '#04', flag: '🇬🇧', name: 'O. Trish', size: '$100K', amt: '$66,028' },
  { rank: '#05', flag: '🇸🇬', name: 'M. Chen', size: '$100K', amt: '$58,940' },
];

export default function Champions() {
  const t = useT();
  return (
    <section className="sec band" id="champions">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">{t.champions.idx}</span>
            <h2 className="h2">
              {t.champions.title_a} <span className="gt">{t.champions.title_b}</span>
            </h2>
          </div>
          <p>{t.champions.sub}</p>
        </div>
      </div>
      <div className="wrap">
        <div className="hscroll">
          {CHAMPS.map((c) => (
            <div className="hcard champ reveal" key={c.rank}>
              <span className="rank">{c.rank}</span>
              <div className="flag">{c.flag}</div>
              <div className="name">{c.name}</div>
              <div className="role">
                {c.size} · {t.champions.operator}
              </div>
              <div className="amt">{c.amt}</div>
              <div className="amt-l">{t.champions.paidThisCycle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
