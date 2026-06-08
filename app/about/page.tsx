import type { Metadata } from 'next';
import Image from 'next/image';
import PromoBar from '@/components/PromoBar';
import Nav from '@/components/Nav';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us — AkoreMD',
  description:
    'Learn about AkoreMD, our mission, and the revenue cycle specialists behind dependable, HIPAA-compliant medical billing for healthcare providers.',
};

export default function AboutUs() {
  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        {/* Section 1: Hero-like Split Grid (About AkoreMD) */}
        <section className="hero">
          <div className="wrap grid-2">
            <div className="reveal">
              <span className="eyebrow">
                <span className="dot" />
                WHO WE ARE
              </span>
              <h1 style={{ marginBottom: 24 }}>
                About <span className="gt">AkoreMD</span>
              </h1>
              <p className="hero-sub" style={{ marginBottom: 20 }}>
                At AkoreMD, we understand that managing medical billing can be time-consuming and challenging. Insurance regulations, claim requirements, payment delays and administrative tasks can take valuable time away from patient care.
              </p>
              <p className="hero-sub" style={{ fontSize: '18px' }}>
                Our mission is to simplify the billing process and provide healthcare providers with dependable support throughout the entire revenue cycle — acting as an extension of your team.
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

        {/* Section 2: AkoreMD Vision */}
        <section className="sec band">
          <div className="wrap grid-2">
            <div className="reveal">
              <span className="idx">[ 01 — OUR VALUES ]</span>
              <h2 className="h2" style={{ marginBottom: 24 }}>
                Why providers <span className="gt">choose us</span>
              </h2>
              <p style={{ color: 'var(--dim)', fontSize: 18, marginBottom: 32 }}>
                We are committed to delivering measurable results while maintaining the highest standards of professionalism and compliance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 30 }}>
                <div style={{ border: '1px solid var(--line)', borderRadius: '16px', padding: '20px 24px', background: 'var(--surface)' }}>
                  <h3 style={{ fontFamily: 'var(--fd)', fontSize: '20px', marginBottom: '6px', color: 'var(--teal)' }}>Reliability</h3>
                  <p style={{ color: 'var(--dim)', fontSize: '14.5px' }}>Faster claims processing, timely payment posting and aggressive AR follow-up you can count on.</p>
                </div>
                <div style={{ border: '1px solid var(--line)', borderRadius: '16px', padding: '20px 24px', background: 'var(--surface)' }}>
                  <h3 style={{ fontFamily: 'var(--fd)', fontSize: '20px', marginBottom: '6px', color: 'var(--teal)' }}>Compliance</h3>
                  <p style={{ color: 'var(--dim)', fontSize: '14.5px' }}>HIPAA-compliant processes and accurate medical billing and coding at every step of the cycle.</p>
                </div>
                <div style={{ border: '1px solid var(--line)', borderRadius: '16px', padding: '20px 24px', background: 'var(--surface)' }}>
                  <h3 style={{ fontFamily: 'var(--fd)', fontSize: '20px', marginBottom: '6px', color: 'var(--teal)' }}>Transparency</h3>
                  <p style={{ color: 'var(--dim)', fontSize: '14.5px' }}>Clear, transparent reporting and personalized client support focused on your revenue growth.</p>
                </div>
              </div>

              <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.6 }}>
                Whether you are an independent physician, specialty clinic, group practice or healthcare organization, our goal is to provide accurate, transparent and reliable billing solutions that contribute to the financial success of your practice.
              </p>
            </div>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                <Image
                  src="/about_community.png"
                  alt="AkoreMD revenue cycle team"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                <Image
                  src="/about_mission.png"
                  alt="AkoreMD client review meeting"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Patients Over Everything */}
        <section className="sec">
          <div className="wrap">
            <div className="shead reveal center">
              <span className="idx">[ 02 — PARTNER WITH US ]</span>
              <h2 className="h2">
                Patients <span className="gt">Over Everything</span>
              </h2>
              <p>Your patients come first — your billing comes to us.</p>
            </div>

            <div className="grid-2 reveal" style={{ gap: 48, marginBottom: 48 }}>
              <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                <Image
                  src="/about_community.png"
                  alt="AkoreMD healthcare partners"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
                <p style={{ color: 'var(--dim)', fontSize: 18, lineHeight: 1.6 }}>
                  We act as an extension of your team, helping improve operational efficiency, reduce denials and maximize reimbursements — so your staff spends less time on paperwork and more time with patients.
                </p>
                <p style={{ color: 'var(--dim)', fontSize: 18, lineHeight: 1.6 }}>
                  Partner with AkoreMD today and let our specialists handle the revenue cycle while you focus on care.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
                  <a href="/#community" className="btn btn-p" data-magnetic>Talk to a specialist</a>
                  <a href="/#programs" className="btn">Service plans</a>
                  <a href="/contact" className="btn">Free consultation</a>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ textAlign: 'center', borderTop: '1px solid var(--line)', paddingTop: 40, marginTop: 40 }}>
              <h3 style={{ fontFamily: 'var(--fd)', fontSize: '28px', color: 'var(--teal)', fontWeight: 600 }}>
                AkoreMD isn&apos;t built just for practices. <span className="gt">It&apos;s built with them!</span>
              </h3>
            </div>
          </div>
        </section>

        {/* Section 4: Our Mission */}
        <section className="sec band">
          <div className="wrap grid-2">
            <div className="reveal">
              <span className="idx">[ 03 — OUR MISSION ]</span>
              <h2 className="h2" style={{ marginBottom: 30 }}>
                Our <span className="gt">Mission</span>
              </h2>
              <div className="about-mission-cols">
                <div>
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: 18, fontWeight: 600, color: 'var(--text)', marginBottom: 12 }}>
                    Dependable Revenue Cycle Support
                  </h4>
                  <p style={{ color: 'var(--dim)', fontSize: 14.5, lineHeight: 1.6 }}>
                    We simplify the billing process and provide dependable support throughout the entire revenue cycle, from eligibility verification to AR follow-up.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: 18, fontWeight: 600, color: 'var(--text)', marginBottom: 12 }}>
                    More Than Billing: A Trusted Partner
                  </h4>
                  <p style={{ color: 'var(--dim)', fontSize: 14.5, lineHeight: 1.6 }}>
                    We provide more than claims submission. We offer transparent reporting, personalized support and a team committed to your practice&apos;s financial success.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--line)' }}>
              <Image
                src="/about_mission.png"
                alt="AkoreMD mission"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Section 5: Who are we? */}
        <section className="sec">
          <div className="wrap">
            <div className="shead reveal" style={{ marginBottom: 40 }}>
              <div>
                <span className="idx">[ 04 — OUR TEAM ]</span>
                <h2 className="h2">Who are we?</h2>
              </div>
              <p style={{ maxWidth: '480px' }}>
                We are a team of revenue cycle specialists, certified medical coders and dedicated account managers committed to helping your practice get paid faster.
              </p>
            </div>

            {/* Team Stat Cards */}
            <div className="trust reveal" style={{ borderLeft: '1px solid var(--line)', borderRight: '1px solid var(--line)', background: 'var(--surface)', borderRadius: '20px', overflow: 'hidden', marginBottom: 40 }}>
              <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: 0 }}>
                <div className="st" style={{ borderRight: '1px solid var(--line)', padding: '30px 24px' }}>
                  <div className="v gt">40+</div>
                  <div className="k">Billing Specialists</div>
                </div>
                <div className="st" style={{ borderRight: '1px solid var(--line)', padding: '30px 24px' }}>
                  <div className="v gt">All</div>
                  <div className="k">Specialties Served</div>
                </div>
                <div className="st" style={{ borderRight: 'none', padding: '30px 24px' }}>
                  <div className="v gt">HIPAA</div>
                  <div className="k">Compliant Processes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Office / Location */}
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
                  Reach out online to schedule your free practice revenue audit.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                  <a href="/contact" className="btn btn-p" data-magnetic>Contact Us Online</a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
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
