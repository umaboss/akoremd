'use client';

import { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import { useT } from './LanguageProvider';

type ServiceGroup = 'front' | 'billing' | 'recovery' | 'enrollment';

function SchedulingSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="16" width="56" height="40" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="80" y="16" width="56" height="40" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="16" y="66" width="56" height="40" rx="6" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <rect x="80" y="66" width="56" height="40" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <circle cx="40" cy="34" r="6" fill="var(--teal)" opacity="0.6"/>
      <rect x="56" y="30" width="12" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="56" y="36" width="18" height="3" rx="1.5" fill="var(--line)"/>
      <circle cx="104" cy="34" r="6" fill="var(--green)" opacity="0.6"/>
      <rect x="120" y="30" width="10" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="120" y="36" width="14" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="28" y="82" width="28" height="4" rx="2" fill="var(--teal)" opacity="0.5"/>
      <rect x="28" y="90" width="36" height="4" rx="2" fill="var(--line)"/>
    </svg>
  );
}

function EligibilitySvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="20" width="80" height="10" rx="5" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="16" y="36" width="120" height="6" rx="3" fill="var(--line)"/>
      <rect x="16" y="48" width="100" height="6" rx="3" fill="var(--line)"/>
      <rect x="16" y="62" width="60" height="24" rx="6" fill="var(--teal)" opacity="0.3" stroke="var(--teal)" strokeWidth="1.2"/>
      <path d="M36 74l4 4 8-8" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="86" y="62" width="50" height="24" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="16" y="96" width="120" height="10" rx="5" fill="var(--grad)"/>
      <path d="M80 101l3 3 5-5" stroke="var(--btn-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function NetworkSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <circle cx="48" cy="40" r="12" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <circle cx="112" cy="40" r="12" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <circle cx="80" cy="80" r="12" fill="var(--teal)" opacity="0.3" stroke="var(--teal)" strokeWidth="1.5"/>
      <path d="M58 44l14 4M102 44l-14 4M48 50l14 14M112 50l-14 14" stroke="var(--line)" strokeWidth="1"/>
      <rect x="36" y="36" width="24" height="2" rx="1" fill="var(--teal)" opacity="0.6"/>
      <rect x="100" y="36" width="24" height="2" rx="1" fill="var(--teal)" opacity="0.6"/>
      <rect x="68" y="76" width="24" height="2" rx="1" fill="var(--teal)" opacity="0.8"/>
      <rect x="16" y="96" width="128" height="10" rx="5" fill="var(--grad)"/>
    </svg>
  );
}

function ReferralSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="20" width="50" height="32" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="76" y="20" width="20" height="32" rx="4" fill="var(--line)" stroke="var(--teal)" strokeWidth="1"/>
      <rect x="106" y="20" width="34" height="32" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <path d="M41 34h18M66 34h4M100 34h16" stroke="var(--line)" strokeWidth="1.2"/>
      <path d="M70 28l6 6-6 6M90 28l-6 6 6 6" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="16" y="66" width="124" height="28" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="28" y="80" width="40" height="4" rx="2" fill="var(--line)"/>
      <rect x="76" y="76" width="50" height="4" rx="2" fill="var(--line)"/>
      <circle cx="132" cy="80" r="6" fill="var(--teal)" opacity="0.5"/>
      <path d="M129 80l2 2 4-4" stroke="var(--btn-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AuthSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="20" y="16" width="110" height="52" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="30" y="26" width="60" height="6" rx="3" fill="var(--teal)" opacity="0.5"/>
      <rect x="30" y="38" width="80" height="5" rx="2.5" fill="var(--line)"/>
      <rect x="30" y="48" width="70" height="5" rx="2.5" fill="var(--line)"/>
      <rect x="30" y="58" width="50" height="5" rx="2.5" fill="var(--line)"/>
      <circle cx="116" cy="44" r="10" fill="var(--teal)" opacity="0.25" stroke="var(--teal)" strokeWidth="1.3"/>
      <path d="M112 44l2.5 2.5 5-5" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="20" y="78" width="60" height="28" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="90" y="78" width="40" height="28" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <circle cx="50" cy="88" r="5" fill="var(--teal)" opacity="0.5"/>
      <rect x="62" y="86" width="10" height="3" rx="1.5" fill="var(--line)"/>
    </svg>
  );
}

function CodingSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="12" width="128" height="80" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="24" y="22" width="52" height="6" rx="3" fill="var(--teal)" opacity="0.5"/>
      <rect x="24" y="34" width="104" height="5" rx="2.5" fill="var(--line)"/>
      <rect x="24" y="44" width="88" height="5" rx="2.5" fill="var(--teal)" opacity="0.3"/>
      <rect x="24" y="54" width="96" height="5" rx="2.5" fill="var(--line)"/>
      <rect x="24" y="64" width="72" height="5" rx="2.5" fill="var(--line)"/>
      <rect x="16" y="100" width="128" height="10" rx="5" fill="var(--grad)"/>
      <path d="M68 105l3 3 4-4" stroke="var(--btn-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="100" y="18" width="20" height="12" rx="3" fill="var(--green)" opacity="0.2" stroke="var(--green)" strokeWidth="1"/>
      <rect x="104" y="22" width="12" height="2" rx="1" fill="var(--green)" opacity="0.7"/>
    </svg>
  );
}

function ChargeSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="16" width="64" height="80" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="24" y="24" width="48" height="6" rx="3" fill="var(--teal)" opacity="0.5"/>
      <rect x="24" y="36" width="36" height="24" rx="3" fill="var(--surface)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="28" y="42" width="24" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="28" y="50" width="16" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="24" y="68" width="48" height="20" rx="3" fill="var(--grad)" opacity="0.5"/>
      <rect x="16" y="100" width="64" height="10" rx="5" fill="var(--line)"/>
      <path d="M88 28l8 8-8 8M110 44h8" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="88" y="54" width="56" height="42" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="96" y="64" width="30" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="96" y="74" width="40" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="96" y="84" width="20" height="3" rx="1.5" fill="var(--line)"/>
    </svg>
  );
}

function ClaimsSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="16" width="60" height="40" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="84" y="16" width="60" height="40" rx="6" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <path d="M30 32l4 4 8-8M92 32l4 4 8-8" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="16" y="66" width="128" height="6" rx="3" fill="var(--line)"/>
      <rect x="16" y="78" width="96" height="6" rx="3" fill="var(--line)"/>
      <rect x="16" y="90" width="60" height="16" rx="6" fill="var(--grad)"/>
      <path d="M34 98l3 3 5-5" stroke="var(--btn-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="114" cy="38" r="10" fill="var(--green)" opacity="0.2" stroke="var(--green)" strokeWidth="1.2"/>
      <path d="M110 38l3 3 6-6" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PaymentSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="20" width="50" height="72" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="74" y="20" width="70" height="72" rx="6" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <rect x="24" y="32" width="34" height="4" rx="2" fill="var(--teal)" opacity="0.6"/>
      <rect x="24" y="42" width="28" height="4" rx="2" fill="var(--line)"/>
      <rect x="24" y="52" width="34" height="4" rx="2" fill="var(--line)"/>
      <rect x="24" y="62" width="20" height="4" rx="2" fill="var(--line)"/>
      <rect x="84" y="32" width="50" height="34" rx="3" fill="var(--grad)" opacity="0.3" stroke="var(--teal)" strokeWidth="1"/>
      <rect x="84" y="76" width="50" height="5" rx="2.5" fill="var(--line)"/>
      <rect x="84" y="86" width="30" height="5" rx="2.5" fill="var(--green)" opacity="0.5"/>
      <circle cx="136" cy="48" r="8" fill="var(--teal)" opacity="0.4"/>
      <path d="M133 48l2 2 4-4" stroke="var(--teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DenialSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="14" width="56" height="40" rx="6" fill="var(--surface)" stroke="var(--line)" strokeWidth="1"/>
      <path d="M44 26l-8 8 8 8" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <path d="M44 26l-8 8 8 8" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 44 34)"/>
      <circle cx="44" cy="34" r="8" fill="var(--teal)" opacity="0.15" stroke="var(--teal)" strokeWidth="1"/>
      <rect x="80" y="14" width="64" height="34" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="88" y="22" width="48" height="4" rx="2" fill="var(--line)"/>
      <rect x="88" y="32" width="36" height="4" rx="2" fill="var(--teal)" opacity="0.5"/>
      <rect x="16" y="64" width="128" height="6" rx="3" fill="var(--line)"/>
      <rect x="16" y="76" width="80" height="24" rx="6" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <path d="M32 88l4 4 8-8" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="16" width="60" height="48" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="18" y="20" width="22" height="14" rx="3" fill="var(--teal)" opacity="0.3"/>
      <rect x="44" y="20" width="28" height="6" rx="3" fill="var(--line)"/>
      <rect x="44" y="30" width="20" height="4" rx="2" fill="var(--line)"/>
      <rect x="18" y="38" width="54" height="4" rx="2" fill="var(--line)"/>
      <rect x="18" y="46" width="40" height="4" rx="2" fill="var(--green)" opacity="0.4"/>
      <rect x="84" y="16" width="60" height="48" rx="6" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <rect x="92" y="24" width="20" height="20" rx="4" fill="var(--teal)" opacity="0.3"/>
      <rect x="118" y="28" width="16" height="4" rx="2" fill="var(--line)"/>
      <rect x="118" y="36" width="12" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="92" y="50" width="42" height="4" rx="2" fill="var(--line)"/>
      <circle cx="130" cy="44" r="5" fill="var(--green)" opacity="0.4"/>
      <path d="M128 44l1.5 1.5 3-3" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="16" y="72" width="128" height="28" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="28" y="84" width="44" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="28" y="92" width="28" height="3" rx="1.5" fill="var(--teal)" opacity="0.5"/>
      <rect x="88" y="82" width="44" height="14" rx="4" fill="var(--grad)" opacity="0.4"/>
      <path d="M102 89l2 2 3-3" stroke="var(--btn-ink)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PatientSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="16" y="14" width="50" height="36" rx="6" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <circle cx="41" cy="28" r="6" fill="var(--teal)" opacity="0.5"/>
      <path d="M35 32l1.5 1.5 3-3" stroke="var(--teal)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="32" y="38" width="18" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="74" y="14" width="70" height="34" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="82" y="22" width="54" height="4" rx="2" fill="var(--line)"/>
      <rect x="82" y="30" width="40" height="4" rx="2" fill="var(--line)"/>
      <rect x="82" y="38" width="28" height="3" rx="1.5" fill="var(--line)"/>
      <rect x="16" y="60" width="128" height="42" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="26" y="72" width="50" height="4" rx="2" fill="var(--line)"/>
      <rect x="26" y="82" width="100" height="4" rx="2" fill="var(--line)"/>
      <rect x="26" y="92" width="70" height="4" rx="2" fill="var(--teal)" opacity="0.4"/>
      <circle cx="120" cy="78" r="10" fill="var(--teal)" opacity="0.2" stroke="var(--teal)" strokeWidth="1.2"/>
      <path d="M116 78l2 2 4-4" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CredentialingSvg() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5"/>
      <rect x="20" y="14" width="55" height="70" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="28" y="22" width="38" height="30" rx="3" fill="var(--surface)" stroke="var(--line)" strokeWidth="1"/>
      <circle cx="47" cy="35" r="8" fill="var(--teal)" opacity="0.3"/>
      <path d="M43 35l2 2 4-4" stroke="var(--teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="28" y="58" width="38" height="4" rx="2" fill="var(--line)"/>
      <rect x="28" y="66" width="28" height="4" rx="2" fill="var(--line)"/>
      <rect x="28" y="28" width="38" height="4" rx="2" fill="var(--green)" opacity="0.3"/>
      <rect x="84" y="24" width="60" height="44" rx="6" fill="var(--soft)" stroke="var(--teal)" strokeWidth="1.2"/>
      <rect x="92" y="32" width="44" height="26" rx="3" fill="var(--grad)" opacity="0.2" stroke="var(--teal)" strokeWidth="1"/>
      <path d="M106 42l3 3 5-5" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="84" y="76" width="60" height="4" rx="2" fill="var(--line)"/>
      <rect x="84" y="90" width="60" height="20" rx="6" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
      <rect x="92" y="98" width="44" height="4" rx="2" fill="var(--green)" opacity="0.5"/>
    </svg>
  );
}

