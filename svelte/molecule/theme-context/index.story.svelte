<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import ThemeContext from './index.svelte';
	import { ThemeProvider } from '$stylist';
</script>

<Story component={ThemeContext} title="ThemeContext" description="Composable molecule for reading theme context via snippets.">
	{#snippet children()}
		<ThemeProvider initialMode="dark" initialScheme="ocean">
			<ThemeContext class="block rounded-xl border p-4" style="border-color:var(--app-line,#d8deea);background:var(--app-surface,#ffffff);color:var(--app-text,#171923);">
				{#snippet children(themeContext)}
					<div class="space-y-2">
						<h3 class="text-lg font-semibold">Theme Context</h3>
						<p class="text-sm">Mode: {themeContext?.themeMode}</p>
						<p class="text-sm">Scheme: {themeContext?.themeScheme}</p>
					</div>
				{/snippet}
			</ThemeContext>
		</ThemeProvider>
	{/snippet}
</Story>
