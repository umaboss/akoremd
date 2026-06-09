interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  center = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`section-header${center ? ' section-header--center' : ''} reveal ${className}`.trim()}>
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
  );
}
