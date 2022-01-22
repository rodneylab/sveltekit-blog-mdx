// https://gist.github.com/acoyfellow/d8e86979c66ebea25e1643594e38be73
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
// https://scotthelme.co.uk/content-security-policy-an-introduction/
// scanner: https://securityheaders.com/

const rootDomain = import.meta.env.VITE_DOMAIN; // or your server IP for dev

const directives = {
  'base-uri': ["'self'"],
  'child-src': ["'self'"],
  'connect-src': ["'self'", 'ws://localhost:*'],
  // 'connect-src': ["'self'", 'ws://localhost:*', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
  'img-src': ["'self'", 'data:'],
  'font-src': ["'self'", 'data:'],
  'form-action': ["'self'"],
  'frame-ancestors': ["'self'"],
  'frame-src': [
    "'self'",
    // "https://*.stripe.com",
    // "https://*.facebook.com",
    // "https://*.facebook.net",
    // 'https://hcaptcha.com',
    // 'https://*.hcaptcha.com',
  ],
  'manifest-src': ["'self'"],
  'media-src': ["'self'", 'data:'],
  'object-src': ["'none'"],
  'style-src': ["'self'", "'unsafe-inline'"],
  // 'style-src': ["'self'", "'unsafe-inline'", 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
  'default-src': [
    "'self'",
    rootDomain,
    `ws://${rootDomain}`,
    // 'https://*.google.com',
    // 'https://*.googleapis.com',
    // 'https://*.firebase.com',
    // 'https://*.gstatic.com',
    // 'https://*.cloudfunctions.net',
    // 'https://*.algolia.net',
    // 'https://*.facebook.com',
    // 'https://*.facebook.net',
    // 'https://*.stripe.com',
    // 'https://*.sentry.io',
  ],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    // 'https://*.stripe.com',
    // 'https://*.facebook.com',
    // 'https://*.facebook.net',
    // 'https://hcaptcha.com',
    // 'https://*.hcaptcha.com',
    // 'https://*.sentry.io',
    // 'https://polyfill.io',
  ],
  'worker-src': ["'self'"],
  // remove report-to & report-uri if you do not want to use Sentry reporting
  'report-to': ["'csp-endpoint'"],
  'report-uri': [
    `https://sentry.io/api/${import.meta.env.VITE_SENTRY_PROJECT_ID}/security/?sentry_key=${
      import.meta.env.VITE_SENTRY_KEY
    }`,
  ],
};

const csp = Object.entries(directives)
  .map(([key, arr]) => key + ' ' + arr.join(' '))
  .join('; ');

export async function handle({ event, resolve }) {
  const response = await resolve(event);
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'no-referrer');
  response.headers.set(
    'Permissions-Policy',
    'accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()',
  );
  response.headers.set('X-Content-Type-Options', 'nosniff');
  /* Switch from Content-Security-Policy-Report-Only to Content-Security-Policy once you are satisifed policy is what you want
   * on switch comment out the Report-Only line
   */
  response.headers.set('Content-Security-Policy-Report-Only', csp);
  // response.headers.set('Content-Security-Policy', csp);
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set(
    'Expect-CT',
    `max-age=86400, report-uri="https://sentry.io/api/${
      import.meta.env.VITE_SENTRY_PROJECT_ID
    }/security/?sentry_key=${import.meta.env.VITE_SENTRY_KEY}"`,
  );
  response.headers.set(
    'Report-To',
    `{group: "csp-endpoint", "max_age": 10886400, "endpoints": [{"url": "https://sentry.io/api/${
      import.meta.env.VITE_SENTRY_PROJECT_ID
    }/security/?sentry_key=${import.meta.env.VITE_SENTRY_KEY}"}]}`,
  );
  return response;
}
