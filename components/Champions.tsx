'use client';

import { useT } from './LanguageProvider';

// TODO: replace with real client results — names, specialties and amounts are placeholders.
const CHAMPS = [
  { rank: '#01', flag: '❤️', name: 'Cardiology Group', size: 'Multi-site', amt: '$96,316' },
  { rank: '#02', flag: '🦴', name: 'Orthopedic Clinic', size: '8 providers', amt: '$80,517' },
  { rank: '#03', flag: '🧠', name: 'Neurology Associates', size: '5 providers', amt: '$80,369' },
  { rank: '#04', flag: '👨‍⚕️', name: 'Family Medicine', size: 'Solo', amt: '$66,028' },
  { rank: '#05', flag: '🩺', name: 'Internal Medicine', size: '4 providers', amt: '$58,940' },
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
