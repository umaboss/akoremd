import FinalCTA from '@/components/FinalCTA';
import AffiliateFAQ from '@/components/AffiliateFAQ';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata('affiliate');

export default function AffiliateProgram() {
  return (
    <>
      <main>
        {/* Section 1: Hero Section */}
        <section className="hero">
          <div className="wrap grid-2">
            <div className="reveal">
              <span className="eyebrow">
                <span className="dot" />
                PARTNER PROGRAM
              </span>
              <h1 style={{ marginBottom: 24 }}>
                Refer a practice. <span className="gt">Earn rewards.</span>
              </h1>
              <p className="hero-sub" style={{ marginBottom: 32 }}>
                Know another provider drowning in billing? Refer them to AkoreMD and earn a reward for every practice that joins — paid monthly, no caps.
              </p>
              <div className="hero-actions">
                <a href="#" className="btn btn-p btn-lg" data-magnetic>
                  Become a partner →
                </a>
              </div>
            </div>

            <div className="reveal">
              <div className="aff-card" data-tilt style={{ transform: 'none', transition: 'all 0.5s' }}>
                <div className="pct">15%</div>
                <div className="pl">Referral reward</div>
                <div className="arow">
                  <div>
                    <div className="v gt">Monthly</div>
                    <div className="k">Payments</div>
                  </div>
                  <div>
                    <div className="v gt">Real-time</div>
                    <div className="k">Tracking</div>
                  </div>
                  <div>
                    <div className="v gt">No cap</div>
                    <div className="k">Rewards</div>
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
              <p>Start earning rewards in three simple steps.</p>
            </div>

            <div className="grid-3 reveal">
              <div className="tile" style={{ minHeight: '260px' }}>
                <div className="ic">
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--teal)' }}>01</span>
                </div>
                <h3>Sign Up</h3>
                <p>Register as an AkoreMD partner in under 60 seconds and access your custom referral link and dashboard immediately.</p>
              </div>
              <div className="tile" style={{ minHeight: '260px' }}>
                <div className="ic">
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--teal)' }}>02</span>
                </div>
                <h3>Refer a Practice</h3>
                <p>Introduce a provider, clinic or group that needs better billing. We handle the consultation, onboarding and transition.</p>
              </div>
              <div className="tile" style={{ minHeight: '260px' }}>
                <div className="ic">
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--teal)' }}>03</span>
                </div>
                <h3>Earn Rewards</h3>
                <p>Earn a 15% reward on the collections we bill for every practice you refer, paid monthly directly to you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Partner with AkoreMD? */}
        <section className="sec">
          <div className="wrap">
            <div className="shead reveal center">
              <span className="idx">[ 02 — THE BENEFITS ]</span>
              <h2 className="h2">Why partner with us?</h2>
              <p>Help fellow providers fix their billing while growing your own revenue.</p>
            </div>

            <div className="bento reveal">
              {/* Tile 1: Big Feature */}
              <div className="tile big feature">
                <div className="big-num gt">15%</div>
                <h3>Generous Referral Reward</h3>
                <p>
                  We pay a 15% reward on the collections we bill for every practice purchased through your referral, for the first three months of service — recurring revenue for a single introduction.
                </p>
              </div>

              {/* Tile 2: Medium */}
              <div className="tile med">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 3v18h18M7 16l4-4 4 4 6-6" />
                  </svg>
                </div>
                <h3>Real-time Tracking</h3>
                <p>
                  Access our partner dashboard to view detailed stats on referrals, onboarding status, and a clear breakdown of your pending and paid rewards.
                </p>
              </div>

              {/* Tile 3: Medium */}
              <div className="tile med">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 14a4 4 0 114-4 4 4 0 01-4 4z" />
                  </svg>
                </div>
                <h3>Practices Love Us</h3>
                <p>
                  AkoreMD is built for providers. Fewer denials, faster payments and transparent reporting make every referral easy to recommend — and easy to keep.
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
                <p>Get direct access to our partner team to help with introductions, materials and answers for the practices you refer.</p>
              </div>

              {/* Tile 5: Small */}
              <div className="tile sm">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3>Ready-made Resources</h3>
                <p>Download professional one-pagers and email templates to share AkoreMD with the practices in your network.</p>
              </div>

              {/* Tile 6: Small */}
              <div className="tile sm">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>No Earnings Ceiling</h3>
                <p>There are no limits or caps on rewards. The more practices you refer, the more recurring income you generate.</p>
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
                <h2 className="h2">Partner FAQ</h2>
                <p style={{ color: 'var(--dim)', marginTop: 12 }}>
                  Everything you need to know about the AkoreMD partner program.
                </p>
              </div>

              <AffiliateFAQ />
            </div>
          </div>
        </section>
      </main>
      <FinalCTA />
    </>
  );
}
