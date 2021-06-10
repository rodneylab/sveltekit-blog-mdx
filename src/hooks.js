// https://gist.github.com/acoyfellow/d8e86979c66ebea25e1643594e38be73
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
// https://scotthelme.co.uk/content-security-policy-an-introduction/
// scanner: https://securityheaders.com/

const rootDomain = import.meta.env.VITE_DOMAIN; // or your server IP for dev

const directives = {
	'base-uri': ["'self'"],
	'child-src': ["'self'"],
	'connect-src': ["'self'", 'ws://localhost:*'],
	'img-src': ["'self'", 'data:', import.meta.env.VITE_IMGIX_DOMAIN],
	'font-src': ["'self'", 'data:'],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': ["'self'"],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:'],
	'object-src': ["'none'"],
	'style-src': ["'self'", "'unsafe-inline'"],
	'default-src': ["'self'", rootDomain, `ws://${rootDomain}`],
	'script-src': ["'self'", "'unsafe-inline'"],
	'worker-src': ["'self'"],
	'report-to': ["'csp-endpoint'"],
	'report-uri': [
		`https://sentry.io/api/${import.meta.env.VITE_SENTRY_PROJECT_ID}/security/?sentry_key=${
			import.meta.env.VITE_SENTRY_KEY
		}`
	]
};

const csp = Object.entries(directives)
	.map(([key, arr]) => key + ' ' + arr.join(' '))
	.join('; ');

export async function handle({ request, resolve }) {
	const response = await resolve(request);
	console.log('handle', { ...response.headers });
	return {};
	return {
		...response,
		headers: {
			...response.headers,
			'X-Frame-Options': 'SAMEORIGIN',
			'Referrer-Policy': 'no-referrer',
			'Permissions-Policy':
				'accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()',
			'X-Content-Type-Options': 'nosniff',
			'Content-Security-Policy-Report-Only': csp,
			'Expect-CT': `max-age=86400, report-uri="https://sentry.io/api/${
				import.meta.env.VITE_SENTRY_PROJECT_ID
			}/security/?sentry_key=${import.meta.env.VITE_SENTRY_KEY}"`,
			'Report-To': `{group: "csp-endpoint", "max_age": 10886400, "endpoints": [{"url": "https://sentry.io/api/${
				import.meta.env.VITE_SENTRY_PROJECT_ID
			}/security/?sentry_key=${import.meta.env.VITE_SENTRY_KEY}"}]}`,
			'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
		}
	};
}
