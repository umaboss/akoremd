export type PartnerLogo = {
  name: string;
  logo: string;
  variant?: 'partner' | 'badge';
};

export const TRUST_BADGES: PartnerLogo[] = [
  { name: 'Google Reviews', logo: '/google.png', variant: 'badge' },
  { name: 'BBB Accredited', logo: '/bbb.png', variant: 'badge' },
  { name: 'NC', logo: '/nc.png', variant: 'badge' },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'Kareo', logo: '/partners/kareo.png', variant: 'partner' },
  { name: 'Athenahealth', logo: '/partners/athenahealth.png', variant: 'partner' },
  { name: 'AdvancedMD', logo: '/partners/advancedmd.png', variant: 'partner' },
  { name: 'eClinicalWorks', logo: '/partners/eclinicalworks.png', variant: 'partner' },
  { name: 'NextGen', logo: '/partners/nextgen.png', variant: 'partner' },
  { name: 'DrChrono', logo: '/partners/drchrono.png', variant: 'partner' },
  { name: 'Office Ally', logo: '/partners/office-ally.png', variant: 'partner' },
  { name: 'Availity', logo: '/partners/availity.png', variant: 'partner' },
];

export const TRUST_LOGOS: PartnerLogo[] = [...TRUST_BADGES, ...PARTNER_LOGOS];
