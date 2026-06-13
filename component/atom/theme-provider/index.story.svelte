<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ThemeProvider from './index.svelte';
	import ThemeConsumer from '../theme-consumer/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'themeMode',
			type: 'select',
			defaultValue: 'light',
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
	component={ThemeProvider}
	title="ThemeProvider"
	description="Provides theme mode and scheme to nested consumers."
>
	{#snippet children(values: any)}
		{#key `${values.themeMode}-${values.themeScheme}`}
			<ThemeProvider
				themeMode={values.themeMode as any}
				themeScheme={values.themeScheme as any}
				class="_c1"
			>
				{#snippet children()}
					<div class="_c2">
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
