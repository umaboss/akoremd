function LogoMark() {
  return (
    <svg className="mark" viewBox="0 0 40 40" fill="none">
      <path
        className="lkp"
        d="M14 20a6 6 0 016-6h0a6 6 0 016 6m0 0a6 6 0 01-6 6h0a6 6 0 01-6-6"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        className="lkp"
        cx="20"
        cy="20"
        r="17"
        strokeWidth="2.4"
        strokeDasharray="4 5"
        opacity=".5"
        fill="none"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="news reveal">
          <div>
            <h4>Stay ahead of the markets.</h4>
            <p>Payout drops, challenge updates and trading insights. No spam.</p>
          </div>
          <div className="form">
            <input type="email" placeholder="you@email.com" aria-label="email" />
            <a href="#" className="btn btn-p" data-magnetic>
              Subscribe
            </a>
          </div>
        </div>
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#" className="logo">
              <LogoMark />
              Capital<b>Chain</b>
            </a>
            <p>
              The bridge between your trading skills and real earnings — built on transparency and
              leading technology.
            </p>
          </div>
          <div className="foot-col">
            <h5>Platform</h5>
            <a href="#programs">Programs</a>
            <a href="#payouts">Payouts</a>
            <a href="#scaling">Scaling Plan</a>
            <a href="#platforms">Platforms</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="#why">About Us</a>
            <a href="#affiliate">Affiliate</a>
            <a href="#community">Community</a>
            <a href="#community">Contact Us</a>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Risk disclosure</a>
            <a href="#">Refund policy</a>
          </div>
        </div>
        <div className="disclaimer">
          <strong style={{ color: 'var(--dim)' }}>Risk disclosure.</strong> Trading leveraged
          instruments carries a substantial risk of loss and is not suitable for everyone. Capital
          Chain provides evaluation and funded-trader programs in a simulated environment;
          participation in an evaluation is not an offer of employment or investment, and nothing on
          this site constitutes financial, investment or trading advice. Stats, payout figures,
          leaderboard names and testimonials shown here are illustrative placeholders and do not
          guarantee or imply future results. Profit splits, payouts and program terms are subject to
          the full Terms of Service and account agreement.
        </div>
        <div className="foot-bot">
          <span>© 2026 CapitalChain.co — All rights reserved.</span>
          <span>capitalchain.co</span>
        </div>
      </div>
    </footer>
  );
}
