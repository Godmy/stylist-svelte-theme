<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { StyleManagerThemeSettings } from '$stylist/theme/class/style-manager/theme-settings';
	import { ObjectManagerThemeSettings } from '$stylist/theme/class/object-manager/theme-settings';
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
		<div class={StyleManagerThemeSettings.preferences('sb-organisms-appearance-settings p-4')}>
			<h1 class="mb-4 text-lg font-semibold">AppearanceSettings Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive AppearanceSettings</h2>
				<div class="max-w-md">
					<AppearanceSettingsComponent
						contract={ObjectManagerThemeSettings.createContract({
							themeMode: values.themeMode,
							themeScheme: values.themeScheme
						})}
					/>
				</div>
			</div>
		</div>
	{/snippet}
</Story>
