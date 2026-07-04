<script lang="ts">
	import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';
	import createThemeProviderState from '$stylist/theme/function/state/theme-provider/index.svelte';

	let props: RecipeThemeProvider = $props();
	const state = createThemeProviderState(props);

	const restProps = $derived(
		(() => {
			const {
				themeMode: _themeMode,
				themeScheme: _themeScheme,
				class: _class,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.containerClass} {...restProps}>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.c-theme-provider {
		display: contents;
	}
</style>
