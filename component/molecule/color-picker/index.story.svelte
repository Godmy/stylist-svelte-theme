<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ColorPicker from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'value',
			type: 'text',
			defaultValue: '#3b82f6',
			description: 'Selected color value'
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Select a color',
			description: 'Label for the color picker'
		},
		{
			name: 'helperText',
			type: 'text',
			defaultValue: 'Choose your preferred color',
			description: 'Helper text for the color picker'
		}
	];

	function handleValueChange(newValue: string) {
		console.log('Color changed:', newValue);
	}
</script>

<Story
	{controls}
	title="ColorPicker Component"
	description="Interactive color picker with customizable options"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<ColorPicker
				value={controlValues.value}
				label={controlValues.label}
				helperText={controlValues.helperText}
				onValueInput={(newValue) => console.log('Color input:', newValue)}
				onValueChange={handleValueChange}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
</style>
