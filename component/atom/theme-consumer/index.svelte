<script lang="ts">
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import type { RecipeThemeConsumer } from '$stylist/theme/interface/recipe/theme-consumer';

	let { children }: RecipeThemeConsumer = $props();
	const themeContext = ManagerThemeContext.getOptional();
</script>

{@render children(themeContext ?? null)}
