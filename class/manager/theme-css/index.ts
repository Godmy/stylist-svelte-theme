import { INTERACTION_MOTION } from '$stylist/theme/const/record/interaction-motion';
import { TOKEN_SIZE_REM } from '$stylist/design-token/const/array/size-rem';
import { LAYOUT_GRADIENTS } from '$stylist/theme/const/record/layout-gradients';
import { LAYOUT_ELEVATION_SEMANTIC } from '$stylist/theme/const/record/layout-elevation-semantic';
import { THEME_LAYOUT } from '$stylist/theme/const/record/theme-layout';
import { TOKEN_OPACITY } from '$stylist/design-token/const/object/opacity';
import type { Theme } from '$stylist/theme/type/object/theme';
import { TOKEN_FONT_FAMILY } from '$stylist/design-token/const/object/font-family';
import { TOKEN_BORDER_WIDTH } from '$stylist/design-token/const/object/border-width';
import { DESIGN_TOKEN_FOCUS } from '$stylist/design-token/const/preset/focus';
import { DESIGN_TOKEN_DENSITY } from '$stylist/design-token/const/preset/density';
import { DESIGN_TOKEN_CONTENT_SIZE } from '$stylist/design-token/const/preset/content-size';
import { TOKEN_FONT_SIZE_RELATIVE } from '$stylist/design-token/const/object/font-size-relative';

export class ManagerThemeCSS {
	static applyVars(theme: Theme, element: HTMLElement = document.documentElement): void {
		const vars = this.convertToCSSVars(theme);
		this.setVars(vars, element);
	}

	static setVars(
		vars: Record<string, string>,
		element: HTMLElement = document.documentElement
	): void {
		const style = element.style;
		for (const [key, value] of Object.entries(vars)) {
			style.setProperty(key, value);
		}
	}

	static removeVars(theme: Theme, element: HTMLElement = document.documentElement): void {
		const keys = this.getThemeCSSVarKeys(theme);
		for (const key of keys) {
			element.style.removeProperty(key);
		}
	}

	static getVar(name: string, element: HTMLElement = document.documentElement): string {
		return getComputedStyle(element).getPropertyValue(name).trim();
	}

	static convertToCSSVars(theme: Theme): Record<string, string> {
		const vars: Record<string, string> = {};
		const systemTheme = {
			font: TOKEN_FONT_FAMILY,
			fontRelative: TOKEN_FONT_SIZE_RELATIVE,
			border: { width: TOKEN_BORDER_WIDTH },
			focus: DESIGN_TOKEN_FOCUS,
			density: DESIGN_TOKEN_DENSITY.comfortable,
			content: DESIGN_TOKEN_CONTENT_SIZE,
			motion: INTERACTION_MOTION,
			size: TOKEN_SIZE_REM,
			gradients: LAYOUT_GRADIENTS,
			elevation: LAYOUT_ELEVATION_SEMANTIC,
			layout: THEME_LAYOUT,
			opacity: TOKEN_OPACITY
		};
		const flatten = (obj: Record<string, unknown>, prefix: string): void => {
			for (const [key, value] of Object.entries(obj)) {
				const segment = `${prefix}-${key}`;
				if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
					flatten(value as Record<string, unknown>, segment);
					continue;
				}

				if (typeof value === 'string' || typeof value === 'number') {
					vars[this.toCSSCustomPropertySegment(segment)] = String(value);
				}
			}
		};

		for (const [category, values] of Object.entries(systemTheme)) {
			if (values === null || typeof values !== 'object') continue;
			flatten(values as Record<string, unknown>, category);
		}

		for (const [category, values] of Object.entries(theme)) {
			if (values === null || typeof values !== 'object') continue;
			if (category === 'domain') {
				for (const [domainCategory, domainValues] of Object.entries(values)) {
					if (domainValues === null || typeof domainValues !== 'object') continue;
					flatten(domainValues as Record<string, unknown>, `color-${domainCategory}`);
				}
				continue;
			}

			const prefix = category === 'colors' ? 'color' : category;
			flatten(values as Record<string, unknown>, prefix);
		}

		return vars;
	}

	static generateCSS(theme: Theme, selector = ':root'): string {
		const vars = this.convertToCSSVars(theme);
		const declarations = this.getDeclarations(vars);
		return `${selector} {\n${declarations}\n}`;
	}

	static toCSSCustomPropertySegment(str: string): string {
		return `--${this.toKebabCase(str)}`;
	}

	static toKebabCase(str: string): string {
		return str
			.replace(/([a-z])([A-Z])/g, '$1-$2')
			.replace(/[\s_]+/g, '-')
			.toLowerCase();
	}

	static getEntries<T extends object>(obj: T): Array<[string, string]> {
		return Object.entries(obj).filter(
			(entry): entry is [string, string] => typeof entry[1] === 'string'
		);
	}

	static mergeDeclarations(
		...declarations: Array<Record<string, string> | undefined>
	): Record<string, string> {
		return Object.assign({}, ...declarations.filter(Boolean));
	}

	static normalizeClassNames(...classes: Array<string | undefined | null>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static isDark(theme: Theme): boolean {
		const themeName = (theme as { name?: string }).name;
		return themeName?.toLowerCase().includes('dark') ?? false;
	}

	private static getThemeCSSVarKeys(theme: Theme): string[] {
		return Object.keys(this.convertToCSSVars(theme));
	}

	private static getDeclarations(vars: Record<string, string>): string {
		return Object.entries(vars)
			.map(([key, value]) => `  ${key}: ${value};`)
			.join('\n');
	}
}
