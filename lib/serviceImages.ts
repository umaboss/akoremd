/** Local service images keyed by `t.services.items` index. */
export const SERVICE_IMAGE_PATHS: Record<number, string> = {
  0: '/services/scheduling-patient-appointments.jpg',
  1: '/Eligibility-Benefits-Verification.png',
  2: '/services/provider-network-verification.jpg',
  3: '/services/referral-management.jpg',
  4: '/services/prior-authorization.jpg',
  5: '/medical-coding-service.png',
  6: '/services/charge-entry.jpg',
  7: '/claim-subimsiom.png',
  8: '/services/payment-posting.jpg',
  9: '/services/denial-appeals.jpg',
  10: '/services/ar-follow-up.jpg',
  11: '/pexels-karola-g-6627851.jpg',
  12: '/Credentialing-Provider-Enrollment1.png',
};

export function getServiceImagePath(index: number): string {
  return SERVICE_IMAGE_PATHS[index] ?? SERVICE_IMAGE_PATHS[0];
}
