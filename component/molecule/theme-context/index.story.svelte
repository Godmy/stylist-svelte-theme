<script lang="ts">
	import ThemeContext from '$stylist/theme/component/molecule/theme-context/index.svelte';
	import ThemeProvider from '$stylist/theme/component/atom/theme-provider/index.svelte';
	import type { RecipeThemeContext } from '$stylist/theme/interface/recipe/theme-context';
	import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';

	// Render of index.story.ts: the molecule needs a ThemeProvider parent and a children snippet that receives the context.
	let {
		themeMode,
		themeScheme,
		...args
	}: Omit<RecipeThemeContext, 'children'> & Pick<RecipeThemeProvider, 'themeMode' | 'themeScheme'> =
		$props();
</script>

{#key `${themeMode}-${themeScheme}`}
	<ThemeProvider {themeMode} {themeScheme}>
		<ThemeContext
			{...args}
			style="display:block;border-radius:0.75rem;border:1px solid var(--app-line,#d8deea);padding:1rem;background:var(--app-surface,#ffffff);color:var(--app-text,#171923);"
		>
			{#snippet children(themeContext)}
				<div class="_c1">
					<h3 class="_c2">Theme Context</h3>
					<p class="_c3">Mode: {themeContext?.themeMode}</p>
					<p class="_c3">Scheme: {themeContext?.themeScheme}</p>
				</div>
			{/snippet}
		</ThemeContext>
	</ThemeProvider>
{/key}

<style>
	._c1 > * + * {
		margin-top: 0.5rem;
	}
	._c2 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
