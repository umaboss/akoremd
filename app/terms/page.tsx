import type { Metadata } from 'next';
import PromoBar from '@/components/PromoBar';
import Nav from '@/components/Nav';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use — AkoreMD',
  description:
    'Read the AkoreMD Terms of Use. Understand our scope of medical billing services, compliance and acceptable use, pricing, service policy and HIPAA disclosures.',
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
              SERVICE AGREEMENT
            </span>
            <h1 className="reveal">
              Terms of <span className="gt">Use.</span>
            </h1>
            <p className="hero-sub reveal" style={{ maxWidth: '680px' }}>
              Effective Date: June 3, 2026. Please read these terms carefully before engaging AkoreMD for medical billing and revenue cycle services.
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
                    1. Introduction &amp; Services
                  </a>
                  <a href="#rules" className="terms-nav-link">
                    2. Scope of Services
                  </a>
                  <a href="#prohibited" className="terms-nav-link">
                    3. Compliance &amp; Acceptable Use
                  </a>
                  <a href="#payouts" className="terms-nav-link">
                    4. Pricing &amp; Payments
                  </a>
                  <a href="#refund" className="terms-nav-link">
                    5. Service &amp; Cancellation Policy
                  </a>
                  <a href="#risk" className="terms-nav-link">
                    6. HIPAA &amp; Disclaimer
                  </a>
                </nav>
              </div>
            </aside>

            {/* Right Column Content Cards */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* Section 1: Introduction */}
              <div id="intro" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  1. Introduction &amp; Services
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  AkoreMD (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides medical billing, coding and revenue cycle administrative support services to healthcare providers. We act as a third-party billing service and as a Business Associate of the practices we serve.
                </p>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7 }}>
                  By engaging our services or registering on our site, you agree to these terms. AkoreMD does not provide medical, legal or financial advice, and does not guarantee any specific reimbursement amount, which depends on payer policies, documentation and applicable regulations.
                </p>
              </div>

              {/* Section 2: Scope of Services */}
              <div id="rules" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  2. Scope of Services
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Depending on the service plan selected, AkoreMD may provide the following revenue cycle services:
                </p>
                <ul style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <strong>Eligibility &amp; Authorizations:</strong> Insurance eligibility and benefits verification, referral management and prior/retro authorization support.
                  </li>
                  <li>
                    <strong>Coding &amp; Charge Entry:</strong> ICD-10, CPT and HCPCS coding, modifier review, charge entry and quality checks before claim creation.
                  </li>
                  <li>
                    <strong>Claims &amp; Payments:</strong> Claim scrubbing, electronic submission, payment posting (ERA/EOB) and reconciliation.
                  </li>
                  <li>
                    <strong>Denials &amp; AR:</strong> Denial analysis and appeals, accounts receivable follow-up and patient billing support.
                  </li>
                </ul>
              </div>

              {/* Section 3: Compliance & Acceptable Use */}
              <div id="prohibited" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  3. Compliance &amp; Acceptable Use
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  To maintain billing integrity and regulatory compliance, both parties agree to the following. Engaging in any of these practices may result in suspension of services:
                </p>
                <ul style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <strong>Accurate Documentation:</strong> Claims are submitted based solely on the provider&apos;s own documentation. Upcoding, unbundling or billing for services not rendered is strictly prohibited.
                  </li>
                  <li>
                    <strong>Authorized Access:</strong> System credentials and protected health information may only be used by authorized personnel for legitimate billing purposes.
                  </li>
                  <li>
                    <strong>Regulatory Adherence:</strong> All billing follows applicable federal and state regulations, payer rules and HIPAA requirements.
                  </li>
                  <li>
                    <strong>Data Protection:</strong> No sharing of protected health information with unauthorized third parties.
                  </li>
                </ul>
              </div>

              {/* Section 4: Pricing & Payments */}
              <div id="payouts" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  4. Pricing &amp; Payments
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Service fees are defined in your individual service agreement:
                </p>
                <ul style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <strong>Percentage of Collections:</strong> Most services are billed as a transparent percentage of payments we collect on your behalf. You only pay on what we collect.
                  </li>
                  <li>
                    <strong>Billing Cycle:</strong> Service invoices are issued monthly based on the collections posted during the period.
                  </li>
                  <li>
                    <strong>Add-on Services:</strong> Optional services such as credentialing and prior authorizations may be quoted separately as noted in your agreement.
                  </li>
                </ul>
              </div>

              {/* Section 5: Service & Cancellation Policy */}
              <div id="refund" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  5. Service &amp; Cancellation Policy
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  AkoreMD operates on transparent, no-long-term-lock-in terms:
                </p>
                <ul style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <strong>Cancellation:</strong> Either party may end the engagement with written notice as defined in the service agreement. We will assist with an orderly transition of your billing data.
                  </li>
                  <li>
                    <strong>Outstanding Claims:</strong> We continue working active claims through resolution unless otherwise agreed, and fees apply only to collections received.
                  </li>
                </ul>
              </div>

              {/* Section 6: HIPAA & Disclaimer */}
              <div id="risk" className="tile" style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '24px', color: 'var(--text)', marginBottom: '20px' }}>
                  6. HIPAA &amp; Disclaimer
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                  AkoreMD handles all protected health information in accordance with HIPAA and operates as a Business Associate under a Business Associate Agreement with each client practice.
                </p>
                <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7 }}>
                  AkoreMD does not provide medical, legal, financial or coding-compliance advice. Statistics and results referenced on this site are illustrative; actual results vary by practice, specialty, documentation and payer mix. Services are governed by the full service agreement.
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
