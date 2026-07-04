<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';

	import ThemeSurface from './index.svelte';

	import ThemeProvider from '$stylist/theme/component/atom/theme-provider/index.svelte';
</script>

<Story
	component={ThemeSurface}
	title="ThemeSurface"
	description="Content-oriented molecule that renders themed header, content and footer snippets."
>
	{#snippet children()}
		<ThemeProvider themeMode="light" themeScheme="minimal">
			<ThemeSurface>
				{#snippet header(themeContext)}
					<div class="_c1">
						<h3 class="_c2">Themed Surface</h3>

						<p class="_c3">
							Current mode: {themeContext?.themeMode}
						</p>
					</div>
				{/snippet}

				{#snippet content(themeContext)}
					<div class="_c4">
						<p class="_c3">Theme mode: {themeContext?.theme.mode}</p>

						<p class="_c3">Theme scheme: {themeContext?.themeScheme}</p>

						<p class="_c3">
							Use this molecule for cards, callouts and dashboard sections that need contextual
							theme access.
						</p>
					</div>
				{/snippet}

				{#snippet footer(themeContext)}
					<div class="_c5">
						Context bridge active for: {themeContext?.themeMode}
					</div>
				{/snippet}
			</ThemeSurface>
		</ThemeProvider>
	{/snippet}
</Story>

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
	}

	._c4 > * + * {
		margin-top: 0.5rem;
	}

	._c5 {
		font-size: 0.75rem;

		line-height: 1rem;
	}

	._c3 {
		opacity: var(--opacity-80);
	}

	._c5 {
		opacity: var(--opacity-70);
	}
</style>
