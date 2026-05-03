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

	static top(): string {
		return 'c-theme-switcher__top';
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
				gap: 1rem;
				width: 100%;
			}

			.c-theme-switcher__title {
				display: inline-flex;
				align-items: center;
				gap: var(--spacing-2, 0.5rem);
				padding-inline: 0.1rem;
				color: var(--text, var(--color-text-primary));
			}

			.c-theme-switcher__list {
				display: grid;
				gap: 0.9rem;
				grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
				align-items: stretch;
			}

			.c-theme-switcher__list--compact {
				grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
			}

			.c-theme-switcher__item {
				display: grid;
				gap: 0.85rem;
				align-content: start;
				grid-template-columns: minmax(0, 1fr);
				grid-template-areas:
					'top'
					'preview';
				width: 100%;
				min-height: 12.75rem;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
				background: var(--surface, var(--color-background-primary));
				color: var(--text, var(--color-text-primary));
				border-radius: 1rem;
				padding: 0.95rem;
				margin: 0;
				appearance: none;
				font: inherit;
				cursor: pointer;
				text-align: left;
				box-shadow:
					0 1px 3px rgba(15, 23, 42, 0.08),
					0 8px 24px rgba(15, 23, 42, 0.04);
				transition:
					border-color var(--duration-120, 120ms) var(--animation-ease, ease),
					background-color var(--duration-120, 120ms) var(--animation-ease, ease),
					transform var(--duration-120, 120ms) var(--animation-ease, ease),
					box-shadow var(--duration-120, 120ms) var(--animation-ease, ease);
			}

			.c-theme-switcher__list--compact .c-theme-switcher__item {
				min-height: 5rem;
				padding: 0.8rem 0.85rem;
				gap: 0.55rem;
				grid-template-areas:
					'top';
			}

			.c-theme-switcher__item:hover {
				transform: translateY(-1px);
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 32%, var(--line, var(--color-border-primary)) 68%);
				box-shadow:
					0 2px 6px rgba(15, 23, 42, 0.1),
					0 12px 28px rgba(15, 23, 42, 0.08);
			}

			.c-theme-switcher__item--active {
				border-color: var(--accent, var(--color-primary-600));
				background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 92%, var(--accent, var(--color-primary-600)) 8%);
				box-shadow:
					0 0 0 1px color-mix(in srgb, var(--accent, var(--color-primary-600)) 18%, transparent),
					0 10px 24px rgba(15, 23, 42, 0.08);
			}

			.c-theme-switcher__top {
				grid-area: top;
				display: grid;
				grid-template-columns: minmax(0, 1fr) auto;
				gap: 0.75rem;
				align-items: start;
			}

			.c-theme-switcher__preview {
				grid-area: preview;
				display: grid;
				gap: 0.55rem;
				align-content: start;
			}

			.c-theme-switcher__preview-surface {
				height: 4.5rem;
				border-radius: 0.85rem;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 82%, transparent);
				box-shadow:
					inset 0 1px 0 rgba(255, 255, 255, 0.3),
					0 1px 2px rgba(15, 23, 42, 0.06);
			}

			.c-theme-switcher__swatch-row {
				display: flex;
				gap: 0.55rem;
				align-items: center;
			}

			.c-theme-switcher__swatch {
				width: 0.85rem;
				height: 0.85rem;
				border-radius: 999px;
				border: 1px solid rgba(15, 23, 42, 0.12);
			}

			.c-theme-switcher__meta {
				display: grid;
				gap: 0.22rem;
				align-content: start;
				min-width: 0;
			}

			.c-theme-switcher__chip,
			.c-theme-switcher__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				justify-self: end;
				min-height: 1.5rem;
				padding: 0.18rem 0.5rem;
				border-radius: 999px;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 72%, transparent);
				background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 92%, var(--bg, var(--color-background-secondary)) 8%);
				font-size: 0.68rem;
				font-weight: 600;
				letter-spacing: 0.04em;
				color: var(--muted, var(--color-text-secondary));
			}

			.c-theme-switcher__badge--active {
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 48%, transparent);
				background: color-mix(in srgb, var(--accent, var(--color-primary-600)) 14%, var(--surface, var(--color-background-primary)) 86%);
				color: var(--accent, var(--color-primary-700));
			}

			.c-theme-switcher__name {
				font-weight: var(--font-weight-semibold, 600);
				font-size: 0.96rem;
				line-height: 1.2;
			}

			.c-theme-switcher__description {
				color: var(--muted, var(--color-text-secondary));
				font-size: 0.78rem;
				line-height: 1.4;
			}

			.c-theme-switcher__list--compact .c-theme-switcher__preview,
			.c-theme-switcher__list--compact .c-theme-switcher__description {
				display: none;
			}

			@media (max-width: 640px) {
				.c-theme-switcher__list {
					grid-template-columns: 1fr;
				}
			}
		`;
	}
}
