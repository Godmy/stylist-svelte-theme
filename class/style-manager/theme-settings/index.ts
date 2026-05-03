export class StyleManagerThemeSettings {
	private static joinClasses(...values: Array<string | null | undefined | false>): string {
		return values
			.filter(Boolean)
			.map((value) => String(value).trim())
			.filter(Boolean)
			.join(' ');
	}

	static preferences(base: string, className?: string): string {
		return StyleManagerThemeSettings.joinClasses('c-theme-settings', base, className);
	}

	static surface(className?: string): string {
		return StyleManagerThemeSettings.joinClasses('c-theme-settings__surface', className);
	}

	static surfaceHeading(): string {
		return 'c-theme-settings__surface-heading';
	}

	static surfaceTitle(): string {
		return 'c-theme-settings__surface-title';
	}

	static surfaceEyebrow(): string {
		return 'c-theme-settings__surface-eyebrow';
	}

	static surfaceHelp(): string {
		return 'c-theme-settings__surface-help';
	}

	static surfaceSummary(): string {
		return 'c-theme-settings__surface-summary';
	}

	static surfaceBadge(): string {
		return 'c-theme-settings__surface-badge';
	}

	static item(column?: boolean): string {
		return StyleManagerThemeSettings.joinClasses(
			'c-theme-settings__item',
			column && 'c-theme-settings__item--column'
		);
	}

	static meta(): string {
		return 'c-theme-settings__meta';
	}

	static metaEyebrow(): string {
		return 'c-theme-settings__meta-eyebrow';
	}

	static title(): string {
		return 'c-theme-settings__title';
	}

	static help(): string {
		return 'c-theme-settings__help';
	}

	static control(): string {
		return 'c-theme-settings__control';
	}

	static getStyleSheet(): string {
		return `
			.c-theme-settings {
				display: grid;
				gap: 1rem;
			}

			.c-theme-settings__surface {
				display: grid;
				gap: clamp(1rem, 1.8vw, 1.25rem);
				border-color: color-mix(in srgb, var(--line, var(--color-border-primary)) 78%, transparent);
				background: var(--surface, var(--color-background-primary));
				box-shadow:
					0 1px 3px rgba(15, 23, 42, 0.08),
					0 12px 32px rgba(15, 23, 42, 0.05);
			}

			.c-theme-settings__surface-heading {
				display: grid;
				gap: 0.55rem;
				padding-bottom: 0.35rem;
			}

			.c-theme-settings__surface-eyebrow,
			.c-theme-settings__meta-eyebrow {
				font-size: 0.72rem;
				font-weight: 700;
				text-transform: uppercase;
				letter-spacing: 0.16em;
				color: color-mix(in srgb, var(--muted, var(--color-text-secondary)) 92%, transparent);
			}

			.c-theme-settings__surface-title,
			.c-theme-settings__title {
				font-size: var(--font-size-3, 1.125rem);
				font-weight: var(--font-weight-semibold, 600);
				color: var(--text, var(--color-text-primary));
				letter-spacing: -0.01em;
			}

			.c-theme-settings__surface-title {
				font-size: clamp(1.05rem, 1.5vw, 1.3rem);
				line-height: 1.1;
			}

			.c-theme-settings__surface-help,
			.c-theme-settings__help {
				font-size: 0.92rem;
				color: var(--muted, var(--color-text-secondary));
				line-height: 1.5;
			}

			.c-theme-settings__surface-summary {
				display: flex;
				flex-wrap: wrap;
				gap: 0.55rem;
			}

			.c-theme-settings__surface-badge {
				display: inline-flex;
				align-items: center;
				gap: 0.45rem;
				padding: 0.45rem 0.72rem;
				border-radius: 999px;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
				background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 88%, white 12%);
				font-size: 0.8rem;
				line-height: 1;
				color: var(--text, var(--color-text-primary));
				box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
			}

			.c-theme-settings__surface-badge strong {
				font-size: 0.82rem;
			}

			.c-theme-settings__item {
				display: grid;
				gap: 1rem;
				grid-template-columns: minmax(180px, 0.8fr) minmax(220px, 1fr);
				align-items: center;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 74%, transparent);
				border-radius: 1rem;
				background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 96%, var(--bg, var(--color-background-secondary)) 4%);
				padding: 1.1rem 1.15rem;
				box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
			}

			.c-theme-settings__item--column {
				grid-template-columns: 1fr;
				align-items: start;
			}

			.c-theme-settings__meta {
				display: grid;
				gap: 0.45rem;
				align-content: start;
			}

			.c-theme-settings__control {
				display: grid;
				gap: 0.75rem;
				align-items: stretch;
				justify-content: stretch;
				justify-self: stretch;
				min-width: 0;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}

			.c-theme-settings__item--column .c-theme-settings__control {
				justify-content: stretch;
				padding: 0;
			}

			.c-theme-settings__item--column .c-theme-switcher {
				width: 100%;
			}

			.c-theme-settings__item--column .c-theme-switcher__list {
				grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
			}

			.c-theme-settings__item--column .c-theme-switcher__item {
				min-height: 11.75rem;
			}

			.c-theme-settings__item .c-theme-mode-toggle {
				min-width: 3.6rem;
				min-height: 3.6rem;
				justify-content: center;
			}

			.c-theme-settings__item--column .c-theme-switcher__description {
				margin-top: 0.1rem;
			}

			@media (max-width: 640px) {
				.c-theme-settings__item {
					grid-template-columns: 1fr;
					padding: 0.95rem;
				}

				.c-theme-settings__control {
					justify-content: flex-start;
				}
			}
		`;
	}
}
