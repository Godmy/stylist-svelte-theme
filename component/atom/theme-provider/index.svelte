<script lang="ts">
	import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';
	import createThemeProviderState from './state.svelte';

	let props: RecipeThemeProvider = $props();
	const state = createThemeProviderState(() => props);
</script>

<div class={state.containerClass} {...state.restProps}>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.c-theme-provider {
		display: contents;
	}
</style>
