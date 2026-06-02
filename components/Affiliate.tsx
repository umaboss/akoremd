export default function Affiliate() {
  return (
    <section className="sec" id="affiliate">
      <div className="wrap">
        <div className="aff">
          <div className="reveal">
            <span className="idx">[ 11 — AFFILIATE PROGRAM ]</span>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              Earn while your <span className="gt">network trades.</span>
            </h2>
            <p style={{ color: 'var(--dim)', fontSize: 18, maxWidth: '44ch', marginBottom: 30 }}>
              Refer traders to Capital Chain and earn lifetime commission on every evaluation they
              buy. Real-time tracking, monthly payouts, no caps.
            </p>
            <a href="#" className="btn btn-p btn-lg" data-magnetic>
              Become an affiliate →
            </a>
          </div>
          <div className="aff-card reveal" data-tilt>
            <div className="pct">15%</div>
            <div className="pl">Lifetime commission</div>
            <div className="arow">
              <div>
                <div className="v gt">Monthly</div>
                <div className="k">Payouts</div>
              </div>
              <div>
                <div className="v gt">Real-time</div>
                <div className="k">Dashboard</div>
              </div>
              <div>
                <div className="v gt">No cap</div>
                <div className="k">Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
