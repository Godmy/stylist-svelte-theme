<script lang="ts">
	import ThemeSurface from '$stylist/theme/component/molecule/theme-surface/index.svelte';
	import ThemeProvider from '$stylist/theme/component/atom/theme-provider/index.svelte';
	import type { RecipeThemeSurface } from '$stylist/theme/interface/recipe/theme-surface';
	import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';

	// Render of index.story.ts: header, content and footer are snippets receiving the theme context of a ThemeProvider parent.
	let {
		themeMode,
		themeScheme,
		...args
	}: Omit<RecipeThemeSurface, 'header' | 'content' | 'footer'> &
		Pick<RecipeThemeProvider, 'themeMode' | 'themeScheme'> = $props();
</script>

{#key `${themeMode}-${themeScheme}`}
	<ThemeProvider {themeMode} {themeScheme}>
		<ThemeSurface {...args}>
			{#snippet header(themeContext)}
				<div class="_c1">
					<h3 class="_c2">Themed Surface</h3>
					<p class="_c3">Current mode: {themeContext?.themeMode}</p>
				</div>
			{/snippet}

			{#snippet content(themeContext)}
				<div class="_c4">
					<p class="_c3">Theme mode: {themeContext?.theme.mode}</p>
					<p class="_c3">Theme scheme: {themeContext?.themeScheme}</p>
					<p class="_c3">
						Use this molecule for cards, callouts and dashboard sections that need contextual theme
						access.
					</p>
				</div>
			{/snippet}

			{#snippet footer(themeContext)}
				<div class="_c5">Context bridge active for: {themeContext?.themeMode}</div>
			{/snippet}
		</ThemeSurface>
	</ThemeProvider>
{/key}

<style>
	._c1 > * + * {
		margin-top: 0.25rem;
	}
	._c2 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		opacity: var(--opacity-80);
	}
	._c4 > * + * {
		margin-top: 0.5rem;
	}
	._c5 {
		font-size: 0.75rem;
		line-height: 1rem;
		opacity: var(--opacity-70);
	}
</style>
