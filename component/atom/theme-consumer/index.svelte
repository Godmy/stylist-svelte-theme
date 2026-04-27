<script lang="ts">
	import type { ThemeConsumerRecipe } from '$stylist/theme/interface/recipe/theme-consumer';
	import { createThemeConsumerState } from '$stylist/theme/function/state/theme-consumer';

	let { children }: ThemeConsumerRecipe = $props();
	const state = createThemeConsumerState();
</script>

{@render children(state.themeContext ?? null)}
