<script lang="ts">
	import { ManagerThemeSettings } from '$stylist/theme/class/manager/theme-settings';
	import type { RecipeThemeSettings } from '$stylist/theme/interface/recipe/theme-settings';
	import createThemeSettingsState from '$stylist/theme/function/state/theme-settings/index.svelte';
	import { formatLabel } from '$stylist/theme/function/script/format-label';
	import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';
	import ThemeSwitcher from '$stylist/theme/component/molecule/theme-switcher/index.svelte';
	import ThemeSurface from '$stylist/layout/component/molecule/theme-surface/index.svelte';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';

	let {
		themeMode,
		themeScheme,
		themes,
		modeSection,
		schemeSection,
		onThemeModeChange,
		onThemeSchemeChange,
		modeToggleProps: modeToggleRecipeProps = {},
		switcherProps: switcherRecipeProps = {},
		class: className = '',
		...restProps
	}: RecipeThemeSettings = $props();

	const themeContext = ManagerThemeContext.getOptional();
	const resolvedSettings = $derived(
		ManagerThemeSettings.createContract({
			themeMode,
			themeScheme,
			themes,
			modeSection,
			schemeSection,
			onThemeModeChange,
			onThemeSchemeChange
		})
	);
	const state = createThemeSettingsState(() => resolvedSettings);

	function handleModeChange(nextTheme: 'light' | 'dark' | 'default') {
		state.handleThemeModeChange(nextTheme);
	}

	function handleSchemeChange(nextTheme: 'minimal' | 'ocean' | 'forest' | 'sunset') {
		state.handleThemeSchemeChange(nextTheme);
	}

	const classNameStr = $derived(className == null ? undefined : String(className));
	const formClass = $derived(['c-theme-settings', classNameStr].filter(Boolean).join(' '));
	const surfaceClass = 'c-theme-settings__surface';
	const surfaceHeadingClass = 'c-theme-settings__surface-heading';
	const surfaceEyebrowClass = 'c-theme-settings__surface-eyebrow';
	const surfaceTitleClass = 'c-theme-settings__surface-title';
	const surfaceHelpClass = 'c-theme-settings__surface-help';
	const surfaceSummaryClass = 'c-theme-settings__surface-summary';
	const surfaceBadgeClass = 'c-theme-settings__surface-badge';
	const itemClass = 'c-theme-settings__item';
	const itemColumnClass = 'c-theme-settings__item c-theme-settings__item--column';
	const metaClass = 'c-theme-settings__meta';
	const metaEyebrowClass = 'c-theme-settings__meta-eyebrow';
	const titleClass = 'c-theme-settings__title';
	const helpClass = 'c-theme-settings__help';
	const controlClass = 'c-theme-settings__control';
	const modeToggleProps = $derived({
		...modeToggleRecipeProps,
		themeScheme: state.localThemeScheme
	});
	const switcherProps = $derived({
		compact: false,
		showHeader: false,
		showLabels: true,
		...switcherRecipeProps
	});
	const switcherThemes = $derived([...resolvedSettings.themes]);
	const modeDescription = $derived(
		resolvedSettings.modeSection.description || state.localThemeMode
	);

	const currentModeLabel = $derived(formatLabel(themeContext?.themeMode ?? state.localThemeMode));
	const currentSchemeLabel = $derived(formatLabel(state.localThemeScheme));
	const effectiveThemeMode = $derived(
		resolveThemeMode(themeContext?.themeMode ?? state.localThemeMode)
	);
</script>

