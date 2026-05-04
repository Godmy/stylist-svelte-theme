<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ThemeProvider from './index.svelte';
	import ThemeConsumer from '../theme-consumer/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'initialMode', type: 'select', defaultValue: 'light', options: ['default', 'light', 'dark'] },
		{ name: 'initialScheme', type: 'select', defaultValue: 'minimal', options: ['minimal', 'ocean', 'forest', 'sunset'] }
	];
</script>

<Story
	{controls}
	component={ThemeProvider}
	title="ThemeProvider"
	description="Provides theme mode and scheme to nested consumers."
>
	{#snippet children(values: any)}
		{#key `${values.initialMode}-${values.initialScheme}`}
			<ThemeProvider
				initialMode={values.initialMode as any}
				initialScheme={values.initialScheme as any}
				class="block rounded-3xl border border-slate-200 p-6"
			>
				{#snippet children()}
					<div class="grid gap-4">
						<div class="rounded-2xl border border-slate-200 bg-white p-4">
							<p class="text-sm text-slate-500">Provider shell</p>
							<h3 class="text-lg font-semibold text-slate-900">Nested components inherit the active theme context.</h3>
						</div>
						<ThemeConsumer>
							{#snippet children(themeContext)}
								<div class="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
									Resolved mode: <strong class="text-slate-900">{themeContext?.themeMode}</strong>,
									scheme: <strong class="text-slate-900">{themeContext?.themeScheme}</strong>
								</div>
							{/snippet}
						</ThemeConsumer>
					</div>
				{/snippet}
			</ThemeProvider>
		{/key}
	{/snippet}
</Story>
