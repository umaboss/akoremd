import type { Metadata } from 'next';
import PromoBar from '@/components/PromoBar';
import Nav from '@/components/Nav';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import AffiliateFAQ from '@/components/AffiliateFAQ';

export const metadata: Metadata = {
  title: 'Affiliate Program — CapitalChain',
  description: 'Join the Capital Chain Affiliate Program. Refer traders to our industry-leading prop firm and earn 15% lifetime commission with monthly payouts and real-time dashboards.',
};

export default function AffiliateProgram() {
  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        {/* Section 1: Hero Section */}
        <section className="hero">
          <div className="wrap grid-2">
            <div className="reveal">
              <span className="eyebrow">
                <span className="dot" />
                AFFILIATE PROGRAM
              </span>
              <h1 style={{ marginBottom: 24 }}>
                Earn while your <span className="gt">network trades.</span>
              </h1>
              <p className="hero-sub" style={{ marginBottom: 32 }}>
                Refer traders to Capital Chain and earn lifetime commission on every evaluation they buy. Real-time tracking, monthly payouts, no caps.
              </p>
              <div className="hero-actions">
                <a href="#" className="btn btn-p btn-lg" data-magnetic>
                  Become an affiliate →
                </a>
              </div>
            </div>
            
            <div className="reveal">
              <div className="aff-card" data-tilt style={{ transform: 'none', transition: 'all 0.5s' }}>
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

        {/* Section 2: How It Works */}
        <section className="sec band">
          <div className="wrap">
            <div className="shead reveal center">
              <span className="idx">[ 01 — THREE SIMPLE STEPS ]</span>
              <h2 className="h2">How it works</h2>
              <p>Start earning commission in three simple steps.</p>
            </div>
            
            <div className="grid-3 reveal">
              <div className="tile" style={{ minHeight: '260px' }}>
                <div className="ic">
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--teal)' }}>01</span>
                </div>
                <h3>Sign Up</h3>
                <p>Register as a Capital Chain affiliate partner in under 60 seconds. Access your custom referral link immediately.</p>
              </div>
              <div className="tile" style={{ minHeight: '260px' }}>
                <div className="ic">
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--teal)' }}>02</span>
                </div>
                <h3>Share Link</h3>
                <p>Share your link with your trading network, community, social media, or blog. We provide banners and marketing materials.</p>
              </div>
              <div className="tile" style={{ minHeight: '260px' }}>
                <div className="ic">
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--teal)' }}>03</span>
                </div>
                <h3>Earn Commissions</h3>
                <p>Earn 15% lifetime commission on every challenge purchase your referrals make, paid monthly directly to your wallet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Partner with Capital Chain? */}
        <section className="sec">
          <div className="wrap">
            <div className="shead reveal center">
              <span className="idx">[ 02 — THE BENEFITS ]</span>
              <h2 className="h2">Why partner with us?</h2>
              <p>Empower your audience with a premium trading brand while growing your revenue.</p>
            </div>
            
            <div className="bento reveal">
              {/* Tile 1: Big Feature */}
              <div className="tile big feature">
                <div className="big-num gt">15%</div>
                <h3>Lifetime Payout Split</h3>
                <p>
                  We pay a flat 15% commission on all evaluation challenges purchased through your link. This commission is for the lifetime of the trader: if they purchase another program or reset their account years later, you still get paid.
                </p>
              </div>
              
              {/* Tile 2: Medium */}
              <div className="tile med">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 3v18h18M7 16l4-4 4 4 6-6" />
                  </svg>
                </div>
                <h3>Real-time Analytics</h3>
                <p>
                  Access our state-of-the-art partner dashboard. View detailed stats on link clicks, sign-ups, conversions, and detailed breakdown of your pending and paid commissions.
                </p>
              </div>
              
              {/* Tile 3: Medium */}
              <div className="tile med">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 14a4 4 0 114-4 4 4 0 01-4 4z" />
                  </svg>
                </div>
                <h3>High Conversion Rates</h3>
                <p>
                  Capital Chain is built for traders. High platform uptime, up to 100% profit splits, and rapid payout cycles make converting traffic into sales easier than any other firm.
                </p>
              </div>
              
              {/* Tile 4: Small */}
              <div className="tile sm">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 114-4 4 4 0 01-4 4zm14 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3>Dedicated Managers</h3>
                <p>Get direct access to our partner team to help you construct custom setups or secure exclusive promotional codes.</p>
              </div>
              
              {/* Tile 5: Small */}
              <div className="tile sm">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3>Instant Media Kits</h3>
                <p>Download professional pre-built banners, video assets, and copy resources immediately to start promoting.</p>
              </div>
              
              {/* Tile 6: Small */}
              <div className="tile sm">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>No Earnings Ceiling</h3>
                <p>There are no limits or caps on how much you can earn. The more traders you refer, the more passive income you generate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="sec band">
          <div className="wrap">
            <div className="faq-grid">
              <div className="reveal">
                <span className="idx">[ 03 — PARTNER FAQ ]</span>
                <h2 className="h2">Affiliate FAQ</h2>
                <p style={{ color: 'var(--dim)', marginTop: 12 }}>
                  Everything you need to know about the Capital Chain affiliate network.
                </p>
              </div>
              
              <AffiliateFAQ />
            </div>
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
