import type { Metadata } from 'next';
import PromoBar from '@/components/PromoBar';
import Nav from '@/components/Nav';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — AkoreMD',
  description:
    'Get in touch with the AkoreMD team. Schedule a free consultation or practice revenue audit, or reach our billing specialists by phone and email.',
};

export default function ContactUs() {
  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        {/* Section 1: Hero */}
        <section className="hero">
          <div className="wrap">
            <span className="eyebrow reveal">
              <span className="dot" />
              GET IN TOUCH
            </span>
            <h1 className="reveal">
              We are here to <span className="gt">help.</span>
            </h1>
            <p className="hero-sub reveal" style={{ maxWidth: '640px' }}>
              Ready to improve your revenue cycle? Have questions about claims, denials, coding or credentialing? Our billing specialists are here to help — and your first consultation is always free.
            </p>
          </div>
        </section>

        {/* Section 2: Main Grid Form and Bento Cards */}
        <section className="sec band">
          <div className="wrap grid-2">
            {/* Left Column: Form */}
            <div className="reveal">
              <ContactForm />
            </div>

            {/* Right Column: Support Cards */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Card 1: Direct Support */}
              <div className="tile" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <div className="ic" style={{ margin: 0, padding: '8px', background: 'rgba(25,230,214,0.1)', borderRadius: '10px' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', stroke: 'var(--teal)', strokeWidth: 2, fill: 'none' }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: 600, margin: 0 }}>Billing Support</h4>
                </div>
                <p style={{ color: 'var(--dim)', fontSize: '14.5px', marginBottom: '16px', lineHeight: 1.6 }}>
                  Email our team directly for questions about claims, payment posting, denials or your reporting.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>support@akoremd.com</span>
                  <span style={{ fontSize: '12px', background: 'rgba(25,230,214,0.1)', color: 'var(--teal)', padding: '4px 10px', borderRadius: '20px' }}>&lt; 1hr response</span>
                </div>
              </div>

              {/* Card 2: Free Consultation */}
              <div className="tile" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <div className="ic" style={{ margin: 0, padding: '8px', background: 'rgba(25,230,214,0.1)', borderRadius: '10px' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', stroke: 'var(--teal)', strokeWidth: 2, fill: 'none' }}>
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: 600, margin: 0 }}>Free Consultation</h4>
                </div>
                <p style={{ color: 'var(--dim)', fontSize: '14.5px', marginBottom: '16px', lineHeight: 1.6 }}>
                  Book a no-obligation call with a billing specialist. We&apos;ll review your revenue cycle and show where AkoreMD can recover revenue.
                </p>
                <a href="/#community" className="btn btn-p" style={{ width: '100%', justifyContent: 'center' }}>
                  Schedule a call →
                </a>
              </div>

              {/* Card 3: Partnerships */}
              <div className="tile" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <div className="ic" style={{ margin: 0, padding: '8px', background: 'rgba(25,230,214,0.1)', borderRadius: '10px' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', stroke: 'var(--teal)', strokeWidth: 2, fill: 'none' }}>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: 600, margin: 0 }}>Partners & Referrals</h4>
                </div>
                <p style={{ color: 'var(--dim)', fontSize: '14.5px', lineHeight: 1.6 }}>
                  For partnership opportunities, referrals or multi-location group billing, email: <strong style={{ color: 'var(--text)' }}>partners@akoremd.com</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Location / Map */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap reveal">
            <div
              className="about-location-card"
              style={{ backgroundImage: `url('/about_dubai.png')` }}
            >
              <div className="loc-content">
                <span className="idx" style={{ color: 'var(--teal)' }}>HEADQUARTERS</span>
                <h3>AkoreMD Billing Center<br />United States</h3>
                <p style={{ color: 'var(--text)', fontSize: 16, marginBottom: 30, opacity: 0.8 }}>
                  We serve practices nationwide. Reach out to schedule your free consultation.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-p"
                  >
                    View on Google Maps
                  </a>
                </div>
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
