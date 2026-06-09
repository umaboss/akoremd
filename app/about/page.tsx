import type { Metadata } from 'next';
import Image from 'next/image';
import PromoBar from '@/components/PromoBar';
import Nav from '@/components/Nav';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us — AkoreMD',
  description:
    'Learn about AkoreMD — our mission to simplify medical billing and provide dependable revenue cycle support for healthcare providers nationwide.',
};

export default function AboutUs() {
  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        <section className="hero">
          <div className="wrap grid-2">
            <div className="reveal">
              <span className="eyebrow">
                <span className="dot" />
                ABOUT US
              </span>
              <h1 style={{ marginBottom: 24 }}>
                About <span className="gt">AkoreMD</span>
              </h1>
              <p className="hero-sub" style={{ marginBottom: 20 }}>
                At AkoreMD, we understand that managing medical billing can be time-consuming and challenging. Insurance regulations, claim requirements, payment delays, and administrative tasks can take valuable time away from patient care.
              </p>
              <p className="hero-sub" style={{ fontSize: '18px' }}>
                Our mission is to simplify the billing process and provide healthcare providers with dependable support throughout the entire revenue cycle. We act as an extension of your team, helping improve operational efficiency, reduce denials, and maximize reimbursements.
              </p>
            </div>
            <div className="reveal" style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--line)', boxShadow: '0 20px 48px -16px var(--glow)' }}>
              <Image
                src="/about_booth.png"
                alt="AkoreMD billing operations"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>

        <section className="sec band">
          <div className="wrap grid-2">
            <div className="reveal">
              <span className="idx">[ 01 — WHY CHOOSE US ]</span>
              <h2 className="h2" style={{ marginBottom: 24 }}>
                Why providers <span className="gt">choose us</span>
              </h2>
              <p style={{ color: 'var(--dim)', fontSize: 18, marginBottom: 32 }}>
                We are committed to delivering measurable results while maintaining the highest standards of professionalism and compliance.
              </p>

              <ul className="why-grid" style={{ marginBottom: 30 }}>
                {[
                  'Dedicated Revenue Cycle Specialists',
                  'Accurate Medical Billing & Coding',
                  'Faster Claims Processing',
                  'Reduced Claim Denials',
                  'Timely Payment Posting',
                  'Aggressive AR Follow-Up',
                  'HIPAA-Compliant Processes',
                  'Transparent Reporting',
                  'Personalized Client Support',
                  'Focus on Revenue Growth',
                ].map((item) => (
                  <li key={item} className="why-item">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.6 }}>
                Whether you are an independent physician, specialty clinic, group practice, or healthcare organization, our goal is to provide accurate, transparent, and reliable billing solutions that contribute to the financial success of your practice.
              </p>
            </div>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                <Image src="/about_community.png" alt="AkoreMD revenue cycle team" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                <Image src="/about_mission.png" alt="AkoreMD client review meeting" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="shead reveal center">
              <span className="idx">[ 02 — OUR MISSION ]</span>
              <h2 className="h2">
                Your patients first — <span className="gt">your billing, on us.</span>
              </h2>
              <p>We work behind the scenes so your practice operates efficiently while you focus on delivering exceptional patient care.</p>
            </div>

            <div className="grid-2 reveal" style={{ gap: 48, marginBottom: 48 }}>
              <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                <Image src="/about_community.png" alt="AkoreMD healthcare partners" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
                <p style={{ color: 'var(--dim)', fontSize: 18, lineHeight: 1.6 }}>
                  We act as an extension of your team, helping improve operational efficiency, reduce denials, and maximize reimbursements — so your staff spends less time on paperwork and more time with patients.
                </p>
                <p style={{ color: 'var(--dim)', fontSize: 18, lineHeight: 1.6 }}>
                  Our goal is to maximize revenue while minimizing administrative burden across every stage of the revenue cycle.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
                  <a href="/contact" className="btn btn-p" data-magnetic>Schedule a Free Consultation</a>
                  <a href="/#services" className="btn">View our services</a>
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
                  Reach out online to schedule your free consultation today.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                  <a href="/contact" className="btn btn-p" data-magnetic>Contact Us Online</a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn">
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
