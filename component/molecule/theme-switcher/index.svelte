<script lang="ts">
	import type { RecipeThemeSwitcher } from '$stylist/theme/interface/recipe/theme-switcher';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import createThemeSwitcherState from '$stylist/theme/function/state/theme-switcher/index.svelte';
	import { getPreviewTheme } from '$stylist/theme/function/script/theme-switcher';
	import { getSurfaceStyle } from '$stylist/theme/function/script/get-surface-style';
	import { getSwatchStyle } from '$stylist/theme/function/script/get-swatch-style';
	import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

	let props: RecipeThemeSwitcher = $props();
	const themeContext = ManagerThemeContext.getOptional();
	const state = createThemeSwitcherState(
		props,
		() => themeContext?.themeMode ?? props.themeMode ?? 'default',
		themeContext?.setScheme
	);
</script>

<div class={mergeClassNames('c-theme-switcher', state.hostClass)} {...state.restProps}>
	{#if state.showHeader}
		<div class="c-theme-switcher__title">
			<BaseIcon name="palette" size={16} />
			<span>UI Theme</span>
		</div>
	{/if}
	<div
		class={mergeClassNames(
			'c-theme-switcher__list',
			state.compact && 'c-theme-switcher__list--compact'
		)}
	>
		{#each state.resolvedThemes as item}
			<button
				type="button"
				class={mergeClassNames(
					'c-theme-switcher__item',
					state.scheme === item.id && 'c-theme-switcher__item--active'
				)}
				onclick={() => state.setScheme(item.id)}
				aria-pressed={state.scheme === item.id}
			>
				<div class="c-theme-switcher__top">
					<div class="c-theme-switcher__meta">
						<span class="c-theme-switcher__name">{item.label}</span>
						{#if state.showLabels}
							<span class="c-theme-switcher__description">{item.description}</span>
						{/if}
					</div>
					<span
						class={mergeClassNames(
							'c-theme-switcher__badge',
							state.scheme === item.id && 'c-theme-switcher__badge--active'
						)}
					>
						{state.scheme === item.id ? 'Active' : 'Preview'}
					</span>
				</div>

				<div class="c-theme-switcher__preview">
					<div
						class="c-theme-switcher__preview-surface"
						style={getSurfaceStyle(item, state.effectiveThemeMode)}
					></div>
					<div class="c-theme-switcher__swatch-row">
						<span
							class="c-theme-switcher__swatch"
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.primary[500]
							)}
						></span>
						<span
							class="c-theme-switcher__swatch"
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.secondary[500]
							)}
						></span>
						<span
							class="c-theme-switcher__swatch"
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.background.secondary
							)}
						></span>
					</div>
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.c-theme-switcher {
		display: grid;
		gap: 1rem;
		width: 100%;
	}

	.c-theme-switcher__title {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
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
		margin: 0;
		padding: 0.95rem;
		border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
		border-radius: 1rem;
		background: var(--surface, var(--color-background-primary));
		color: var(--text, var(--color-text-primary));
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
		grid-template-areas: 'top';
	}

	.c-theme-switcher__item:hover {
		transform: translateY(-1px);
		border-color: color-mix(
			in srgb,
			var(--accent, var(--color-primary-600)) 32%,
			var(--line, var(--color-border-primary)) 68%
		);
		box-shadow:
			0 2px 6px rgba(15, 23, 42, 0.1),
			0 12px 28px rgba(15, 23, 42, 0.08);
	}

	.c-theme-switcher__item--active {
		border-color: var(--accent, var(--color-primary-600));
		background: color-mix(
			in srgb,
			var(--surface, var(--color-background-primary)) 92%,
			var(--accent, var(--color-primary-600)) 8%
		);
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

	.c-theme-switcher__meta {
		display: grid;
		gap: 0.22rem;
		align-content: start;
		min-width: 0;
	}

	.c-theme-switcher__name {
		font-size: 0.96rem;
		font-weight: 600;
		line-height: 1.2;
	}

	.c-theme-switcher__description {
		color: var(--muted, var(--color-text-secondary));
		font-size: 0.78rem;
		line-height: 1.4;
	}

	.c-theme-switcher__badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		justify-self: end;
		min-height: 1.5rem;
		padding: 0.18rem 0.5rem;
		border-radius: 999px;
		border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 72%, transparent);
		background: color-mix(
			in srgb,
			var(--surface, var(--color-background-primary)) 92%,
			var(--bg, var(--color-background-secondary)) 8%
		);
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		color: var(--muted, var(--color-text-secondary));
	}

	.c-theme-switcher__badge--active {
		border-color: color-mix(in srgb, var(--accent, var(--color-primary-600)) 48%, transparent);
		background: color-mix(
			in srgb,
			var(--accent, var(--color-primary-600)) 14%,
			var(--surface, var(--color-background-primary)) 86%
		);
		color: var(--accent, var(--color-primary-700));
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
		align-items: center;
		gap: 0.55rem;
	}

	.c-theme-switcher__swatch {
		width: 0.85rem;
		height: 0.85rem;
		border-radius: 999px;
		border: 1px solid rgba(15, 23, 42, 0.12);
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
</style>
