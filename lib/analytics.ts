/** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? '';

/**
 * Google Search Console HTML tag verification code.
 * Paste only the `content` value from the meta tag Google gives you.
 */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ?? '';

export function isGoogleAnalyticsEnabled(): boolean {
  return GA_MEASUREMENT_ID.length > 0;
}

export function isGoogleSiteVerificationEnabled(): boolean {
  return GOOGLE_SITE_VERIFICATION.length > 0;
}
