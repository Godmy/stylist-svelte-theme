<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { ManagerThemeSettings } from '$stylist/theme/class/manager/theme-settings';
	import AppearanceSettingsComponent from './index.svelte';

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
		}
	];
</script>

<Story
	id="organisms-appearance-settings"
	title="Organisms / Interaction / Forms / Settings / Appearance Settings"
	component={AppearanceSettingsComponent}
	category="Organisms/Interaction/Forms/Settings"
	description="A theme settings component for managing theme mode, scheme, and display preferences."
	tags={['settings', 'appearance', 'theme', 'display']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="c-theme-settings sb-organisms-appearance-settings _c1">
			<h1 class="_c2">AppearanceSettings Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive AppearanceSettings</h2>
				<div class="_c5">
					<AppearanceSettingsComponent
						{...ManagerThemeSettings.createContract({
							themeMode: values.themeMode,
							themeScheme: values.themeScheme
						})}
					/>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		max-width: 28rem;
	}
</style>
