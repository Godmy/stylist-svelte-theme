<script lang="ts">
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { TokenSizeRem } from '$stylist/theme/type/alias/size-rem';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import ColorSwatch from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'color',
			type: 'text',
			defaultValue: '#0ea5e9'
		},
		{
			name: 'size',
			type: 'text',
			defaultValue: '2rem'
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
		<ColorSwatch color={values.color as string} size={values.size as TokenSizeRem} />
	{/snippet}
</Story>
