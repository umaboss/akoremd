import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — AkoreMD',
  description:
    'Contact AkoreMD for a free consultation. Discover how our billing experts can help increase collections, reduce denials, and streamline your practice operations.',
};

export default function ContactUs() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero">
          <div className="wrap">
            <span className="eyebrow reveal">
              <span className="dot" />
              CONTACT US
            </span>
            <h1 className="reveal">
              Ready to improve your <span className="gt">revenue cycle?</span>
            </h1>
            <p className="hero-sub reveal" style={{ maxWidth: '720px' }}>
              Contact AkoreMD today for a free consultation and discover how our billing experts can help increase collections, reduce denials, and streamline your practice operations.
            </p>
          </div>
        </section>

        <section className="sec band">
          <div className="wrap grid-2">
            <div className="reveal">
              <ContactForm />
            </div>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="tile" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <div className="ic" style={{ margin: 0, padding: '8px', background: 'rgba(25,230,214,0.1)', borderRadius: '10px' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', stroke: 'var(--teal)', strokeWidth: 2, fill: 'none' }}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: 600, margin: 0 }}>Phone</h4>
                </div>
                <p style={{ color: 'var(--dim)', fontSize: '14.5px', marginBottom: '16px', lineHeight: 1.6 }}>
                  Call our team to schedule your free consultation or discuss your billing needs.
                </p>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>[Your Number]</span>
                </div>
              </div>

              <div className="tile" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <div className="ic" style={{ margin: 0, padding: '8px', background: 'rgba(25,230,214,0.1)', borderRadius: '10px' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', stroke: 'var(--teal)', strokeWidth: 2, fill: 'none' }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: 600, margin: 0 }}>Email</h4>
                </div>
                <p style={{ color: 'var(--dim)', fontSize: '14.5px', marginBottom: '16px', lineHeight: 1.6 }}>
                  Email our billing specialists for questions about claims, denials, coding, or onboarding.
                </p>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>support@akoremd.com</span>
                </div>
              </div>

              <div className="tile" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <div className="ic" style={{ margin: 0, padding: '8px', background: 'rgba(25,230,214,0.1)', borderRadius: '10px' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', stroke: 'var(--teal)', strokeWidth: 2, fill: 'none' }}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: '20px', fontWeight: 600, margin: 0 }}>Website</h4>
                </div>
                <p style={{ color: 'var(--dim)', fontSize: '14.5px', lineHeight: 1.6 }}>
                  Visit our website to learn more about our services and schedule a free consultation.
                </p>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: '16px' }}>
                  <a href="https://akoremd.com" style={{ color: 'var(--teal)', fontWeight: 600 }}>akoremd.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap reveal">
            <div className="about-location-card" style={{ backgroundImage: `url('/about_dubai.png')` }}>
              <div className="loc-content">
                <span className="idx" style={{ color: 'var(--teal)' }}>HEADQUARTERS</span>
                <h3>AkoreMD Billing Center<br />United States</h3>
                <p style={{ color: 'var(--text)', fontSize: 16, marginBottom: 30, opacity: 0.8 }}>
                  We serve practices nationwide. Reach out to schedule your free consultation.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-p">
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
