<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import type { RecipeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';
	import createColorSwatchState from '$stylist/theme/component/atom/color-swatch/state.svelte';

	let props: RecipeColorSwatch = $props();
	const state = createColorSwatchState(() => props);
</script>

<HtmlDiv
	class={state.classes}
	style={`--color-swatch-color: ${state.color}; --color-swatch-size: ${state.size};`}
	{...state.restProps}
>
	{#if props.children}
		<HtmlDiv class="c-color-swatch__content">
			{@render props.children()}
		</HtmlDiv>
	{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer theme {
		:global {
			:where(.c-color-swatch) {
				display: inline-block;
				width: var(--color-swatch-size, var(--space-8, 2rem));
				height: var(--color-swatch-size, var(--space-8, 2rem));
				border: var(--border-width-thin, 1px) solid var(--color-border-secondary);
				border-radius: var(--radius-1-5, 0.375rem);
				background-color: var(--color-swatch-color);
				overflow: hidden;
			}
			:where(.c-color-swatch__content) {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
