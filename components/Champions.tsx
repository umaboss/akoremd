// TODO: replace with real leaderboard data — names, flags and amounts are placeholders.
const CHAMPS = [
  { rank: '#01', flag: '🇦🇪', name: 'A. Rahman', role: '$200K · Operator', amt: '$96,316' },
  { rank: '#02', flag: '🇩🇪', name: 'B. Schneider', role: '$200K · Operator', amt: '$80,517' },
  { rank: '#03', flag: '🇵🇰', name: 'U. Bin Hannan', role: '$100K · Operator', amt: '$80,369' },
  { rank: '#04', flag: '🇬🇧', name: 'O. Trish', role: '$100K · Operator', amt: '$66,028' },
  { rank: '#05', flag: '🇸🇬', name: 'M. Chen', role: '$100K · Operator', amt: '$58,940' },
];

export default function Champions() {
  return (
    <section className="sec band" id="champions">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 08 — LEADERBOARD ]</span>
            <h2 className="h2">
              This month&apos;s <span className="gt">champions.</span>
            </h2>
          </div>
          <p>Top funded traders across the chain. Scroll →</p>
        </div>
      </div>
      <div className="wrap">
        <div className="hscroll">
          {CHAMPS.map((c) => (
            <div className="hcard champ reveal" key={c.rank}>
              <span className="rank">{c.rank}</span>
              <div className="flag">{c.flag}</div>
              <div className="name">{c.name}</div>
              <div className="role">{c.role}</div>
              <div className="amt">{c.amt}</div>
              <div className="amt-l">paid this cycle</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
