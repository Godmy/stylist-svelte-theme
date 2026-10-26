<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import type { RecipeThemeSwitcher } from '$stylist/theme/interface/recipe/theme-switcher';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import createThemeSwitcherState from '$stylist/theme/component/molecule/theme-switcher/state.svelte';
	import { getPreviewTheme } from '$stylist/theme/function/script/theme-switcher';
	import { getSurfaceStyle } from '$stylist/theme/function/script/get-surface-style';
	import { getSwatchStyle } from '$stylist/theme/function/script/get-swatch-style';

	let props: RecipeThemeSwitcher = $props();
	const themeContext = ManagerThemeContext.getOptional();
	const state = createThemeSwitcherState(
		() => props,
		() => themeContext?.themeMode ?? props.themeMode ?? 'default',
		themeContext?.setScheme
	);
</script>

<HtmlDiv
	class={['c-theme-switcher', state.hostClass].filter(Boolean).join(' ')}
	{...state.restProps}
>
	{#if state.showHeader}
		<HtmlDiv class="c-theme-switcher__title">
			<svg
				class="c-theme-switcher__title-icon"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
				<circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
				<circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
				<circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
				<path
					d="M12 2C6.5 2 2 6 2 11.2c0 3.9 3.1 7.1 7 7.1h1.6c.8 0 1.4.6 1.4 1.4 0 .7.6 1.3 1.3 1.3h.7c4.4 0 8-3.6 8-8C22 6.9 17.5 2 12 2Z"
				/>
			</svg>
			<HtmlSpan>UI Theme</HtmlSpan>
		</HtmlDiv>
	{/if}
	<HtmlDiv
		class={['c-theme-switcher__list', state.compact && 'c-theme-switcher__list--compact']
			.filter(Boolean)
			.join(' ')}
	>
		{#each state.resolvedThemes as item (item.id)}
			<HtmlButton
				type="button"
				class={[
					'c-theme-switcher__item',
					state.scheme === item.id && 'c-theme-switcher__item--active'
				]
					.filter(Boolean)
					.join(' ')}
				onclick={() => state.setScheme(item.id)}
				aria-pressed={state.scheme === item.id}
			>
				<HtmlDiv class="c-theme-switcher__top">
					<HtmlDiv class="c-theme-switcher__meta">
						<HtmlSpan class="c-theme-switcher__name">{item.label}</HtmlSpan>
						{#if state.showLabels}
							<HtmlSpan class="c-theme-switcher__description">{item.description}</HtmlSpan>
						{/if}
					</HtmlDiv>
					<HtmlSpan
						class={[
							'c-theme-switcher__badge',
							state.scheme === item.id && 'c-theme-switcher__badge--active'
						]
							.filter(Boolean)
							.join(' ')}
					>
						{state.scheme === item.id ? 'Active' : 'Preview'}
					</HtmlSpan>
				</HtmlDiv>

				<HtmlDiv class="c-theme-switcher__preview">
					<HtmlDiv
						class="c-theme-switcher__preview-surface"
						style={getSurfaceStyle(item, state.effectiveThemeMode)}
					></HtmlDiv>
					<HtmlDiv class="c-theme-switcher__swatch-row">
						<HtmlSpan
							class="c-theme-switcher__swatch"
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.primary[500]
							)}
						></HtmlSpan>
						<HtmlSpan
							class="c-theme-switcher__swatch"
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.secondary[500]
							)}
						></HtmlSpan>
						<HtmlSpan
							class="c-theme-switcher__swatch"
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.background.secondary
							)}
						></HtmlSpan>
					</HtmlDiv>
				</HtmlDiv>
			</HtmlButton>
		{/each}
	</HtmlDiv>
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer theme {
		:global {
			:where(.c-theme-switcher) {
				display: grid;
				gap: calc(var(--space-4, 1rem) * var(--density-scale, 1));
				width: 100%;
			}
			:where(.c-theme-switcher__title) {
				display: inline-flex;
				align-items: center;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				padding-inline: calc(var(--space-0-5, 0.125rem) * var(--density-scale, 1));
				color: var(--text, var(--color-text-primary));
			}
			:where(.c-theme-switcher__title-icon) {
				display: block;
				flex: 0 0 auto;
				stroke: currentColor;
			}
			:where(.c-theme-switcher__list) {
				display: grid;
				gap: calc(var(--space-4, 1rem) * var(--density-scale, 1));
				grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
				align-items: stretch;
			}
			:where(.c-theme-switcher__list--compact) {
				grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
			}
			:where(.c-theme-switcher__item) {
				display: grid;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				align-content: start;
				grid-template-columns: minmax(0, 1fr);
				grid-template-areas: 'top' 'preview';
				width: 100%;
				min-height: 12.75rem;
				margin: 0;
				padding: calc(var(--space-4, 1rem) * var(--density-scale, 1));
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
				border-radius: var(--radius-4, 1rem);
				background: var(--surface, var(--color-background-primary));
				color: var(--text, var(--color-text-primary));
				appearance: none;
				font: inherit;
				cursor: pointer;
				text-align: left;
				box-shadow: var(--elevation-level2);
				transition:
					border-color var(--duration-120, 120ms) var(--easing-ease, ease),
					background-color var(--duration-120, 120ms) var(--easing-ease, ease),
					transform var(--duration-120, 120ms) var(--easing-ease, ease),
					box-shadow var(--duration-120, 120ms) var(--easing-ease, ease);
			}
			:where(.c-theme-switcher__list--compact .c-theme-switcher__item) {
				min-height: 5rem;
				padding: calc(var(--space-3, 0.75rem) * var(--density-scale, 1))
					calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				grid-template-areas: 'top';
			}
			:where(.c-theme-switcher__item:hover) {
				transform: translateY(-1px);
				border-color: color-mix(
					in srgb,
					var(--accent, var(--color-primary-600)) 32%,
					var(--line, var(--color-border-primary)) 68%
				);
				box-shadow: var(--elevation-card-hover);
			}
			:where(.c-theme-switcher__item--active) {
				border-color: var(--accent, var(--color-primary-600));
				background: color-mix(
					in srgb,
					var(--surface, var(--color-background-primary)) 92%,
					var(--accent, var(--color-primary-600)) 8%
				);
				box-shadow:
					0 0 0 1px color-mix(in srgb, var(--accent, var(--color-primary-600)) 18%, transparent),
					var(--elevation-card);
			}
			:where(.c-theme-switcher__top) {
				grid-area: top;
				display: grid;
				grid-template-columns: minmax(0, 1fr) auto;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				align-items: start;
			}
			:where(.c-theme-switcher__meta) {
				display: grid;
				gap: calc(var(--space-1, 0.25rem) * var(--density-scale, 1));
				align-content: start;
				min-width: 0;
			}
			:where(.c-theme-switcher__name) {
				font-size: var(--font-size-4, 1rem);
				font-weight: var(--font-weight-semibold, 600);
				line-height: var(--line-height-tight, 1.25);
			}
			:where(.c-theme-switcher__description) {
				color: var(--muted, var(--color-text-secondary));
				font-size: var(--font-size-3, 0.75rem);
				line-height: var(--line-height-snug, 1.375);
			}
			:where(.c-theme-switcher__badge) {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				justify-self: end;
				min-height: 1.5rem;
				padding: calc(var(--space-0-5, 0.125rem) * var(--density-scale, 1))
					calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				border-radius: var(--radius-full, 9999px);
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 72%, transparent);
				background: color-mix(
					in srgb,
					var(--surface, var(--color-background-primary)) 92%,
					var(--bg, var(--color-background-secondary)) 8%
				);
				font-size: var(--font-size-2-5, 0.625rem);
				font-weight: var(--font-weight-semibold, 600);
				letter-spacing: var(--letter-spacing-wide, 0.04em);
				color: var(--muted, var(--color-text-secondary));
			}
			:where(.c-theme-switcher__badge--active) {
				border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 48%, transparent);
				background: color-mix(
					in srgb,
					var(--accent, var(--color-primary-600)) 14%,
					var(--surface, var(--color-background-primary)) 86%
				);
				color: var(--accent, var(--color-primary-700));
			}
			:where(.c-theme-switcher__preview) {
				grid-area: preview;
				display: grid;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				align-content: start;
			}
			:where(.c-theme-switcher__preview-surface) {
				height: 4.5rem;
				border-radius: var(--radius-3, 0.75rem);
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 82%, transparent);
				box-shadow: var(--elevation-level1);
			}
			:where(.c-theme-switcher__swatch-row) {
				display: flex;
				align-items: center;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
			}
			:where(.c-theme-switcher__swatch) {
				width: 0.85rem;
				height: 0.85rem;
				border-radius: var(--radius-full, 9999px);
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--color-text-primary) 12%, transparent);
			}
			:where(.c-theme-switcher__list--compact)
				:where(.c-theme-switcher__preview, .c-theme-switcher__description) {
				display: none;
			}
			@media (max-width: 640px) {
				:where(.c-theme-switcher__list) {
					grid-template-columns: 1fr;
				}
			}
		}
	}
</style>
