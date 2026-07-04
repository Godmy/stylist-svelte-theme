<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ThemeSwitcher from './index.svelte';

	let selectedTheme = $state<'minimal' | 'ocean' | 'forest' | 'sunset'>('minimal');

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'themeScheme',
			type: 'select',
			defaultValue: 'minimal',
			options: ['minimal', 'ocean', 'forest', 'sunset']
		},
		{ name: 'showLabels', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={ThemeSwitcher}
	title="ThemeSwitcher"
	description="Switch between multiple UI color palettes."
	{controls}
>
	{#snippet children(values: any)}
		<div
			class="_c1"
			style="background:var(--app-bg,#f7f7f9);color:var(--app-text,#171923);border-color:var(--app-line,#d8deea);"
		>
			<ThemeSwitcher
				themeScheme={values.themeScheme}
				showLabels={values.showLabels}
				onThemeSchemeChange={(theme) => (selectedTheme = theme)}
			/>
			<p class="_c2">Selected UI theme: {selectedTheme}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
