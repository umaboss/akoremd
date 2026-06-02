const STEPS = [
  {
    top: 120,
    n: '01',
    title: 'Pick your program',
    body: 'Choose a balance from $5K to $500K with one refundable fee. No recurring charges, no surprises.',
    icon: <path d="M12 2v20M2 12h20" />,
  },
  {
    top: 150,
    n: '02',
    title: 'Prove your edge',
    body: 'Reach the profit target inside the drawdown limits. No minimum trading days, no time pressure.',
    icon: <path d="M3 12h4l3-9 4 18 3-9h4" />,
  },
  {
    top: 180,
    n: '03',
    title: 'Get funded',
    body: 'Receive a funded account with real risk capital. Trade your strategy, on your own schedule.',
    icon: <path d="M3 3v18h18M7 14l4-4 3 3 5-6" />,
  },
  {
    top: 210,
    n: '04',
    title: 'Scale & cash out',
    body: 'Pick your payout cycle and keep up to 100%. Stay consistent and your allocation grows to $2M.',
    icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />,
  },
];

export default function HowStacking() {
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 03 — THE CHAIN ]</span>
            <h2 className="h2">
              Four links to a <span className="gt">funded desk.</span>
            </h2>
          </div>
          <p>
            A measurable path from evaluation to live allocation — built to reward consistency, not
            luck.
          </p>
        </div>
        <div className="stack" id="stack">
          {STEPS.map((s) => (
            <div className="stack-card" key={s.n} style={{ top: s.top }}>
              <div className="n">{s.n}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <div className="glyph">
                <svg viewBox="0 0 24 24">{s.icon}</svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
