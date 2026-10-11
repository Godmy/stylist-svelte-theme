import type { RecipeStory } from '$stylist/theme/interface/recipe/story';
import type { SlotStory } from '$stylist/theme/interface/slot/story';
import { ManagerStoryViewportContext } from '$stylist/theme/class/manager/story-viewport-context';

function coerceValue(control: SlotStory, raw: unknown): unknown {
	if (control.type === 'boolean') return Boolean(raw);
	if (control.type === 'number' || control.type === 'range') {
		const parsed = Number(raw);
		return Number.isNaN(parsed) ? (control.defaultValue ?? 0) : parsed;
	}
	if (control.type === 'select' && typeof control.options?.[0] === 'number') {
		const parsed = Number(raw);
		return Number.isNaN(parsed) ? control.options[0] : parsed;
	}
	return raw;
}

export function createStoryState(getProps: () => RecipeStory) {
	const props = $derived(getProps());
	// Set by the sandbox preview; device width is applied by its iframe, not here.
	const viewport = ManagerStoryViewportContext.getOptional();
	const controls = $derived(props.controls ?? []);

	let overrides = $state<Record<string, unknown>>({});
	const controlValues = $derived({
		...Object.fromEntries(controls.map((control) => [control.name, control.defaultValue])),
		...overrides
	});

	return {
		get controls() {
			return controls;
		},
		get controlValues() {
			return controlValues;
		},
		get fullscreen() {
			return props.preview === 'fullscreen' || (viewport?.fullscreen ?? false);
		},
		get isolated() {
			return viewport?.isolated ?? false;
		},
		get hasHeader() {
			return !!(props.title || props.description || props.category || props.tags?.length);
		},
		handleChange(control: SlotStory, value: unknown) {
			overrides = { ...overrides, [control.name]: coerceValue(control, value) };
		}
	};
}
