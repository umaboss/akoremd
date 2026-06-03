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
          <span>When do I get paid?</span>
          <span className="pm">+</span>
        </button>
        <div className="faq-a" style={{ transition: 'max-height 0.35s ease', maxHeight: '0px', overflow: 'hidden' }}>
          <div>
            Affiliate payouts are processed on the 10th of every calendar month for commissions generated in the preceding month.
          </div>
        </div>
      </div>

      <div className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
        <button className="faq-q" onClick={toggleFAQ}>
          <span>What is the minimum payout threshold?</span>
          <span className="pm">+</span>
        </button>
        <div className="faq-a" style={{ transition: 'max-height 0.35s ease', maxHeight: '0px', overflow: 'hidden' }}>
          <div>
            The minimum threshold to request a payout is $50. If your unpaid commission balance is lower, it will safely roll over to the next month.
          </div>
        </div>
      </div>

      <div className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
        <button className="faq-q" onClick={toggleFAQ}>
          <span>How long does the referral cookie last?</span>
          <span className="pm">+</span>
        </button>
        <div className="faq-a" style={{ transition: 'max-height 0.35s ease', maxHeight: '0px', overflow: 'hidden' }}>
          <div>
            Our referral cookies track users for up to 60 days. If a user clicks your link and makes a purchase within 60 days, the commission is credited to your account.
          </div>
        </div>
      </div>

      <div className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
        <button className="faq-q" onClick={toggleFAQ}>
          <span>Can I refer myself to buy evaluations?</span>
          <span className="pm">+</span>
        </button>
        <div className="faq-a" style={{ transition: 'max-height 0.35s ease', maxHeight: '0px', overflow: 'hidden' }}>
          <div>
            No, self-referrals are strictly prohibited. Attempting to purchase evaluation accounts through your own affiliate link will result in immediate termination of your affiliate account and forfeiture of earnings.
          </div>
        </div>
      </div>
    </div>
  );
}
