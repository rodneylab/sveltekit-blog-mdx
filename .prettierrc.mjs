/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	arrowParens: 'always',
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 100,
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
