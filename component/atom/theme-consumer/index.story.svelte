<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ThemeConsumer from './index.svelte';
	import ThemeProvider from '../theme-provider/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'themeMode',
			type: 'select',
			defaultValue: 'dark',
			options: ['default', 'light', 'dark']
		},
		{
			name: 'themeScheme',
			type: 'select',
			defaultValue: 'minimal',
			options: ['minimal', 'ocean', 'forest', 'sunset']
		}
	];
</script>

<Story
	{controls}
	component={ThemeConsumer}
	title="ThemeConsumer"
	description="Reads the current theme context exposed by the provider."
>
	{#snippet children(values: any)}
		{#key `${values.themeMode}-${values.themeScheme}`}
			<ThemeProvider
				themeMode={values.themeMode as any}
				themeScheme={values.themeScheme as any}
				class="_c1"
			>
				{#snippet children()}
					<ThemeConsumer>
						{#snippet children(themeContext)}
							<div class="_c2">
								<p class="_c3 tracking-[0.16em]">Theme context</p>
								<div class="_c4">
									<p class="_c5">mode</p>
									<strong class="_c6">{themeContext?.themeMode ?? 'missing'}</strong>
								</div>
								<div class="_c4">
									<p class="_c5">scheme</p>
									<strong class="_c6">{themeContext?.themeScheme ?? 'missing'}</strong>
								</div>
							</div>
						{/snippet}
					</ThemeConsumer>
				{/snippet}
			</ThemeProvider>
		{/key}
	{/snippet}
</Story>

<style>
	._c1 {
		display: block;
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 1.5rem;
	}
	._c2 {
		display: grid;
		gap: 0.75rem;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
		text-transform: uppercase;
	}
	._c4 {
		display: grid;
		gap: 0.5rem;
		border-radius: 1rem;
		background-color: #f8fafc;
		padding: 1rem;
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
	._c6 {
		color: #0f172a;
	}
</style>
