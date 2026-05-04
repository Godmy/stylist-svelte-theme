<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ThemeConsumer from './index.svelte';
	import ThemeProvider from '../theme-provider/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'initialMode', type: 'select', defaultValue: 'dark', options: ['default', 'light', 'dark'] },
		{ name: 'initialScheme', type: 'select', defaultValue: 'minimal', options: ['minimal', 'ocean', 'forest', 'sunset'] }
	];
</script>

<Story
	{controls}
	component={ThemeConsumer}
	title="ThemeConsumer"
	description="Reads the current theme context exposed by the provider."
>
	{#snippet children(values: any)}
		{#key `${values.initialMode}-${values.initialScheme}`}
			<ThemeProvider
				initialMode={values.initialMode as any}
				initialScheme={values.initialScheme as any}
				class="block rounded-3xl border border-slate-200 bg-white p-6"
			>
				{#snippet children()}
					<ThemeConsumer>
						{#snippet children(themeContext)}
							<div class="grid gap-3">
								<p class="text-sm uppercase tracking-[0.16em] text-slate-500">Theme context</p>
								<div class="grid gap-2 rounded-2xl bg-slate-50 p-4">
									<p class="text-sm text-slate-500">mode</p>
									<strong class="text-slate-900">{themeContext?.themeMode ?? 'missing'}</strong>
								</div>
								<div class="grid gap-2 rounded-2xl bg-slate-50 p-4">
									<p class="text-sm text-slate-500">scheme</p>
									<strong class="text-slate-900">{themeContext?.themeScheme ?? 'missing'}</strong>
								</div>
							</div>
						{/snippet}
					</ThemeConsumer>
				{/snippet}
			</ThemeProvider>
		{/key}
	{/snippet}
</Story>
