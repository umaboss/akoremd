// TODO: replace with the real live payout feed (country + amount + tx proof).
const SETTLEMENTS = [
  { flag: '🇮🇳', name: 'Rashmeet Kaur', country: 'India', amt: '$2,140', time: '8m' },
  { flag: '🇩🇪', name: 'Nik Dolja', country: 'Germany', amt: '$1,680', time: '14m' },
  { flag: '🇳🇱', name: 'Jasper Hof', country: 'Netherlands', amt: '$1,499', time: '3h' },
  { flag: '🇮🇳', name: 'Shreyas M V', country: 'India', amt: '$1,205', time: '4h' },
  { flag: '🇵🇰', name: 'Saim Ahmed', country: 'Pakistan', amt: '$940', time: '4h' },
  { flag: '🇲🇾', name: 'Jun Jye Ooi', country: 'Malaysia', amt: '$3,310', time: '6h' },
  { flag: '🇵🇰', name: 'Shahyan Zahid', country: 'Pakistan', amt: '$3,020', time: '8h' },
  { flag: '🇵🇰', name: 'Zohaib Sajjad', country: 'Pakistan', amt: '$710', time: '14h' },
];

export default function LiveRewards() {
  return (
    <section className="sec band" id="rewards">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 10 — LIVE REWARDS ]</span>
            <h2 className="h2">
              Verified payouts. <span className="gt">On-chain proof.</span>
            </h2>
          </div>
          <p>Real traders, real withdrawals — every settlement is provable and updated live.</p>
        </div>

        <div className="rewards reveal">
          <div className="rewards-lead">
            <span className="rewards-tag">
              <span className="lr-dot" /> LIVE REWARDS
            </span>
            <div className="rewards-total gt">$5.31M</div>
            <p className="rewards-cap">Total paid to Capital Chain traders — and counting.</p>

            <div className="reward-feature">
              <div className="rf-top">
                <span className="rf-flag">🇳🇱</span> NETHERLANDS
              </div>
              <div className="rf-name">Jasper Hof</div>
              <div className="rf-amt">$1,499</div>
              <div className="rf-meta">3h ago · USDT (TRC-20)</div>
              <a href="#rewards" className="btn btn-p" data-magnetic style={{ marginTop: 22 }}>
                View proof of payment →
              </a>
            </div>
          </div>

          <div className="rewards-list">
            <div className="rl-head">
              <span>Recent settlements</span>
              <a href="#rewards">View rewards →</a>
            </div>
            {SETTLEMENTS.map((s) => (
              <div className="rrow" key={s.name}>
                <span className="rf-flag">{s.flag}</span>
                <div>
                  <div className="rr-name">{s.name}</div>
                  <div className="rr-country">{s.country}</div>
                </div>
                <div className="rr-amt">{s.amt}</div>
                <div className="rr-time">{s.time}</div>
              </div>
            ))}
            <div className="rl-foot">On-chain proof on every transfer.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
