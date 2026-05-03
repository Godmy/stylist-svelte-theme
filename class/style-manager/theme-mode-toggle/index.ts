export class StyleManagerThemeModeToggle {
	static root(className?: string): string {
		return `c-theme-mode-toggle ${className ?? ''}`.trim();
	}

	static getStyleSheet(): string {
		return `
			.c-theme-mode-toggle {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				gap: var(--spacing-2, 0.5rem);
				min-height: 2.75rem;
				min-width: 2.75rem;
				padding: 0.65rem 0.9rem;
				border-radius: 999px;
				border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 78%, transparent);
				background:
					linear-gradient(
						180deg,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 97%, white 3%) 0%,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 92%, var(--bg, var(--color-background-secondary)) 8%) 100%
					);
				color: var(--text, var(--color-text-primary));
				cursor: pointer;
				box-shadow:
					0 8px 20px rgba(15, 23, 42, 0.06),
					inset 0 1px 0 rgba(255, 255, 255, 0.55);
				transition:
					background-color var(--duration-120, 120ms) var(--animation-ease, ease),
					border-color var(--duration-120, 120ms) var(--animation-ease, ease),
					color var(--duration-120, 120ms) var(--animation-ease, ease),
					transform var(--duration-120, 120ms) var(--animation-ease, ease);
			}

			.c-theme-mode-toggle__icon {
				display: block;
				color: currentColor;
			}

			.c-theme-mode-toggle__icon :global(svg) {
				display: block;
				stroke: currentColor;
			}

			.c-theme-mode-toggle[data-resolved-mode='dark'] {
				background:
					linear-gradient(
						180deg,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 90%, black 10%) 0%,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 82%, black 18%) 100%
					);
				color: color-mix(in srgb, var(--text, var(--color-text-primary)) 18%, white 82%);
				border-color: color-mix(in srgb, var(--line, var(--color-border-primary)) 35%, white 65%);
				box-shadow:
					0 10px 24px rgba(15, 23, 42, 0.24),
					inset 0 1px 0 rgba(255, 255, 255, 0.16);
			}

			.c-theme-mode-toggle[data-resolved-mode='light'] {
				color: color-mix(in srgb, var(--text, var(--color-text-primary)) 90%, black 10%);
			}

			.c-theme-mode-toggle:hover:not(:disabled) {
				background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 86%, var(--accent, var(--color-primary-600)) 14%);
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 42%, var(--line, var(--color-border-primary)) 58%);
				transform: translateY(-1px);
			}

			.c-theme-mode-toggle[data-resolved-mode='dark']:hover:not(:disabled) {
				background:
					linear-gradient(
						180deg,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 72%, var(--accent, var(--color-primary-600)) 28%) 0%,
						color-mix(in srgb, var(--surface, var(--color-background-primary)) 74%, black 26%) 100%
					);
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 48%, white 52%);
			}

			.c-theme-mode-toggle:disabled {
				opacity: var(--opacity-50, 0.5);
				cursor: not-allowed;
			}
		`;
	}
}
