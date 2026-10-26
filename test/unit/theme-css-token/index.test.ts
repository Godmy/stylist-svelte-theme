import { describe, expect, it } from 'vitest';
import { ManagerThemeCSS } from '$stylist/theme/class/manager/theme-css';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { TOKEN_SPACE } from '$stylist/design-token/const/object/space';
import { TOKEN_RADIUS } from '$stylist/design-token/const/object/radius';
import { TOKEN_FONT_SIZE } from '$stylist/design-token/const/object/font-size';
import { TOKEN_LINE_HEIGHT } from '$stylist/design-token/const/object/line-height';
import { TOKEN_FONT_WEIGHT } from '$stylist/design-token/const/object/font-weight';
import { TOKEN_LETTER_SPACING } from '$stylist/design-token/const/object/letter-spacing';
import { TOKEN_DURATION } from '$stylist/design-token/const/object/duration';
import { TOKEN_EASING } from '$stylist/design-token/const/object/easing';
import { TOKEN_Z_INDEX } from '$stylist/design-token/const/object/z-index';
import { RECORD_TOKEN_ALIAS } from '$stylist/design-token/const/record/token-alias';
import { TOKEN_FONT_FAMILY_MATH } from '$stylist/design-token/const/value/font-family-math';

const SCALES = [
	['space', TOKEN_SPACE],
	['radius', TOKEN_RADIUS],
	['font-size', TOKEN_FONT_SIZE],
	['line-height', TOKEN_LINE_HEIGHT],
	['font-weight', TOKEN_FONT_WEIGHT],
	['letter-spacing', TOKEN_LETTER_SPACING],
	['duration', TOKEN_DURATION],
	['easing', TOKEN_EASING],
	['z-index', TOKEN_Z_INDEX]
] as const;

const THEMES = [
	['light', THEME_MODE_LIGHT],
	['dark', THEME_MODE_DARK]
] as const;

describe('theme CSS global token scales', () => {
	it.each(THEMES)('%s theme emits every scale token without a prefix', (_, theme) => {
		const variables = ManagerThemeCSS.convertToCSSVars(theme);
		for (const [scale, tokens] of SCALES) {
			for (const [key, value] of Object.entries(tokens)) {
				const name = ManagerThemeCSS.toCSSCustomPropertySegment(`${scale}-${key}`);
				expect(name).not.toContain('.');
				expect(variables[name]).toBe(value);
			}
		}
	});

	it.each(THEMES)('%s theme resolves every legacy alias to its scale value', (_, theme) => {
		const variables = ManagerThemeCSS.convertToCSSVars(theme);
		for (const [legacy, token] of Object.entries(RECORD_TOKEN_ALIAS)) {
			expect(variables[token], token).toBeDefined();
			expect(variables[legacy], legacy).toBeDefined();
			if (variables[legacy].startsWith('var(')) {
				expect(variables[legacy]).toBe(`var(${token})`);
			}
		}
	});

	it.each(THEMES)('%s theme emits the math font beside the text families', (_, theme) => {
		const variables = ManagerThemeCSS.convertToCSSVars(theme);
		expect(variables['--font-math']).toBe(TOKEN_FONT_FAMILY_MATH);
		expect(variables['--font-sans']).toBeDefined();
	});

	it('keeps already emitted legacy names on their own values until the last reader moves', () => {
		const variables = ManagerThemeCSS.convertToCSSVars(THEME_MODE_LIGHT);
		expect(variables['--layout-spacing-1rem']).toBe('1rem');
		expect(variables['--layout-border-radius-md']).toBe(TOKEN_RADIUS['1-5']);
		expect(variables['--duration-120']).toBe('120ms');
		expect(variables['--z-index-docked']).toBe('10');
	});

	it.each(THEMES)('%s theme leaves site-owned and retired legacy names to the page', (_, theme) => {
		const variables = ManagerThemeCSS.convertToCSSVars(theme);
		// Sites define these on :root; an inline theme value would override them.
		for (const name of [
			'--radius-sm',
			'--radius-md',
			'--radius-lg',
			'--radius-xl',
			'--animation-ease'
		])
			expect(variables[name], name).toBeUndefined();
		for (const name of ['--spacing-2', '--border-radius-base', '--text-size-sm'])
			expect(variables[name], name).toBeUndefined();
		expect(Object.keys(variables).filter((name) => name.startsWith('--motion-'))).toEqual([]);
	});
});
