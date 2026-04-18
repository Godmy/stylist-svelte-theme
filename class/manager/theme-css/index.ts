import { INTERACTION_MOTION } from '$stylist/interaction/const/record/interaction-motion';
import { TOKEN_LAYOUT_SIZE } from '$stylist/layout/const/enum/layout-size';
import { LAYOUT_GRADIENTS } from '$stylist/layout/const/record/layout-gradients';
import { LAYOUT_ELEVATION_SEMANTIC } from '$stylist/layout/const/record/layout-elevation-semantic';
import { LAYOUT_THEME } from '$stylist/layout/const/record/layout-theme';
import type { Theme } from '$stylist/theme/type/struct/theme';

export class ManagerThemeCSS {
	static applyVars(
		theme: Theme,
		element: HTMLElement = document.documentElement
	): void {
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

	static removeVars(
		theme: Theme,
		element: HTMLElement = document.documentElement
	): void {
		const keys = this.getThemeCSSVarKeys(theme);
		for (const key of keys) {
			element.style.removeProperty(key);
		}
	}

	static getVar(
		name: string,
		element: HTMLElement = document.documentElement
	): string {
		return getComputedStyle(element).getPropertyValue(name).trim();
	}

	static convertToCSSVars(theme: Theme): Record<string, string> {
		const vars: Record<string, string> = {};
		const systemTheme = {
			motion: INTERACTION_MOTION,
			size: TOKEN_LAYOUT_SIZE,
			gradients: LAYOUT_GRADIENTS,
			elevation: LAYOUT_ELEVATION_SEMANTIC,
			layout: LAYOUT_THEME
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
		return Object.entries(obj).filter((entry): entry is [string, string] => typeof entry[1] === 'string');
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
		const keys: string[] = [];
		const systemTheme = {
			motion: INTERACTION_MOTION,
			size: TOKEN_LAYOUT_SIZE,
			gradients: LAYOUT_GRADIENTS,
			elevation: LAYOUT_ELEVATION_SEMANTIC,
			layout: LAYOUT_THEME
		};
		const collectKeys = (obj: Record<string, unknown>, prefix: string): void => {
			for (const [key, value] of Object.entries(obj)) {
				const segment = `${prefix}-${key}`;
				if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
					collectKeys(value as Record<string, unknown>, segment);
					continue;
				}

				if (typeof value === 'string' || typeof value === 'number') {
					keys.push(this.toCSSCustomPropertySegment(segment));
				}
			}
		};

		for (const [category, values] of Object.entries(systemTheme)) {
			if (values === null || typeof values !== 'object') continue;
			collectKeys(values as Record<string, unknown>, category);
		}

		for (const [category, values] of Object.entries(theme)) {
			if (values === null || typeof values !== 'object') continue;
			if (category === 'domain') {
				for (const [domainCategory, domainValues] of Object.entries(values)) {
					if (domainValues === null || typeof domainValues !== 'object') continue;
					collectKeys(domainValues as Record<string, unknown>, `color-${domainCategory}`);
				}
				continue;
			}

			const prefix = category === 'colors' ? 'color' : category;
			collectKeys(values as Record<string, unknown>, prefix);
		}

		return keys;
	}

	private static getDeclarations(vars: Record<string, string>): string {
		return Object.entries(vars)
			.map(([key, value]) => `  ${key}: ${value};`)
			.join('\n');
	}
}
