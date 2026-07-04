<script lang="ts">
	import ThemeConsumer from '$stylist/theme/component/atom/theme-consumer/index.svelte';
	import type { RecipeThemeSurface } from '$stylist/theme/interface/recipe/theme-surface';
	import createThemeSurfaceState from '$stylist/theme/function/state/theme-surface/index.svelte';

	let props: RecipeThemeSurface = $props();
	const state = createThemeSurfaceState(props);
</script>

<ThemeConsumer>
	{#snippet children(themeContext)}
		<section
			class={['layout-theme-surface', props.class].filter(Boolean).join(' ')}
			theme-mode={themeContext?.themeMode}
			theme-scheme={themeContext?.themeScheme}
			{...state.restProps}
		>
			{#if props.header}
				<header
					class={['layout-theme-surface__header', props.headerClass].filter(Boolean).join(' ')}
				>
					{@render props.header(themeContext)}
				</header>
			{/if}

			<div class={['layout-theme-surface__content', props.contentClass].filter(Boolean).join(' ')}>
				{@render props.content(themeContext)}
			</div>

			{#if props.footer}
				<footer
					class={['layout-theme-surface__footer', props.footerClass].filter(Boolean).join(' ')}
				>
					{@render props.footer(themeContext)}
				</footer>
			{/if}
		</section>
	{/snippet}
</ThemeConsumer>

<style>
	.layout-theme-surface {
		display: grid;
		gap: var(--spacing-3, 0.75rem);
		padding: var(--spacing-4, 1rem);
		border: 1px solid var(--line, var(--color-border-primary));
		border-radius: var(--border-radius-2xl, 1.25rem);
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
		box-shadow: var(--shadow-custom45, 0 12px 32px rgba(15, 23, 42, 0.08));
	}

	.layout-theme-surface__header,
	.layout-theme-surface__footer {
		display: grid;
		gap: var(--spacing-2, 0.5rem);
	}

	.layout-theme-surface__content {
		display: grid;
		gap: var(--spacing-3, 0.75rem);
	}
</style>
