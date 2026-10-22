<script lang="ts">
	import ThemeProvider from '$stylist/theme/component/atom/theme-provider/index.svelte';
	import ThemeConsumer from '$stylist/theme/component/atom/theme-consumer/index.svelte';
	import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';

	// Render of index.story.ts: a nested ThemeConsumer snippet shows the context the provider exposes.
	let args: RecipeThemeProvider = $props();
</script>

{#key `${args.themeMode}-${args.themeScheme}`}
	<ThemeProvider {...args}>
		<div class="_c1 _c2">
			<div class="_c3">
				<p class="_c4">Provider shell</p>
				<h3 class="_c5">Nested components inherit the active theme context.</h3>
			</div>
			<ThemeConsumer>
				{#snippet children(themeContext)}
					<div class="_c6">
						Resolved mode: <strong class="_c7">{themeContext?.themeMode}</strong>, scheme:
						<strong class="_c7">{themeContext?.themeScheme}</strong>
					</div>
				{/snippet}
			</ThemeConsumer>
		</div>
	</ThemeProvider>
{/key}

<style>
	._c1 {
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		padding: 1.5rem;
	}
	._c2 {
		display: grid;
		gap: 1rem;
	}
	._c3 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 1rem;
	}
	._c4 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
	._c5 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: #0f172a;
	}
	._c6 {
		border-radius: 1rem;
		background-color: #f8fafc;
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #475569;
	}
	._c7 {
		color: #0f172a;
	}
</style>
