export const SITE_URL = 'https://icrabuilders.com';

/** Absolute canonical URL for a pathname (matches trailingSlash: 'always'). */
export function canonicalUrl(pathname: string): string {
  const normalized =
    pathname === '/index.html' || pathname === ''
      ? '/'
      : pathname.endsWith('/')
        ? pathname
        : `${pathname}/`;

  return new URL(normalized, SITE_URL).href;
}
export const SITE_NAME = 'icrabuilders.com';
export const ACQUISITION_EMAIL = 'sales@desertrich.com';
export const GOOGLE_SITE_VERIFICATION = 'X7oYi-OXZPv3XTnusJXkQyA4qZWP17h_QJV86W0dPho';

/** Asking price shown on-page and in Product structured data. */
export const ASKING_PRICE = '$14,997';
export const ASKING_PRICE_VALUE = '14997';

/** Social share card (self-hosted — the previous Cloudflare Images URL 404s). */
export const OG_IMAGE_PATH = '/og.jpg';
export const OG_IMAGE_URL = new URL(OG_IMAGE_PATH, SITE_URL).href;

export const DISCLAIMER =
  'This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of the date shown and are subject to change.';

export function acquisitionMailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  params.set(
    'subject',
    subject ?? 'Domain acquisition inquiry: icrabuilders.com',
  );
  if (body) params.set('body', body);
  return `mailto:${ACQUISITION_EMAIL}?${params.toString()}`;
}
