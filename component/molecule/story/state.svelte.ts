import type { RecipeStory } from '$stylist/theme/interface/recipe/story';
import type { SlotStory } from '$stylist/theme/interface/slot/story';
import { ManagerStoryViewportContext } from '$stylist/theme/class/manager/story-viewport-context';
import type { TokenStoryViewport } from '$stylist/theme/type/alias/story-viewport';

const VIEWPORT_WIDTH: Record<TokenStoryViewport, string | null> = {
	mobile: '375px',
	tablet: '768px',
	desktop: '1440px',
	fullscreen: null
};

export function createStoryState(props: RecipeStory) {
	const viewportContext = ManagerStoryViewportContext.getOptional();

	let controlValues = $state<Record<string, unknown>>(
		Object.fromEntries((props.controls ?? []).map((control) => [control.name, control.defaultValue]))
	);

	$effect(() => {
		for (const control of props.controls ?? []) {
			if (!(control.name in controlValues)) {
				controlValues = { ...controlValues, [control.name]: control.defaultValue };
			}
		}
	});

	function coerceValue(control: SlotStory, raw: unknown): unknown {
		if (control.type === 'boolean') {
			return Boolean(raw);
		}

		if (control.type === 'number' || control.type === 'range') {
			const parsed = Number(raw);
			return Number.isNaN(parsed) ? (control.defaultValue ?? 0) : parsed;
		}

		if (control.type === 'select' && Array.isArray(control.options) && control.options.length > 0) {
			const first = control.options[0];
			if (typeof first === 'number') {
				const parsed = Number(raw);
				return Number.isNaN(parsed) ? first : parsed;
			}
		}

		return raw;
	}

	function handleChange(control: SlotStory, value: unknown) {
		controlValues = {
			...controlValues,
			[control.name]: coerceValue(control, value)
		};
	}

	return {
		get controlValues() {
			return controlValues;
		},
		get viewport() {
			return viewportContext?.viewport ?? 'fullscreen';
		},
		get previewMaxWidth() {
			return VIEWPORT_WIDTH[viewportContext?.viewport ?? 'fullscreen'];
		},
		handleChange
	};
}
