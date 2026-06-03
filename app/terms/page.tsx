import type { Metadata } from 'next';
import PromoBar from '@/components/PromoBar';
import Nav from '@/components/Nav';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use — CapitalChain',
  description: 'Read the Capital Chain Terms of Use. Understand evaluation guidelines, profit drawdowns, prohibited trading practices, and payout policies.',
};

export default function TermsOfUse() {
  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="wrap">
            <span className="eyebrow reveal">
              <span className="dot" />
              LEGAL AGREEMENT
            </span>
            <h1 className="reveal">
              Terms of <span className="gt">Use.</span>
            </h1>
            <p className="hero-sub reveal" style={{ maxWidth: '680px' }}>
              Effective Date: June 3, 2026. Please read these terms carefully before accessing or using Capital Chain evaluation accounts.
            </p>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar Grid */}
        <section className="sec band">
          <div className="wrap terms-grid">
            {/* Sticky Left Sidebar Table of Contents */}
            <aside className="reveal" style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="tile" style={{ padding: '24px' }}>
                <h4 style={{ fontFamily: 'var(--fd)', fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase', color: 'var(--teal)' }}>
                  Table of Contents
                </h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="#intro" className="terms-nav-link">
                    1. Introduction & Services
                  </a>
                  <a href="#rules" className="terms-nav-link">
                    2. Evaluation Rules
                  </a>
                  <a href="#prohibited" className="terms-nav-link">
                    3. Prohibited Practices
                  </a>
                  <a href="#payouts" className="terms-nav-link">
                    4. Payout Policy
                  </a>
                  <a href="#refund" className="terms-nav-link">
                    5. Refund Policy
                  </a>
                  <a href="#risk" className="terms-nav-link">
                    6. Risk Disclosure
                  </a>
                </nav>
              </div>
            </aside>

            {/* Right Column Content Cards */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Section 1: Introduction */}
              <div id="intro" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  1. Introduction & Services
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Capital Chain (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides evaluation and simulated trading accounts designed to assess trading skills. 
                  All accounts provided to users are simulated accounts operating in a demo environment.
                </p>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7 }}>
                  By buying an evaluation challenge or registering on our site, you agree to these terms. Capital Chain does not act as a broker or custodian, nor does it accept actual deposits of investment capital from the public.
                </p>
              </div>

              {/* Section 2: Evaluation Rules */}
              <div id="rules" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  2. Evaluation Rules
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  To pass an evaluation and qualify for a virtual funding profit split, you must comply strictly with the parameters configured at checkout:
                </p>
                <ul style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <strong>Daily Loss Limit (Daily Drawdown):</strong> Calculated as 5% of the starting balance or equity of the day (whichever is higher). Crossing this boundary instantly voids the account.
                  </li>
                  <li>
                    <strong>Maximum Overall Loss (Max Drawdown):</strong> Fixed at 10% of the initial account balance. Account equity/balance must never fall below 90% of the initial balance.
                  </li>
                  <li>
                    <strong>Profit Targets:</strong> 8% for Phase 1 and 5% for Phase 2 in standard 2-step evaluations.
                  </li>
                  <li>
                    <strong>Minimum Trading Days:</strong> A minimum of 3 active trading days must be registered per phase.
                  </li>
                </ul>
              </div>

              {/* Section 3: Prohibited Trading Practices */}
              <div id="prohibited" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  3. Prohibited Trading Practices
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  To maintain the integrity of our assessment environment, we strictly prohibit the following trading practices. Engaging in any of these will lead to instant account closure and forfeiture of virtual payouts:
                </p>
                <ul style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <strong>Latency Arbitrage:</strong> Taking advantage of feed delays between trading platforms.
                  </li>
                  <li>
                    <strong>High-Frequency Trading (HFT):</strong> Using algorithmic bots designed to execute hundreds of trades in seconds, creating unrealistic volume.
                  </li>
                  <li>
                    <strong>Copy Trading:</strong> Copying trades from external accounts not owned by the registered user, or coordinate-trading with other users.
                  </li>
                  <li>
                    <strong>Account Sharing:</strong> Giving credentials to third-party managers or account management services.
                  </li>
                </ul>
              </div>

              {/* Section 4: Payout Policy */}
              <div id="payouts" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  4. Payout Policy
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Once you successfully complete the evaluation phase and submit your KYC documents, you will be issued a Virtual Funded Account:
                </p>
                <ul style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <strong>Profit Split Rate:</strong> Standard accounts receive an 80% split of virtual earnings. High-tier accounts qualify for up to 100% split.
                  </li>
                  <li>
                    <strong>Payout Cycles:</strong> Payout requests can be initiated every 14 calendar days from your first trade.
                  </li>
                  <li>
                    <strong>Minimum Virtual Profit:</strong> The minimum account profit required to request a payout is 1% of the starting balance.
                  </li>
                </ul>
              </div>

              {/* Section 5: Refund Policy */}
              <div id="refund" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  5. Refund Policy
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Capital Chain operates a performance-based refund policy:
                </p>
                <ul style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <strong>Successful Evaluations:</strong> Your initial registration fee is 100% refundable. It will be added to your first successful virtual profit split payout.
                  </li>
                  <li>
                    <strong>Failed Evaluations:</strong> If you violate any of the trading drawdowns, the registration fee is non-refundable. You are welcome to purchase a new evaluation at a discounted reset rate.
                  </li>
                </ul>
              </div>

              {/* Section 6: Risk Disclosure */}
              <div id="risk" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  6. Risk Disclosure
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Trading leveraged financial instruments (including Forex, indices, and commodities) carries a high degree of risk and may not be suitable for all participants.
                </p>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7 }}>
                  All systems, platforms, and dashboards provided by Capital Chain are strictly simulated environments. No real trades are routed to the live interbank market. Past performance in simulated environments does not guarantee future success.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
