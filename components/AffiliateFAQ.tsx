'use client';

export default function AffiliateFAQ() {
  const toggleFAQ = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ans = e.currentTarget.nextElementSibling as HTMLElement;
    const parent = e.currentTarget.parentElement;
    if (parent?.classList.contains('open')) {
      parent.classList.remove('open');
      ans.style.maxHeight = '0px';
    } else {
      parent?.classList.add('open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  };

  return (
    <div className="faq-list reveal">
      <div className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
        <button className="faq-q" onClick={toggleFAQ}>
          <span>When do I get paid for a referral?</span>
          <span className="pm">+</span>
        </button>
        <div className="faq-a" style={{ transition: 'max-height 0.35s ease', maxHeight: '0px', overflow: 'hidden' }}>
          <div>
            Partner rewards are processed on the 10th of every calendar month, once a referred practice has been onboarded and billed in the preceding month.
          </div>
        </div>
      </div>

      <div className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
        <button className="faq-q" onClick={toggleFAQ}>
          <span>How much is the referral reward?</span>
          <span className="pm">+</span>
        </button>
        <div className="faq-a" style={{ transition: 'max-height 0.35s ease', maxHeight: '0px', overflow: 'hidden' }}>
          <div>
            Partners earn a reward equal to 15% of the first three months of collections we bill for each practice they refer — paid monthly with no caps.
          </div>
        </div>
      </div>

      <div className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
        <button className="faq-q" onClick={toggleFAQ}>
          <span>Who can join the partner program?</span>
          <span className="pm">+</span>
        </button>
        <div className="faq-a" style={{ transition: 'max-height 0.35s ease', maxHeight: '0px', overflow: 'hidden' }}>
          <div>
            Practice managers, consultants, EHR vendors and providers are all welcome. If you know a practice that could use better billing, you can refer them and track every referral in your partner dashboard.
          </div>
        </div>
      </div>

      <div className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
        <button className="faq-q" onClick={toggleFAQ}>
          <span>Is there any cost to become a partner?</span>
          <span className="pm">+</span>
        </button>
        <div className="faq-a" style={{ transition: 'max-height 0.35s ease', maxHeight: '0px', overflow: 'hidden' }}>
          <div>
            None. Joining the AkoreMD partner program is completely free. You only earn — there are no fees, quotas, or commitments to participate.
          </div>
        </div>
      </div>
    </div>
  );
}
