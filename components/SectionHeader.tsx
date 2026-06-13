'use client';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  center?: boolean;
  className?: string;
}

function BillingIllustration() {
  return (
    <svg viewBox="0 0 280 200" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="260" height="170" rx="16" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="24" y="44" width="80" height="8" rx="4" fill="var(--teal)" opacity="0.5"/>
      <rect x="24" y="60" width="140" height="8" rx="4" fill="var(--line)"/>
      <rect x="24" y="76" width="100" height="8" rx="4" fill="var(--line)"/>
      <circle cx="220" cy="48" r="16" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.5"/>
      <path d="M212 48l4 4 8-8" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="24" y="110" width="50" height="30" rx="8" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="86" y="110" width="50" height="30" rx="8" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="148" y="110" width="50" height="30" rx="8" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="210" y="110" width="50" height="30" rx="8" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="175" y="160" width="85" height="18" rx="9" fill="var(--grad)"/>
      <path d="M191 169l4 4 7-7" stroke="var(--btn-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="192" y="166" width="20" height="6" rx="3" fill="var(--btn-ink)" opacity="0.8"/>
      <rect x="216" y="166" width="30" height="6" rx="3" fill="var(--btn-ink)" opacity="0.4"/>
    </svg>
  );
}

export default function SectionHeader({
  eyebrow, title, titleAccent, description, center = true, className = '',
}: SectionHeaderProps) {
  return (
    <div className={`section-header${center ? ' section-header--center' : ' section-header--split'} reveal ${className}`.trim()}>
      <div className="section-header-content">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h2 className="h2">
          {title}
          {titleAccent && (
            <>
              {' '}
              <span className="gt">{titleAccent}</span>
            </>
          )}
        </h2>
        {description && <p className="section-desc">{description}</p>}
      </div>
      {!center && (
        <div className="section-header-image">
          <BillingIllustration />
        </div>
      )}
    </div>
  );
}