<form class={formClass} {...restProps}>
	<ThemeSurface class={surfaceClass}>
		{#snippet header(themeContext)}
			<div class={surfaceHeadingClass}>
				<div class={surfaceEyebrowClass}>Appearance Settings</div>
				<div class={surfaceSummaryClass}>
					<div class={surfaceBadgeClass}>
						<span>Mode</span>
						<strong>{currentModeLabel}</strong>
					</div>
					<div class={surfaceBadgeClass}>
						<span>Scheme</span>
						<strong>{currentSchemeLabel}</strong>
					</div>
				</div>
			</div>
		{/snippet}

		{#snippet content(themeContext)}
			{#if resolvedSettings.modeSection.show}
				<div class={itemClass}>
					<div class={metaClass}>
						<div class={metaEyebrowClass}>Display Mode</div>
						<div class={titleClass}>{resolvedSettings.modeSection.title}</div>
						<div class={helpClass}>
							{resolvedSettings.modeSection.description ||
								themeContext?.themeMode ||
								modeDescription}
						</div>
					</div>
					<div class={controlClass}>
						<ThemeModeToggle
							{...modeToggleProps}
							themeMode={state.localThemeMode}
							onThemeModeChange={handleModeChange}
						/>
					</div>
				</div>
			{/if}

			{#if resolvedSettings.schemeSection.show}
				<div class={itemColumnClass}>
					<div class={metaClass}>
						<div class={metaEyebrowClass}>Palette</div>
						<div class={titleClass}>{resolvedSettings.schemeSection.title}</div>
						<div class={helpClass}>{resolvedSettings.schemeSection.description}</div>
					</div>
					<div class={controlClass}>
						<ThemeSwitcher
							class={switcherProps.class}
							compact={switcherProps.compact}
							showHeader={switcherProps.showHeader}
							showLabels={switcherProps.showLabels}
							themeScheme={state.localThemeScheme}
							themes={switcherThemes}
							themeMode={effectiveThemeMode}
							onThemeSchemeChange={handleSchemeChange}
						/>
					</div>
				</div>
			{/if}
		{/snippet}
	</ThemeSurface>
</form>

<style>
	.c-theme-settings {
		display: grid;
		gap: 1rem;
	}

	.c-theme-settings__surface {
		display: grid;
		gap: clamp(1rem, 1.8vw, 1.25rem);
		border-color: color-mix(in srgb, var(--line, var(--color-border-primary)) 78%, transparent);
		background: var(--surface, var(--color-background-primary));
		box-shadow:
			0 1px 3px rgba(15, 23, 42, 0.08),
			0 12px 32px rgba(15, 23, 42, 0.05);
	}

	.c-theme-settings__surface-heading {
		display: grid;
		gap: 0.55rem;
		padding-bottom: 0.35rem;
	}

	.c-theme-settings__surface-eyebrow,
	.c-theme-settings__meta-eyebrow {
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: color-mix(in srgb, var(--muted, var(--color-text-secondary)) 92%, transparent);
	}

	.c-theme-settings__surface-title,
	.c-theme-settings__title {
		font-size: var(--font-size-3, 1.125rem);
		font-weight: var(--font-weight-semibold, 600);
		color: var(--text, var(--color-text-primary));
		letter-spacing: -0.01em;
	}

	.c-theme-settings__surface-title {
		font-size: clamp(1.05rem, 1.5vw, 1.3rem);
		line-height: 1.1;
	}

	.c-theme-settings__surface-help,
	.c-theme-settings__help {
		font-size: 0.92rem;
		color: var(--muted, var(--color-text-secondary));
		line-height: 1.5;
	}

	.c-theme-settings__surface-summary {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
	}

	.c-theme-settings__surface-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 0.72rem;
		border-radius: 999px;
		border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
		background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 88%, white 12%);
		font-size: 0.8rem;
		line-height: 1;
		color: var(--text, var(--color-text-primary));
		box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
	}

	.c-theme-settings__surface-badge strong {
		font-size: 0.82rem;
	}

	.c-theme-settings__item {
		display: grid;
		gap: 1rem;
		grid-template-columns: minmax(180px, 0.8fr) minmax(220px, 1fr);
		align-items: center;
		padding: 1.1rem 1.15rem;
		border: 1px solid color-mix(in srgb, var(--line, var(--color-border-primary)) 74%, transparent);
		border-radius: 1rem;
		background: color-mix(
			in srgb,
			var(--surface, var(--color-background-primary)) 96%,
			var(--bg, var(--color-background-secondary)) 4%
		);
		box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
	}

	.c-theme-settings__item--column {
		grid-template-columns: 1fr;
		align-items: start;
	}

	.c-theme-settings__meta {
		display: grid;
		gap: 0.45rem;
		align-content: start;
	}

	.c-theme-settings__control {
		display: grid;
		gap: 0.75rem;
		align-items: stretch;
		justify-content: stretch;
		justify-self: stretch;
		min-width: 0;
	}

	.c-theme-settings__item .c-theme-mode-toggle {
		min-width: 3.6rem;
		min-height: 3.6rem;
		justify-content: center;
	}

	:global(.c-theme-settings__item--column .c-theme-switcher) {
		width: 100%;
	}

	:global(.c-theme-settings__item--column .c-theme-switcher__list) {
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}

	:global(.c-theme-settings__item--column .c-theme-switcher__item) {
		min-height: 11.75rem;
	}

	@media (max-width: 640px) {
		.c-theme-settings__item {
			grid-template-columns: 1fr;
			padding: 0.95rem;
		}

		.c-theme-settings__control {
			justify-content: flex-start;
		}
	}
</style>
