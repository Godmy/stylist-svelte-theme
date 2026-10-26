import { describe, expect, it } from 'vitest';
import { HTML_LAYER_ORDER } from '$stylist/html/const/array/html-layer-order';

// Theme components sit on top of the skin: the canonical layer order, zero-specificity selectors
// (one class at most for overrides of a child component) and font stacks only from tokens.
const sources = import.meta.glob<string>('../../../component/*/*/index.svelte', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const styled = Object.entries(sources)
	// The story chrome of the sandbox is tooling, not a themed component, so it keeps its own styles.
	.filter(([path]) => !path.includes('/molecule/story/'))
	.filter(([, source]) => source.includes('<style>'))
	.map(([path, source]) => ({
		family: path.replace('../../../component/', '').replace('/index.svelte', ''),
		css: source.slice(source.indexOf('<style>'), source.indexOf('</style>'))
	}));

/** Selector lines of the stylesheet: everything before `{` that is not an at-rule or keyframe. */
function selectors(css: string): string[] {
	return css
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line.endsWith('{') && !line.startsWith('@') && line !== ':global {')
		.map((line) => line.slice(0, -1).trim())
		.filter((selector) => !/^(\d+%|from|to)(,|$)/.test(selector))
		.flatMap((selector) => selector.split(/,(?![^(]*\))/).map((part) => part.trim()))
		.filter(Boolean);
}

describe('theme style layer', () => {
	it('covers every styled theme component', () => {
		expect(styled.length).toBeGreaterThanOrEqual(7);
	});

	it.each(styled)('$family orders the layers and keeps rules in @layer theme', ({ css }) => {
		expect(css).toContain(`@layer ${HTML_LAYER_ORDER.join(', ')};`);
		expect(css).toContain('@layer theme {');
	});

	it.each(styled)('$family uses zero-specificity selectors', ({ css }) => {
		for (const selector of selectors(css)) expect(selector).toMatch(/^:where\(/);
	});

	it.each(styled)(
		'$family takes font stacks from tokens and leaves body leading to the skin',
		({ css }) => {
			for (const [, value] of css.matchAll(/font-family:\s*([^;]+);/g))
				expect(value).toMatch(/^var\(--font-[a-z]+[,)]/);
			expect(css).not.toMatch(/line-height:\s*var\(--line-height-(normal|relaxed)/);
		}
	);
});
