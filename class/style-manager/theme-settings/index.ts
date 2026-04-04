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

	static surfaceHelp(): string {
		return 'c-theme-settings__surface-help';
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
			.c-theme-settings__surface {
				display: grid;
				gap: var(--spacing-3);
				border-color: var(--line, var(--color-border-primary));
				background: var(--gradient-custom32);
			}

			.c-theme-settings__surface-heading {
				display: grid;
				gap: var(--spacing-1);
			}

			.c-theme-settings__surface-title,
			.c-theme-settings__title {
				font-size: var(--font-size-3);
				font-weight: var(--font-weight-semibold);
				color: var(--text, var(--color-text-primary));
			}

			.c-theme-settings__surface-title {
				font-size: var(--font-size-4);
			}

			.c-theme-settings__surface-help,
			.c-theme-settings__help {
				font-size: var(--font-size-3);
				color: var(--muted, var(--color-text-secondary));
				line-height: var(--line-height-tight);
			}

			.c-theme-settings__item {
				display: grid;
				gap: var(--spacing-3);
				grid-template-columns: minmax(140px, 1fr) auto;
				align-items: center;
				border: 1px solid var(--line, var(--color-border-primary));
				border-radius: var(--border-radius-xl);
				background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 94%, var(--bg, var(--color-background-secondary)) 6%);
				padding: var(--spacing-3);
			}

			.c-theme-settings__item--column {
				grid-template-columns: 1fr;
				align-items: start;
			}

			.c-theme-settings__meta {
				display: grid;
				gap: var(--spacing-1);
			}

			.c-theme-settings__control {
				display: inline-flex;
				align-items: center;
				justify-self: end;
			}

			@media (max-width: 640px) {
				.c-theme-settings__item {
					grid-template-columns: 1fr;
				}

				.c-theme-settings__control {
					justify-self: start;
				}
			}
		`;
	}
}
