import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class StyleManagerThemeSwitcher {
	private static joinClasses(...values: Array<string | null | undefined | false>): string {
		return values
			.filter(Boolean)
			.map((value) => String(value).trim())
			.filter(Boolean)
			.join(' ');
	}

	static readonly headerIconName = 'palette';

	static root(className?: string): string {
		return StyleManagerThemeSwitcher.joinClasses('c-theme-switcher', className);
	}

	static header(): string {
		return 'c-theme-switcher__title';
	}

	static list(compact?: boolean): string {
		return StyleManagerThemeSwitcher.joinClasses(
			'c-theme-switcher__list',
			compact && 'c-theme-switcher__list--compact'
		);
	}

	static item(theme: TokenThemeScheme, activeTheme: TokenThemeScheme): string {
		return StyleManagerThemeSwitcher.joinClasses(
			'c-theme-switcher__item',
			theme === activeTheme && 'c-theme-switcher__item--active'
		);
	}

	static chip(): string {
		return 'c-theme-switcher__chip';
	}

	static name(): string {
		return 'c-theme-switcher__name';
	}

	static description(): string {
		return 'c-theme-switcher__description';
	}

	static getStyleSheet(): string {
		return `
			.c-theme-switcher {
				display: grid;
				gap: var(--spacing-3);
			}

			.c-theme-switcher__title {
				display: inline-flex;
				align-items: center;
				gap: var(--spacing-2);
				color: var(--text, var(--color-text-primary));
			}

			.c-theme-switcher__list {
				display: grid;
				gap: var(--spacing-2);
				grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
			}

			.c-theme-switcher__list--compact {
				grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
			}

			.c-theme-switcher__item {
				display: grid;
				gap: var(--spacing-1);
				align-items: center;
				grid-template-columns: 0.75rem 1fr;
				border: 1px solid var(--line, var(--color-border-primary));
				background: var(--surface, var(--color-background-primary));
				color: var(--text, var(--color-text-primary));
				border-radius: var(--border-radius-xl);
				padding: var(--spacing-2) var(--spacing-3);
				cursor: pointer;
				text-align: left;
			}

			.c-theme-switcher__list--compact .c-theme-switcher__item {
				grid-template-columns: 0.65rem 1fr;
				padding: var(--spacing-2) var(--spacing-2);
				min-height: var(--spacing-8);
			}

			.c-theme-switcher__item--active {
				border-color: var(--accent, var(--color-primary-600));
				box-shadow: var(--shadow-custom45);
			}

			.c-theme-switcher__chip {
				width: var(--spacing-3);
				height: var(--spacing-3);
				border-radius: var(--border-radius-full);
				border: 1px solid color-mix(in srgb, var(--color-text-primary) 18%, transparent);
			}

			.c-theme-switcher__name {
				font-weight: var(--font-weight-semibold);
				line-height: 1.2;
			}

			.c-theme-switcher__description {
				grid-column: 2;
				color: var(--muted, var(--color-text-secondary));
				font-size: var(--font-size-3);
				line-height: var(--line-height-tight);
			}
		`;
	}
}
