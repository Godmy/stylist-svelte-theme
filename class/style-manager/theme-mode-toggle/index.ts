export class StyleManagerThemeModeToggle {
	static root(className?: string): string {
		return `c-theme-mode-toggle ${className ?? ''}`.trim();
	}

	static getStyleSheet(): string {
		return `
			.c-theme-mode-toggle {
				display: inline-flex;
				align-items: center;
				gap: var(--spacing-2);
				padding: var(--spacing-2) var(--spacing-3);
				border-radius: var(--border-radius-lg);
				border: 1px solid var(--line, var(--color-border-primary));
				background: var(--surface, var(--color-background-primary));
				color: var(--text, var(--color-text-primary));
				cursor: pointer;
				transition: background-color var(--duration-120) var(--animation-ease), border-color var(--duration-120) var(--animation-ease);
			}

			.c-theme-mode-toggle:hover:not(:disabled) {
				background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 88%, var(--accent, var(--color-primary-600)) 12%);
			}

			.c-theme-mode-toggle:disabled {
				opacity: var(--opacity-50);
				cursor: not-allowed;
			}
		`;
	}
}
