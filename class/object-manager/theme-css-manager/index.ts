import type { Theme } from '$stylist/theme/type/struct/theme/theme';

export class ThemeCSSManager {
	/**
	 * Применяет CSS переменные из темы к элементу
	 */
	static applyVars(
		theme: Theme,
		element: HTMLElement = document.documentElement
	): void {
		const vars = this.convertToCSSVars(theme);
		this.setVars(vars, element);
	}

	/**
	 * Устанавливает CSS переменные
	 */
	static setVars(
		vars: Record<string, string>,
		element: HTMLElement = document.documentElement
	): void {
		const style = element.style;
		for (const [key, value] of Object.entries(vars)) {
			style.setProperty(key, value);
		}
	}

	/**
	 * Удаляет CSS переменные из темы
	 */
	static removeVars(
		theme: Theme,
		element: HTMLElement = document.documentElement
	): void {
		const keys = this.getThemeCSSVarKeys(theme);
		for (const key of keys) {
			element.style.removeProperty(key);
		}
	}

	/**
	 * Получает значение CSS переменной
	 */
	static getVar(
		name: string,
		element: HTMLElement = document.documentElement
	): string {
		return getComputedStyle(element).getPropertyValue(name).trim();
	}

	/**
	 * Конвертирует тему в CSS переменные
	 */
	static convertToCSSVars(theme: Theme): Record<string, string> {
		const vars: Record<string, string> = {};

		const flatten = (obj: Record<string, unknown>, prefix: string): void => {
			for (const [key, value] of Object.entries(obj)) {
				const segment = `${prefix}-${key}`;
				if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
					flatten(value as Record<string, unknown>, segment);
				} else if (typeof value === 'string' || typeof value === 'number') {
					vars[this.toCSSCustomPropertySegment(segment)] = String(value);
				}
			}
		};

		for (const [category, values] of Object.entries(theme)) {
			if (category === 'scheme' || values === null || typeof values !== 'object') continue;
			// colors (plural) → --color-* (singular) to match StyleManager convention
			const prefix = category === 'colors' ? 'color' : category;
			flatten(values as Record<string, unknown>, prefix);
		}

		return vars;
	}

	/**
	 * Генерирует CSS из темы
	 */
	static generateCSS(theme: Theme, selector = ':root'): string {
		const vars = this.convertToCSSVars(theme);
		const declarations = this.getDeclarations(vars);
		return `${selector} {\n${declarations}\n}`;
	}

	/**
	 * Преобразует строку в CSS custom property формат
	 */
	static toCSSCustomPropertySegment(str: string): string {
		return `--${this.toKebabCase(str)}`;
	}

	/**
	 * Преобразует строку в kebab-case
	 */
	static toKebabCase(str: string): string {
		return str
			.replace(/([a-z])([A-Z])/g, '$1-$2')
			.replace(/[\s_]+/g, '-')
			.toLowerCase();
	}

	/**
	 * Получает строковые entries объекта
	 */
	static getEntries<T extends object>(obj: T): Array<[string, string]> {
		return Object.entries(obj).filter((entry): entry is [string, string] => typeof entry[1] === 'string');
	}

	/**
	 * Объединяет CSS декларации
	 */
	static mergeDeclarations(
		...declarations: Array<Record<string, string> | undefined>
	): Record<string, string> {
		return Object.assign({}, ...declarations.filter(Boolean));
	}

	/**
	 * Нормализует имена классов
	 */
	static normalizeClassNames(...classes: Array<string | undefined | null>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	/**
	 * Проверяет, является ли тема тёмной
	 */
	static isDark(theme: Theme): boolean {
		const themeName = (theme as any).name;
		return themeName?.toLowerCase().includes('dark') ?? false;
	}

	// Приватные методы

	private static getThemeCSSVarKeys(theme: Theme): string[] {
		const keys: string[] = [];
		for (const [category, values] of Object.entries(theme)) {
			if (typeof values === 'object') {
				for (const key of Object.keys(values)) {
					keys.push(this.toCSSCustomPropertySegment(`${category}-${key}`));
				}
			}
		}
		return keys;
	}

	private static getDeclarations(vars: Record<string, string>): string {
		return Object.entries(vars)
			.map(([key, value]) => `  ${key}: ${value};`)
			.join('\n');
	}
}
