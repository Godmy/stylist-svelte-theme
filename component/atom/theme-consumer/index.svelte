<script lang="ts">
	import type { RecipeThemeConsumer } from '$stylist/theme/interface/recipe/theme-consumer';
	import createThemeConsumerState from '$stylist/theme/function/state/theme-consumer/index.svelte';

	let { children }: RecipeThemeConsumer = $props();
	const state = createThemeConsumerState();
</script>

{@render children(state.themeContext ?? null)}
