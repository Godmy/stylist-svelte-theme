<script lang="ts">
	import ThemePalette from './index.svelte';
	import type { RecipeThemePalette } from '$stylist/theme/interface/recipe/theme-palette';
	import type { SlotThemePaletteColor } from '$stylist/theme/interface/slot/theme-palette-color';
	import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
	import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';
	import { THEME_SCHEMES } from '$stylist/theme/const/record/theme-schemes';

	// Render of index.story.ts: the palette colors are computed from the theme scheme, mode and color source knobs.
	let {
		scheme = 'minimal',
		mode = 'light',
		colorSource = 'semantic',
		...args
	}: Omit<RecipeThemePalette, 'colors'> & {
		scheme?: TokenThemeScheme;
		mode?: TokenThemeMode;
		colorSource?: string;
	} = $props();

	const theme = $derived.by(() => {
		const definition = THEME_SCHEMES.find((item) => item.id === scheme) ?? THEME_SCHEMES[0];
		return mode === 'dark' ? definition.dark : definition.light;
	});

	function getScaleColors(scale: Record<number, string>, label: string): SlotThemePaletteColor[] {
		return Object.entries(scale).map(([tone, value]) => ({ name: `${label} ${tone}`, value }));
	}

	function getRecordColors(record: Record<string, string>, label: string): SlotThemePaletteColor[] {
		return Object.entries(record).map(([name, value]) => ({ name: `${label} ${name}`, value }));
	}

	const colors = $derived.by((): SlotThemePaletteColor[] => {
		const palette = theme.colors;
		if (colorSource === 'background') return getRecordColors(palette.background, 'background');
		if (colorSource === 'text') return getRecordColors(palette.text, 'text');
		if (colorSource === 'border') return getRecordColors(palette.border, 'border');
		if (colorSource === 'primary') return getScaleColors(palette.primary, 'primary');
		if (colorSource === 'secondary') return getScaleColors(palette.secondary, 'secondary');
		if (colorSource === 'neutral') return getScaleColors(palette.neutral, 'neutral');
		return [
			{ name: 'primary', value: palette.primary[500] },
			{ name: 'secondary', value: palette.secondary[500] },
			{ name: 'tertiary', value: palette.tertiary?.[500] ?? palette.primary[600] },
			{ name: 'neutral', value: palette.neutral[500] },
			{ name: 'success', value: palette.success[500] },
			{ name: 'info', value: palette.info[500] },
			{ name: 'warning', value: palette.warning[500] },
			{ name: 'error', value: palette.error[500] },
			{ name: 'danger', value: palette.danger[500] },
			{ name: 'surface', value: palette.background.primary },
			{ name: 'text', value: palette.text.primary },
			{ name: 'border', value: palette.border.primary }
		];
	});
</script>

<ThemePalette {...args} {colors} />
