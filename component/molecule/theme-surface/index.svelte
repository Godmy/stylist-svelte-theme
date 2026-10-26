<script lang="ts">
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlHeader from '$stylist/html/component/organism/header/index.svelte';
	import HtmlFooter from '$stylist/html/component/organism/footer/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import ThemeConsumer from '$stylist/theme/component/atom/theme-consumer/index.svelte';
	import type { RecipeThemeSurface } from '$stylist/theme/interface/recipe/theme-surface';
	import createThemeSurfaceState from '$stylist/theme/component/molecule/theme-surface/state.svelte';

	let props: RecipeThemeSurface = $props();
	const state = createThemeSurfaceState(() => props);
</script>

<ThemeConsumer>
	{#snippet children(themeContext)}
		<HtmlSection
			class={['theme-surface', props.class].filter(Boolean).join(' ')}
			theme-mode={themeContext?.themeMode}
			theme-scheme={themeContext?.themeScheme}
			{...state.restProps}
		>
			{#if props.header}
				<HtmlHeader class={['theme-surface__header', props.headerClass].filter(Boolean).join(' ')}>
					{@render props.header(themeContext)}
				</HtmlHeader>
			{/if}

			<HtmlDiv class={['theme-surface__content', props.contentClass].filter(Boolean).join(' ')}>
				{@render props.content(themeContext)}
			</HtmlDiv>

			{#if props.footer}
				<HtmlFooter class={['theme-surface__footer', props.footerClass].filter(Boolean).join(' ')}>
					{@render props.footer(themeContext)}
				</HtmlFooter>
			{/if}
		</HtmlSection>
	{/snippet}
</ThemeConsumer>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer theme {
		:global {
			:where(.theme-surface) {
				display: grid;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				padding: calc(var(--space-4, 1rem) * var(--density-scale, 1));
				border: var(--border-width-thin, 1px) solid var(--line, var(--color-border-primary));
				border-radius: var(--radius-5, 1.25rem);
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
			:where(.theme-surface__header, .theme-surface__footer) {
				display: grid;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
			}
			:where(.theme-surface__content) {
				display: grid;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
			}
		}
	}
</style>