const svcImageMap: Record<number, () => JSX.Element> = {
  0: SchedulingSvg,
  1: EligibilitySvg,
  2: NetworkSvg,
  3: ReferralSvg,
  4: AuthSvg,
  5: CodingSvg,
  6: ChargeSvg,
  7: ClaimsSvg,
  8: PaymentSvg,
  9: DenialSvg,
  10: ArSvg,
  11: PatientSvg,
  12: CredentialingSvg,
};

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="svc-check-list">
      {items.map((item) => (
        <li key={item}>
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  const t = useT();
  const [filter, setFilter] = useState<ServiceGroup>('front');
  const [active, setActive] = useState(0);

  const categories = useMemo(
    () =>
      [
        { id: 'front' as const, label: t.services.categories.front },
        { id: 'billing' as const, label: t.services.categories.billing },
        { id: 'recovery' as const, label: t.services.categories.recovery },
        { id: 'enrollment' as const, label: t.services.categories.enrollment },
      ],
    [t.services],
  );

  const filtered = useMemo(() => {
    const items = t.services.items.map((svc, index) => ({ ...svc, index }));
    return items.filter((svc) => svc.group === filter);
  }, [filter, t.services.items]);

  const selectedIndex = filtered.findIndex((svc) => svc.index === active);
  const displayIndex = selectedIndex >= 0 ? selectedIndex : 0;
  const activeInFilter = filtered[displayIndex] ?? filtered[0];
  const detail = activeInFilter ? t.services.items[activeInFilter.index] : t.services.items[0];
  const SvcImageComponent = detail ? svcImageMap[activeInFilter!.index] : null;

  const pickFilter = (id: ServiceGroup) => {
    setFilter(id);
    const first = t.services.items.findIndex((svc) => svc.group === id);
    if (first >= 0) setActive(first);
  };

  return (
    <section className="landing-section band services-sec" id="services">
      <div className="wrap">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title_a}
          titleAccent={t.services.title_b}
          description={t.services.sub}
          center={false}
        />

        <div className="services-shell reveal">
          <aside className="services-sidebar">
            <div className="services-tabs" role="tablist" aria-label="Service categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat.id}
                  className={`services-tab${filter === cat.id ? ' on' : ''}`}
                  onClick={() => pickFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <ul className="services-menu" role="list">
              {filtered.map((svc, i) => (
                <li key={svc.title}>
                  <button
                    type="button"
                    className={`services-menu-item${activeInFilter?.index === svc.index ? ' on' : ''}`}
                    onClick={() => setActive(svc.index)}
                  >
                    <span className="services-menu-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="services-menu-text">
                      <strong>{svc.title}</strong>
                      <small>{svc.tagline}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {detail && (
            <article className="services-panel" key={detail.title}>
              <div className="services-panel-head">
                <div className="services-panel-head-content">
                  <span className="services-panel-tag">
                    {t.services.categories[detail.group as ServiceGroup]}
                  </span>
                  <h3>{detail.title}</h3>
                  <p className="text-body">{detail.intro}</p>
                </div>
                <div className="services-panel-image">
                  <img src="/Scheduling Patient Appointments.png" alt={detail.title} width="160" height="120" />
                </div>
              </div>

              <div className="services-panel-cols">
                <div className="services-panel-col">
                  <h4>{t.services.includesLabel}</h4>
                  <CheckList items={detail.includes} />
                </div>
                <div className="services-panel-col">
                  <h4>{t.services.benefitsLabel}</h4>
                  <CheckList items={detail.benefits} />
                </div>
              </div>

              {'common' in detail && detail.common && (
                <div className="services-panel-common">
                  <h4>{t.services.commonLabel}</h4>
                  <div className="services-common-pills">
                    {detail.common.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
