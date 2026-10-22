import Story from '$stylist/theme/component/molecule/story/index.svelte';
import type { RecipeStory } from '$stylist/theme/interface/recipe/story';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Legacy playground wrapper; index.story.svelte supplies its preview and variants snippets. */
export default {
	component: Story,
	title: 'Story',
	description:
		'Playground wrapper: header, live preview, optional variants slot and a controls panel.',
	args: {
		title: 'Story',
		category: 'Theme / Molecule',
		description:
			'Playground wrapper: header, live preview, optional variants slot and a controls panel.',
		tags: ['sandbox', 'controls'],
		preview: 'card',
		controls: [
			{ name: 'titleText', type: 'text', defaultValue: 'Live preview title' },
			{ name: 'showAccent', type: 'boolean', defaultValue: true },
			{ name: 'size', type: 'range', defaultValue: 16, min: 12, max: 32, step: 1 },
			{ name: 'tone', type: 'select', defaultValue: 'primary', options: ['primary', 'success'] }
		]
	},
	controls: {
		title: { type: 'text' },
		category: { type: 'text' },
		description: { type: 'text' },
		preview: { type: 'select', options: ['card', 'fullscreen'] }
	}
} satisfies ContractStory<RecipeStory>;
