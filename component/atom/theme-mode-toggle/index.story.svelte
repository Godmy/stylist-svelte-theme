<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
	import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
	import ThemeModeToggle from './index.svelte';

	type ThemeModeToggleStoryProps = {
		themeMode: TokenThemeMode;
		themeScheme: TokenThemeScheme;
		showLabels: boolean;
		disabled: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'themeMode',
			type: 'select',
			defaultValue: 'default',
			options: ['default', 'light', 'dark']
		},
		{
			name: 'themeScheme',
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
	description="A toggle for switching between default, light, and dark theme modes. Default mode uses the selected themeScheme."
	tags={['theme', 'toggle', 'theme-mode']}
	{controls}
>
	{#snippet children(values: any)}
		{@const themeMode = (values.themeMode ?? 'default') as ThemeModeToggleStoryProps['themeMode']}
		{@const themeScheme = (values.themeScheme ??
			'minimal') as ThemeModeToggleStoryProps['themeScheme']}
		{@const showLabels = typeof values.showLabels === 'boolean' ? values.showLabels : true}
		{@const disabled = typeof values.disabled === 'boolean' ? values.disabled : false}
		<div class="_c1">
			<h2 class="_c2">ThemeModeToggle Story</h2>
			<p class="_c3">
				Current: {themeMode} | Theme Scheme: {themeScheme}
				<br />
				When "default" is selected, the theme is determined by the themeScheme and system preference.
			</p>
			<ThemeModeToggle {themeMode} {themeScheme} {showLabels} {disabled} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}
	._c3 {
		margin-bottom: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #6b7280;
	}
</style>
