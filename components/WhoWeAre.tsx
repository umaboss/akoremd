export default function WhoWeAre() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 01 — WHO WE ARE ]</span>
            <h2 className="h2">
              Who we are. <span className="gt">What we do.</span>
            </h2>
          </div>
          <p>
            Capital Chain is a global prop firm — we back skilled traders with real capital,
            fast payouts and pro-grade technology across 160+ countries.
          </p>
        </div>
        <div className="svc-grid">
          <div className="tile reveal" data-tilt>
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
              </svg>
            </div>
            <h3>Funded capital</h3>
            <p>Trade balances from $5K to $400K on one refundable fee — scale to $2M as you stay consistent.</p>
          </div>
          <div className="tile reveal" data-tilt>
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h4l3-9 4 18 3-9h4" />
              </svg>
            </div>
            <h3>Trading technology</h3>
            <p>Sub-30ms execution on deep liquidity, raw spreads and the platforms you already trade on.</p>
          </div>
          <div className="tile reveal" data-tilt>
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
              </svg>
            </div>
            <h3>Education &amp; support</h3>
            <p>Real humans in every timezone, a global trader community and resources to sharpen your edge.</p>
          </div>
          <div className="tile reveal" data-tilt>
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M21 12a9 9 0 11-6.2-8.6M22 4l-9 9-3-3" />
              </svg>
            </div>
            <h3>Transparent payouts</h3>
            <p>Every rule published upfront, every payout programmatic — keep up to 100% on your schedule.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
