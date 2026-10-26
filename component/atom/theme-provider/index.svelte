<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';
	import createThemeProviderState from '$stylist/theme/component/atom/theme-provider/state.svelte';

	let props: RecipeThemeProvider = $props();
	const state = createThemeProviderState(() => props);
</script>

<HtmlDiv class={state.containerClass} {...state.restProps}>
	{#if props.children}{@render props.children()}{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer theme {
		:global {
			/* The provider only scopes the theme; it adds no box of its own. */
			:where(.c-theme-provider) {
				display: contents;
			}
		}
	}
</style>
