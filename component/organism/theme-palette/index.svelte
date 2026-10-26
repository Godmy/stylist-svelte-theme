<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlH3 from '$stylist/html/component/atom/h3/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import HtmlStrong from '$stylist/html/component/atom/strong/index.svelte';
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import createThemePaletteState from '$stylist/theme/component/organism/theme-palette/state.svelte';
	import type { RecipeThemePalette } from '$stylist/theme/interface/recipe/theme-palette';

	let props: RecipeThemePalette = $props();

	const state = createThemePaletteState(() => props);
	const colorCountLabel = $derived(`${state.colors.length} colors`);
</script>

<HtmlDiv class={state.containerClasses} {...state.restProps}>
	<HtmlDiv class={state.headerClasses}>
		<HtmlDiv class="c-theme-palette__heading">
			<HtmlDiv class="c-theme-palette__eyebrow">Theme Palette</HtmlDiv>
			{#if state.title}
				<HtmlH3 class="c-theme-palette__title">{state.title}</HtmlH3>
			{/if}
		</HtmlDiv>
		<HtmlDiv class="c-theme-palette__summary">
			<HtmlDiv class="c-theme-palette__badge">
				<HtmlSpan>Items</HtmlSpan>
				<HtmlStrong>{colorCountLabel}</HtmlStrong>
			</HtmlDiv>
			<HtmlDiv class="c-theme-palette__badge">
				<HtmlSpan>Columns</HtmlSpan>
				<HtmlStrong>{state.columns}</HtmlStrong>
			</HtmlDiv>
		</HtmlDiv>
	</HtmlDiv>

	<HtmlDiv class={state.gridClasses} style={state.gridStyle}>
		{#each state.colors as color, index (index)}
			<HtmlButton
				type="button"
				class={state.itemClasses}
				onclick={() => state.handleColorClick(color)}
			>
				<HtmlDiv class="c-theme-palette__preview">
					<HtmlDiv
						class={state.colorSwatchClasses}
						style={`background-color: ${color.value}`}
						title={`${color.name}: ${color.value}`}
					></HtmlDiv>
				</HtmlDiv>
				<HtmlDiv class="c-theme-palette__meta">
					{#if state.showLabels}
						<HtmlDiv class={state.labelClasses}>
							{color.name}
						</HtmlDiv>
					{/if}
					{#if state.showValues}
						<HtmlDiv class={state.valueClasses}>
							{color.value}
						</HtmlDiv>
					{/if}
				</HtmlDiv>
			</HtmlButton>
		{/each}
	</HtmlDiv>
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer theme {
		:global {
			:where(.c-theme-palette) {
				display: grid;
				gap: calc(var(--space-5, 1.25rem) * var(--density-scale, 1));
				padding: var(--space-4, 1rem);
				border: var(--border-width-thin, 1px) solid var(--line, var(--color-border-primary));
				border-radius: var(--radius-5, 1.25rem);
				border-color: color-mix(in srgb, var(--line, var(--color-border-primary)) 78%, transparent);
				background: linear-gradient(
					180deg,
					color-mix(
						in srgb,
						var(--surface, var(--color-background-primary)) 96%,
						var(--accent, var(--color-primary-600)) 4%
					),
					var(--surface, var(--color-background-primary))
				);
				color: var(--text, var(--color-text-primary));
				box-shadow: var(--elevation-card);
			}
			:where(.c-theme-palette__header) {
				display: flex;
				flex-wrap: wrap;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				align-items: start;
				justify-content: space-between;
				padding-bottom: calc(var(--space-1-5, 0.375rem) * var(--density-scale, 1));
			}
			:where(.c-theme-palette__heading) {
				display: grid;
				gap: calc(var(--space-1-5, 0.375rem) * var(--density-scale, 1));
				min-width: min(100%, 14rem);
			}
			:where(.c-theme-palette__eyebrow) {
				font-size: var(--font-size-3, 0.75rem);
				font-weight: var(--font-weight-bold, 700);
				text-transform: uppercase;
				letter-spacing: var(--letter-spacing-expanded, 0.12em);
				color: color-mix(in srgb, var(--muted, var(--color-text-secondary)) 92%, transparent);
			}
			:where(.c-theme-palette__title) {
				margin: 0;
				font-size: var(--font-size-5, 1.25rem);
				line-height: var(--line-height-tight, 1.25);
				font-weight: var(--font-weight-semibold, 600);
				color: var(--text, var(--color-text-primary));
				letter-spacing: 0;
			}
			:where(.c-theme-palette__summary) {
				display: flex;
				flex-wrap: wrap;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				justify-content: flex-end;
			}
			:where(.c-theme-palette__badge) {
				display: inline-flex;
				align-items: center;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				padding: calc(var(--space-2, 0.5rem) * var(--density-scale, 1))
					calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				border-radius: var(--radius-full, 9999px);
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
				background: color-mix(
					in srgb,
					var(--surface, var(--color-background-primary)) 88%,
					white 12%
				);
				font-size: var(--font-size-3, 0.75rem);
				line-height: var(--line-height-none, 1);
				color: var(--text, var(--color-text-primary));
				box-shadow: var(--elevation-level1);
			}
			:where(.c-theme-palette__badge span) {
				color: var(--muted, var(--color-text-secondary));
			}
			:where(.c-theme-palette__badge strong) {
				font-size: var(--font-size-3-5, 0.875rem);
			}
			:where(.c-theme-palette__grid) {
				display: grid;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				grid-template-columns: repeat(2, minmax(0, 1fr));
			}
			@media (min-width: 640px) {
				:where(.c-theme-palette__grid) {
					grid-template-columns: repeat(3, minmax(0, 1fr));
				}
			}
			@media (min-width: 768px) {
				:where(.c-theme-palette__grid) {
					grid-template-columns: repeat(4, minmax(0, 1fr));
				}
			}
			@media (min-width: 1024px) {
				:where(.c-theme-palette__grid) {
					grid-template-columns: repeat(var(--palette-cols, 4), minmax(0, 1fr));
				}
			}
			:where(.c-theme-palette__item) {
				display: grid;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				align-content: start;
				min-width: 0;
				min-height: 8.4rem;
				border-radius: var(--radius-4, 1rem);
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 74%, transparent);
				background: color-mix(
					in srgb,
					var(--surface, var(--color-background-primary)) 96%,
					var(--bg, var(--color-background-secondary)) 4%
				);
				padding: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				cursor: pointer;
				text-align: left;
				box-shadow: var(--elevation-level1);
				transition:
					background var(--duration-150, 150ms) var(--easing-smooth, ease-in-out),
					border-color var(--duration-150, 150ms) var(--easing-smooth, ease-in-out),
					transform var(--duration-150, 150ms) var(--easing-smooth, ease-in-out),
					box-shadow var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
			}
			:where(.c-theme-palette__item:hover) {
				border-color: color-mix(
					in srgb,
					var(--accent, var(--color-primary-600)) 42%,
					var(--line, var(--color-border-primary))
				);
				background: color-mix(
					in srgb,
					var(--surface, var(--color-background-primary)) 90%,
					var(--accent, var(--color-primary-600)) 10%
				);
				box-shadow: var(--elevation-card-hover);
				transform: translateY(-1px);
			}
			:where(.c-theme-palette__item:focus-visible) {
				outline: 2px solid
					color-mix(in srgb, var(--accent, var(--color-primary-600)) 72%, white 28%);
				outline-offset: 2px;
			}
			:where(.c-theme-palette__preview) {
				position: relative;
				min-height: 4.25rem;
				overflow: hidden;
				border-radius: var(--radius-3, 0.75rem);
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 68%, transparent);
				background:
					linear-gradient(
						45deg,
						color-mix(in srgb, var(--color-neutral-400, #94a3b8) 16%, transparent) 25%,
						transparent 25%
					),
					linear-gradient(
						-45deg,
						color-mix(in srgb, var(--color-neutral-400, #94a3b8) 16%, transparent) 25%,
						transparent 25%
					),
					linear-gradient(
						45deg,
						transparent 75%,
						color-mix(in srgb, var(--color-neutral-400, #94a3b8) 16%, transparent) 75%
					),
					linear-gradient(
						-45deg,
						transparent 75%,
						color-mix(in srgb, var(--color-neutral-400, #94a3b8) 16%, transparent) 75%
					);
				background-position:
					0 0,
					0 0.5rem,
					0.5rem -0.5rem,
					-0.5rem 0;
				background-size: 1rem 1rem;
			}
			:where(.c-theme-palette__swatch) {
				width: 100%;
				height: 100%;
				min-height: 4.25rem;
				border: 0;
				border-radius: inherit;
				box-shadow: inset 0 0 0 var(--border-width-thin, 1px)
					color-mix(in srgb, var(--color-text-primary) 10%, transparent);
			}
			:where(.c-theme-palette__meta) {
				display: grid;
				gap: calc(var(--space-1, 0.25rem) * var(--density-scale, 1));
				min-width: 0;
			}
			:where(.c-theme-palette__label) {
				min-width: 0;
				overflow: hidden;
				font-size: var(--font-size-3-5, 0.875rem);
				font-weight: var(--font-weight-bold, 700);
				line-height: var(--line-height-tight, 1.25);
				color: var(--text, var(--color-text-primary));
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			:where(.c-theme-palette__value) {
				min-width: 0;
				overflow: hidden;
				font-family: var(--font-mono, ui-monospace, monospace);
				font-size: var(--font-size-3, 0.75rem);
				line-height: var(--line-height-tight, 1.25);
				color: var(--muted, var(--color-text-secondary));
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			@media (max-width: 640px) {
				:where(.c-theme-palette__header) {
					display: grid;
				}
				:where(.c-theme-palette__summary) {
					justify-content: flex-start;
				}
				:where(.c-theme-palette__item) {
					min-height: 7.5rem;
					padding: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				}
			}
		}
	}
</style>
