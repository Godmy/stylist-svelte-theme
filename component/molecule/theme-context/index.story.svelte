<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ThemeContext from './index.svelte';
	import ThemeProvider from '$stylist/theme/component/atom/theme-provider/index.svelte';
</script>

<Story
	component={ThemeContext}
	title="ThemeContext"
	description="Composable molecule for reading theme context via snippets."
>
	{#snippet children()}
		<ThemeProvider themeMode="dark" themeScheme="ocean">
			<ThemeContext
				class="_c1"
				style="border-color:var(--app-line,#d8deea);background:var(--app-surface,#ffffff);color:var(--app-text,#171923);"
			>
				{#snippet children(themeContext)}
					<div class="_c2">
						<h3 class="_c3">Theme Context</h3>
						<p class="_c4">Mode: {themeContext?.themeMode}</p>
						<p class="_c4">Scheme: {themeContext?.themeScheme}</p>
					</div>
				{/snippet}
			</ThemeContext>
		</ThemeProvider>
	{/snippet}
</Story>

<style>
	._c1 {
		display: block;
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c2 > * + * {
		margin-top: 0.5rem;
	}
	._c3 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c4 {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
