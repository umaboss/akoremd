/** Local service images keyed by `t.services.items` index. */
export const SERVICE_IMAGE_PATHS: Record<number, string> = {
  0: '/services/scheduling-patient-appointments.jpg',
  1: '/services/eligibility-benefits-verification.jpg',
  2: '/services/provider-network-verification.jpg',
  3: '/services/referral-management.jpg',
  4: '/services/prior-authorization.jpg',
  5: '/services/medical-coding.jpg',
  6: '/services/charge-entry.jpg',
  7: '/services/claims-submission.jpg',
  8: '/services/payment-posting.jpg',
  9: '/services/denial-appeals.jpg',
  10: '/services/ar-follow-up.jpg',
  11: '/services/patient-billing-support.jpg',
  12: '/services/credentialing-enrollment.jpg',
};

export function getServiceImagePath(index: number): string {
  return SERVICE_IMAGE_PATHS[index] ?? SERVICE_IMAGE_PATHS[0];
}
