<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import ThemeConsumer from '$stylist/theme/component/atom/theme-consumer/index.svelte';
	import type { RecipeThemeContext } from '$stylist/theme/interface/recipe/theme-context';
	import createThemeContextState from '$stylist/theme/component/molecule/theme-context/state.svelte';

	let props: RecipeThemeContext = $props();
	const state = createThemeContextState(() => props);
</script>

<HtmlDiv class={state.rootClass} {...state.restProps}>
	<ThemeConsumer>
		{#snippet children(themeContext)}
			{@render props.children(themeContext)}
		{/snippet}
	</ThemeConsumer>
</HtmlDiv>
