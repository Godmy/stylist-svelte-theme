<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
	import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
	import ThemeModeToggle from './index.svelte';

	type ThemeModeToggleStoryProps = {
		currentTheme: TokenThemeMode;
		defaultScheme: TokenThemeScheme;
		showLabels: boolean;
		disabled: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'currentTheme',
			type: 'select',
			defaultValue: 'default',
			options: ['default', 'light', 'dark']
		},
		{
			name: 'defaultScheme',
			type: 'select',
			defaultValue: 'minimal',
			options: ['minimal', 'ocean', 'forest', 'sunset']
		},
		{
			name: 'showLabels',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	id="atoms-theme-mode-toggle"
	title="ThemeModeToggle"
	component={ThemeModeToggle}
	category="Atoms"
	description="A toggle for switching between default, light, and dark theme modes. Default mode uses the selected defaultScheme."
	tags={['theme', 'toggle', 'theme-mode']}
	{controls}
>
	{#snippet children(values: any)}
		{@const currentTheme = (values.currentTheme ?? 'default') as ThemeModeToggleStoryProps['currentTheme']}
		{@const defaultScheme = (values.defaultScheme ?? 'minimal') as ThemeModeToggleStoryProps['defaultScheme']}
		{@const showLabels = typeof values.showLabels === 'boolean' ? values.showLabels : true}
		{@const disabled = typeof values.disabled === 'boolean' ? values.disabled : false}
		<div class="rounded-lg bg-[var(--color-background-secondary)] p-8">
			<h2 class="mb-4 text-xl font-bold">ThemeModeToggle Story</h2>
			<p class="mb-4 text-sm text-gray-500">
				Current: {currentTheme} | Default Scheme: {defaultScheme}
				<br/>
				When "default" is selected, the theme is determined by the defaultScheme and system preference.
			</p>
			<ThemeModeToggle {currentTheme} {defaultScheme} {showLabels} {disabled} />
		</div>
	{/snippet}
</Story>








