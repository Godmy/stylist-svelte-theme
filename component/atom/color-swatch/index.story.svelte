<script lang="ts">
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ColorSwatch from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'color',
			type: 'text',
			defaultValue: '#0ea5e9'
		},
		{
			name: 'size',
			type: 'text', // Using text type since we need to handle numeric values as strings in the control system
			defaultValue: '32'
		}
	];
</script>

<Story
	{controls}
	component={ColorSwatch}
	title="ColorSwatch Component"
	description="A component to display a color swatch with customizable size"
	tags={['information', 'data-display', 'color']}
>
	{#snippet children(values: any)}
		{@const parsedSize = Number(values.size)}
		<ColorSwatch color={values.color as string} size={Number.isNaN(parsedSize) ? 32 : parsedSize} />
	{/snippet}
</Story>
