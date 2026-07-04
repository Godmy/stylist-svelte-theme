<script lang="ts">
	import createThemePaletteState from '$stylist/theme/function/state/theme-palette/index.svelte';
	import type { RecipeThemePalette } from '$stylist/theme/interface/recipe/theme-palette';

	let props: RecipeThemePalette = $props();

	const state = createThemePaletteState(props);
	const colorCountLabel = $derived(`${state.colors.length} colors`);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div class="c-theme-palette__heading">
			<div class="c-theme-palette__eyebrow">Theme Palette</div>
			{#if state.title}
				<h3 class="c-theme-palette__title">{state.title}</h3>
			{/if}
		</div>
		<div class="c-theme-palette__summary">
			<div class="c-theme-palette__badge">
				<span>Items</span>
				<strong>{colorCountLabel}</strong>
			</div>
			<div class="c-theme-palette__badge">
				<span>Columns</span>
				<strong>{state.columns}</strong>
			</div>
		</div>
	</div>

	<div class={state.gridClasses} style={state.gridStyle}>
		{#each state.colors as color}
			<button type="button" class={state.itemClasses} onclick={() => state.handleColorClick(color)}>
				<div class="c-theme-palette__preview">
					<div
						class={state.colorSwatchClasses}
						style={`background-color: ${color.value}`}
						title={`${color.name}: ${color.value}`}
					></div>
				</div>
				<div class="c-theme-palette__meta">
					{#if state.showLabels}
						<div class={state.labelClasses}>
							{color.name}
						</div>
					{/if}
					{#if state.showValues}
						<div class={state.valueClasses}>
							{color.value}
						</div>
					{/if}
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.c-theme-palette {
		display: grid;
		gap: clamp(1rem, 1.8vw, 1.25rem);
		padding: var(--spacing-4, 1rem);
		border: 1px solid var(--line, var(--color-border-primary));
		border-radius: var(--border-radius-2xl, 1.25rem);
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
		box-shadow:
			0 1px 3px rgba(15, 23, 42, 0.08),
			0 12px 32px rgba(15, 23, 42, 0.05);
	}

	.c-theme-palette__header {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		align-items: start;
		justify-content: space-between;
		padding-bottom: 0.35rem;
	}

	.c-theme-palette__heading {
		display: grid;
		gap: 0.4rem;
		min-width: min(100%, 14rem);
	}

	.c-theme-palette__eyebrow {
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: color-mix(in srgb, var(--muted, var(--color-text-secondary)) 92%, transparent);
	}

	.c-theme-palette__title {
		margin: 0;
		font-size: clamp(1.05rem, 1.5vw, 1.3rem);
		line-height: 1.1;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--text, var(--color-text-primary));
		letter-spacing: 0;
	}

	.c-theme-palette__summary {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
		justify-content: flex-end;
	}

	.c-theme-palette__badge {
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

	.c-theme-palette__badge span {
		color: var(--muted, var(--color-text-secondary));
	}

	.c-theme-palette__badge strong {
		font-size: 0.82rem;
	}

	.c-theme-palette__grid {
		display: grid;
		gap: 0.7rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 640px) {
		.c-theme-palette__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 768px) {
		.c-theme-palette__grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.c-theme-palette__grid {
			grid-template-columns: repeat(var(--palette-cols, 4), minmax(0, 1fr));
		}
	}

	.c-theme-palette__item {
		display: grid;
		gap: 0.7rem;
		align-content: start;
		min-width: 0;
		min-height: 8.4rem;
		border-radius: 1rem;
		border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 74%, transparent);
		background: color-mix(
			in srgb,
			var(--surface, var(--color-background-primary)) 96%,
			var(--bg, var(--color-background-secondary)) 4%
		);
		padding: 0.72rem;
		cursor: pointer;
		text-align: left;
		box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
		transition:
			background var(--duration-150, 150ms) var(--easing-smooth, ease-in-out),
			border-color var(--duration-150, 150ms) var(--easing-smooth, ease-in-out),
			transform var(--duration-150, 150ms) var(--easing-smooth, ease-in-out),
			box-shadow var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}

	.c-theme-palette__item:hover {
		border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 42%, var(--line, var(--color-border-primary)));
		background: color-mix(
			in srgb,
			var(--surface, var(--color-background-primary)) 90%,
			var(--accent, var(--color-primary-600)) 10%
		);
		box-shadow:
			0 2px 5px rgba(15, 23, 42, 0.08),
			0 12px 28px rgba(15, 23, 42, 0.06);
		transform: translateY(-1px);
	}

	.c-theme-palette__item:focus-visible {
		outline: 2px solid color-mix(in srgb, var(--accent, var(--color-primary-600)) 72%, white 28%);
		outline-offset: 2px;
	}

	.c-theme-palette__preview {
		position: relative;
		min-height: 4.25rem;
		overflow: hidden;
		border-radius: 0.75rem;
		border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 68%, transparent);
		background:
			linear-gradient(45deg, rgba(148, 163, 184, 0.16) 25%, transparent 25%),
			linear-gradient(-45deg, rgba(148, 163, 184, 0.16) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, rgba(148, 163, 184, 0.16) 75%),
			linear-gradient(-45deg, transparent 75%, rgba(148, 163, 184, 0.16) 75%);
		background-position:
			0 0,
			0 0.5rem,
			0.5rem -0.5rem,
			-0.5rem 0;
		background-size: 1rem 1rem;
	}

	.c-theme-palette__swatch {
		width: 100%;
		height: 100%;
		min-height: 4.25rem;
		border: 0;
		border-radius: inherit;
		box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.1);
	}

	.c-theme-palette__meta {
		display: grid;
		gap: 0.25rem;
		min-width: 0;
	}

	.c-theme-palette__label {
		min-width: 0;
		overflow: hidden;
		font-size: 0.82rem;
		font-weight: 700;
		line-height: 1.25;
		color: var(--text, var(--color-text-primary));
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.c-theme-palette__value {
		min-width: 0;
		overflow: hidden;
		font-family:
			ui-monospace,
			SFMono-Regular,
			Menlo,
			Monaco,
			Consolas,
			'Liberation Mono',
			'Courier New',
			monospace;
		font-size: 0.72rem;
		line-height: 1.25;
		color: var(--muted, var(--color-text-secondary));
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.c-theme-palette__header {
			display: grid;
		}

		.c-theme-palette__summary {
			justify-content: flex-start;
		}

		.c-theme-palette__item {
			min-height: 7.5rem;
			padding: 0.65rem;
		}
	}
</style>
