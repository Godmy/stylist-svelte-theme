<script lang="ts">
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import createThemeModeToggleState from '$stylist/theme/component/atom/theme-mode-toggle/state.svelte';
	import type { RecipeThemeModeToggle } from '$stylist/theme/interface/recipe/theme-mode-toggle';

	let props: RecipeThemeModeToggle = $props();
	const state = createThemeModeToggleState(() => props);
</script>

<HtmlButton
	type="button"
	class={state.className}
	onclick={state.cycleTheme}
	aria-label={state.ariaLabel}
	disabled={state.disabled}
	data-resolved-mode={state.resolvedMode}
	data-size={state.size}
	{...state.restProps}
>
	{#if state.resolvedMode === 'dark'}
		<svg
			class="c-theme-mode-toggle__icon"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M12 3a6 6 0 0 0 9 6.9A9 9 0 1 1 12 3Z" />
		</svg>
	{:else}
		<svg
			class="c-theme-mode-toggle__icon"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2" />
			<path d="M12 20v2" />
			<path d="m4.93 4.93 1.41 1.41" />
			<path d="m17.66 17.66 1.41 1.41" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="m6.34 17.66-1.41 1.41" />
			<path d="m19.07 4.93-1.41 1.41" />
		</svg>
	{/if}
	{#if state.showLabels}
		<HtmlSpan class="c-theme-mode-toggle__label">{state.label}</HtmlSpan>
	{/if}
</HtmlButton>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer theme {
		:global {
			/* The size prop sets the font size; the box and the icon follow it in em. */
			:where(.c-theme-mode-toggle) {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				min-width: 2.75em;
				min-height: 2.75em;
				padding: 0.625em 0.875em;
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 78%, transparent);
				border-radius: var(--radius-full, 9999px);
				background: linear-gradient(
					180deg,
					color-mix(in srgb, var(--surface, var(--color-background-primary)) 97%, white 3%) 0%,
					color-mix(
							in srgb,
							var(--surface, var(--color-background-primary)) 92%,
							var(--bg, var(--color-background-secondary)) 8%
						)
						100%
				);
				color: var(--text, var(--color-text-primary));
				font-size: var(--font-size-4, 1rem);
				line-height: 1;
				cursor: pointer;
				box-shadow: var(--elevation-level1);
				transition:
					background-color var(--duration-120, 120ms) var(--easing-ease, ease),
					border-color var(--duration-120, 120ms) var(--easing-ease, ease),
					color var(--duration-120, 120ms) var(--easing-ease, ease),
					transform var(--duration-120, 120ms) var(--easing-ease, ease);
			}
			:where(.c-theme-mode-toggle[data-size='xs']) {
				font-size: var(--font-size-3, 0.75rem);
			}
			:where(.c-theme-mode-toggle[data-size='sm']) {
				font-size: var(--font-size-3-5, 0.875rem);
			}
			:where(.c-theme-mode-toggle[data-size='lg']) {
				font-size: var(--font-size-4-5, 1.125rem);
			}
			:where(.c-theme-mode-toggle[data-size='xl']) {
				font-size: var(--font-size-5, 1.25rem);
			}
			:where(.c-theme-mode-toggle[data-size='2xl']) {
				font-size: var(--font-size-6, 1.5rem);
			}
			:where(.c-theme-mode-toggle__icon) {
				display: block;
				flex: 0 0 auto;
				color: currentColor;
				stroke: currentColor;
			}
			:where(.c-theme-mode-toggle__label) {
				font-size: 0.875em;
				font-weight: var(--font-weight-semibold, 600);
			}
			:where(.c-theme-mode-toggle[data-resolved-mode='dark']) {
				background: linear-gradient(
					180deg,
					color-mix(in srgb, var(--surface, var(--color-background-primary)) 90%, black 10%) 0%,
					color-mix(in srgb, var(--surface, var(--color-background-primary)) 82%, black 18%) 100%
				);
				color: color-mix(in srgb, var(--text, var(--color-text-primary)) 18%, white 82%);
				border-color: color-mix(in srgb, var(--line, var(--color-border-primary)) 35%, white 65%);
				box-shadow: var(--elevation-level3);
			}
			:where(.c-theme-mode-toggle[data-resolved-mode='light']) {
				color: color-mix(in srgb, var(--text, var(--color-text-primary)) 90%, black 10%);
			}
			:where(.c-theme-mode-toggle:hover:not(:disabled)) {
				background: color-mix(
					in srgb,
					var(--surface, var(--color-background-primary)) 86%,
					var(--accent, var(--color-primary-600)) 14%
				);
				border-color: color-mix(
					in srgb,
					var(--accent, var(--color-primary-600)) 42%,
					var(--line, var(--color-border-primary)) 58%
				);
				transform: translateY(-1px);
			}
			:where(.c-theme-mode-toggle[data-resolved-mode='dark']:hover:not(:disabled)) {
				background: linear-gradient(
					180deg,
					color-mix(
							in srgb,
							var(--surface, var(--color-background-primary)) 72%,
							var(--accent, var(--color-primary-600)) 28%
						)
						0%,
					color-mix(in srgb, var(--surface, var(--color-background-primary)) 74%, black 26%) 100%
				);
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 48%, white 52%);
			}
			:where(.c-theme-mode-toggle:disabled) {
				opacity: var(--opacity-50, 0.5);
				cursor: not-allowed;
			}
		}
	}
</style>
