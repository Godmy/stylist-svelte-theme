<script lang="ts">
	import ThemeConsumer from '$stylist/theme/component/atom/theme-consumer/index.svelte';
	import type { RecipeThemeContext } from '$stylist/theme/interface/recipe/theme-context';
	import createThemeContextState from '$stylist/theme/function/state/theme-context/index.svelte';

	let props: RecipeThemeContext = $props();
	const state = createThemeContextState(props);
</script>

<div class={state.rootClass} {...state.restProps}>
	<ThemeConsumer>
		{#snippet children(themeContext)}
			{@render props.children(themeContext)}
		{/snippet}
	</ThemeConsumer>
</div>

<style>
</style>
