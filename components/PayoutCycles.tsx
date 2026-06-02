const Check = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

interface Cycle {
  cn: string;
  split: string;
  best?: boolean;
  items: React.ReactNode[];
}

const CYCLES: Cycle[] = [
  {
    cn: 'Daily reward',
    split: '60%',
    items: [
      <>
        Paid in <b>1 business day</b>
      </>,
      <>
        Up to <b>25% of balance</b> per request
      </>,
      <>Cash flow when you need it</>,
    ],
  },
  {
    cn: 'Pay Friday',
    split: '70%',
    items: [
      <>
        Paid <b>every Friday</b>
      </>,
      <>No extra cost</>,
      <>Weekly rhythm</>,
    ],
  },
  {
    cn: 'Bi-weekly',
    split: '80%',
    items: [
      <>
        Every <b>10 business days</b>
      </>,
      <>No extra cost</>,
      <>Higher split, steady pace</>,
    ],
  },
  {
    cn: 'Monthly',
    split: '100%',
    best: true,
    items: [
      <>
        Every <b>21 business days</b>
      </>,
      <>
        Keep <b>every dollar</b>
      </>,
      <>For the patient trader</>,
    ],
  },
];

export default function PayoutCycles() {
  return (
    <section className="sec band" id="payouts">
      <div className="wrap">
        <div className="shead center reveal">
          <span className="idx">[ 04 — PAYOUTS ]</span>
          <h2 className="h2">
            Your profit. <span className="gt">Your schedule.</span>
          </h2>
          <p>
            Four payout cycles. Want it fast? Take it daily. Want all of it? Wait for monthly. The
            choice is yours, every single time.
          </p>
        </div>
        <div className="cycles">
          {CYCLES.map((c) => (
            <div className={`cyc reveal${c.best ? ' best' : ''}`} key={c.cn} data-tilt>
              {c.best && <div className="badge">MAX SPLIT</div>}
              <div className="cn">{c.cn}</div>
              <div className="split">
                <span>{c.split}</span>
              </div>
              <div className="spl-l">profit split</div>
              <ul>
                {c.items.map((item, i) => (
                  <li key={i}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
