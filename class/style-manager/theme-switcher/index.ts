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
				gap: 0.75rem;
				width: 100%;
			}

			.c-theme-switcher__title {
				display: inline-flex;
				align-items: center;
				gap: var(--spacing-2);
				color: var(--text, var(--color-text-primary));
			}

			.c-theme-switcher__list {
				display: grid;
				gap: 0.6rem;
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
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
				background:
					linear-gradient(
						180deg,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 97%, white 3%) 0%,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 93%, var(--bg, var(--color-background-secondary)) 7%) 100%
					);
				color: var(--text, var(--color-text-primary));
				border-radius: 1rem;
				padding: 0.72rem 0.82rem;
				cursor: pointer;
				text-align: left;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
				transition:
					border-color var(--duration-120) var(--animation-ease),
					background-color var(--duration-120) var(--animation-ease),
					transform var(--duration-120) var(--animation-ease);
			}

			.c-theme-switcher__list--compact .c-theme-switcher__item {
				grid-template-columns: 0.65rem 1fr;
				padding: 0.7rem 0.78rem;
				min-height: var(--spacing-8);
			}

			.c-theme-switcher__item:hover {
				transform: translateY(-1px);
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 32%, var(--line, var(--color-border-primary)) 68%);
			}

			.c-theme-switcher__item--active {
				border-color: var(--accent, var(--color-primary-600));
				background:
					linear-gradient(
						180deg,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 84%, var(--accent, var(--color-primary-600)) 16%) 0%,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 90%, var(--accent, var(--color-primary-600)) 10%) 100%
					);
				box-shadow:
					0 10px 26px rgba(15, 23, 42, 0.08),
					inset 0 1px 0 rgba(255, 255, 255, 0.5);
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
