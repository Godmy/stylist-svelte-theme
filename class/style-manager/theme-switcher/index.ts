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

	static preview(): string {
		return 'c-theme-switcher__preview';
	}

	static previewSurface(): string {
		return 'c-theme-switcher__preview-surface';
	}

	static swatchRow(): string {
		return 'c-theme-switcher__swatch-row';
	}

	static swatch(): string {
		return 'c-theme-switcher__swatch';
	}

	static meta(): string {
		return 'c-theme-switcher__meta';
	}

	static badge(active?: boolean): string {
		return StyleManagerThemeSwitcher.joinClasses(
			'c-theme-switcher__badge',
			active && 'c-theme-switcher__badge--active'
		);
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
				gap: 0.85rem;
				grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
			}

			.c-theme-switcher__list--compact {
				grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
			}

			.c-theme-switcher__item {
				display: grid;
				gap: 0.75rem;
				align-items: start;
				grid-template-columns: 1fr auto;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
				background:
					linear-gradient(
						180deg,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 98%, white 2%) 0%,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 92%, var(--bg, var(--color-background-secondary)) 8%) 100%
					);
				color: var(--text, var(--color-text-primary));
				border-radius: 1.15rem;
				padding: 0.9rem;
				cursor: pointer;
				text-align: left;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
				transition:
					border-color var(--duration-120) var(--animation-ease),
					background-color var(--duration-120) var(--animation-ease),
					transform var(--duration-120) var(--animation-ease),
					box-shadow var(--duration-120) var(--animation-ease);
			}

			.c-theme-switcher__list--compact .c-theme-switcher__item {
				grid-template-columns: 1fr auto;
				padding: 0.72rem 0.8rem;
				min-height: 4.1rem;
			}

			.c-theme-switcher__item:hover {
				transform: translateY(-1px);
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 32%, var(--line, var(--color-border-primary)) 68%);
				box-shadow:
					0 14px 30px rgba(15, 23, 42, 0.08),
					inset 0 1px 0 rgba(255, 255, 255, 0.55);
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

			.c-theme-switcher__preview {
				grid-column: 1 / -1;
				display: grid;
				gap: 0.55rem;
			}

			.c-theme-switcher__preview-surface {
				height: 4.2rem;
				border-radius: 0.9rem;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 70%, transparent);
				box-shadow:
					inset 0 1px 0 rgba(255, 255, 255, 0.3),
					0 8px 20px rgba(15, 23, 42, 0.06);
			}

			.c-theme-switcher__swatch-row {
				display: flex;
				gap: 0.45rem;
			}

			.c-theme-switcher__swatch {
				width: 0.78rem;
				height: 0.78rem;
				border-radius: 999px;
				border: 1px solid rgba(15, 23, 42, 0.12);
			}

			.c-theme-switcher__meta {
				display: grid;
				gap: 0.18rem;
				align-content: start;
				min-width: 0;
			}

			.c-theme-switcher__chip,
			.c-theme-switcher__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				min-height: 1.5rem;
				padding: 0.22rem 0.55rem;
				border-radius: 999px;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 72%, transparent);
				background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 88%, white 12%);
				font-size: 0.7rem;
				font-weight: 700;
				letter-spacing: 0.04em;
				color: var(--muted, var(--color-text-secondary));
			}

			.c-theme-switcher__badge--active {
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 60%, transparent);
				color: var(--accent, var(--color-primary-700));
			}

			.c-theme-switcher__name {
				font-weight: var(--font-weight-semibold);
				line-height: 1.2;
			}

			.c-theme-switcher__description {
				color: var(--muted, var(--color-text-secondary));
				font-size: 0.82rem;
				line-height: 1.45;
			}

			.c-theme-switcher__list--compact .c-theme-switcher__preview,
			.c-theme-switcher__list--compact .c-theme-switcher__description {
				display: none;
			}
		`;
	}
}
