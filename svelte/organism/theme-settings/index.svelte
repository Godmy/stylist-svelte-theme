<script lang="ts">
  import { StyleManagerThemeSettings } from '$stylist/theme/class/style-manager/theme-settings';
  import { ObjectManagerThemeSettings } from '$stylist/theme/class/object-manager/theme-settings';
  import type { ThemeSettingsRecipe } from '$stylist/theme/interface/recipe/theme-settings';
  import { createThemeSettingsState } from '$stylist/theme/function/state/theme-settings';
  import { ThemeModeToggle } from '$stylist/theme/svelte/atom';
  import { ThemeSwitcher } from '$stylist/theme/svelte/molecule';
  import { ThemeSurface } from '$stylist/layout/svelte/molecule/layout/theme-surface';
  import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';

  let {
    contract,
    modeToggleProps: modeToggleRecipeProps = {},
    switcherProps: switcherRecipeProps = {},
    class: className = '',
    ...restProps
  }: ThemeSettingsRecipe = $props();

  const themeContext = ManagerThemeContext.getOptional();
  const resolvedContract = $derived(ObjectManagerThemeSettings.createContract(contract));
  const state = createThemeSettingsState(() => resolvedContract);
  
  // Используем функции из контекста темы для сохранения настроек
  function handleModeChange(nextTheme: 'light' | 'dark' | 'default') {
    state.handleThemeModeChange(nextTheme);
  }

  function handleSchemeChange(nextTheme: 'minimal' | 'ocean' | 'forest' | 'sunset') {
    state.handleThemeSchemeChange(nextTheme);
  }
  
  const classNameStr = $derived(className == null ? undefined : String(className));
  const formClass = $derived(StyleManagerThemeSettings.preferences('', classNameStr));
  const surfaceClass = StyleManagerThemeSettings.surface();
  const surfaceHeadingClass = StyleManagerThemeSettings.surfaceHeading();
  const surfaceEyebrowClass = StyleManagerThemeSettings.surfaceEyebrow();
  const surfaceTitleClass = StyleManagerThemeSettings.surfaceTitle();
  const surfaceHelpClass = StyleManagerThemeSettings.surfaceHelp();
  const surfaceSummaryClass = StyleManagerThemeSettings.surfaceSummary();
  const surfaceBadgeClass = StyleManagerThemeSettings.surfaceBadge();
  const itemClass = StyleManagerThemeSettings.item();
  const itemColumnClass = StyleManagerThemeSettings.item(true);
  const metaClass = StyleManagerThemeSettings.meta();
  const metaEyebrowClass = StyleManagerThemeSettings.metaEyebrow();
  const titleClass = StyleManagerThemeSettings.title();
  const helpClass = StyleManagerThemeSettings.help();
  const controlClass = StyleManagerThemeSettings.control();
  const modeToggleProps = $derived({
    ...modeToggleRecipeProps,
    defaultScheme: state.localThemeScheme
  });
  const switcherProps = $derived({
    compact: true,
    showHeader: false,
    showLabels: false,
    ...switcherRecipeProps
  });
  const switcherThemes = $derived([...resolvedContract.themes]);
  const modeDescription = $derived(
    resolvedContract.modeSection.description || state.localThemeMode
  );

  function formatLabel(value: string): string {
    if (!value) return '';
    return value
      .split(/[-_\s]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  const currentModeLabel = $derived(formatLabel(themeContext?.themeMode ?? state.localThemeMode));
  const currentSchemeLabel = $derived(formatLabel(state.localThemeScheme));

</script>

<svelte:head>
  <style>{StyleManagerThemeSettings.getStyleSheet()}</style>
</svelte:head>

<form class={formClass} {...restProps}>
  <ThemeSurface class={surfaceClass}>
    {#snippet header(themeContext)}
      <div class={surfaceHeadingClass}>
        <div class={surfaceEyebrowClass}>Appearance Studio</div>
        <div class={surfaceTitleClass}>Appearance Settings</div>
        <div class={surfaceHelpClass}>
          Tune rendering mode and palette together so the interface feels consistent across surfaces.
        </div>
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
      {#if resolvedContract.modeSection.show}
      <div class={itemClass}>
        <div class={metaClass}>
          <div class={metaEyebrowClass}>Display Mode</div>
          <div class={titleClass}>{resolvedContract.modeSection.title}</div>
          <div class={helpClass}>
            {resolvedContract.modeSection.description || themeContext?.themeMode || modeDescription}
          </div>
        </div>
        <div class={controlClass}>
          <ThemeModeToggle
            {...modeToggleProps}
            currentTheme={state.localThemeMode}
            onThemeChange={handleModeChange}
          />
        </div>
      </div>
      {/if}

      {#if resolvedContract.schemeSection.show}
      <div class={itemColumnClass}>
        <div class={metaClass}>
          <div class={metaEyebrowClass}>Palette</div>
          <div class={titleClass}>{resolvedContract.schemeSection.title}</div>
          <div class={helpClass}>{resolvedContract.schemeSection.description}</div>
        </div>
        <div class={controlClass}>
          <ThemeSwitcher
            class={switcherProps.class}
            compact={switcherProps.compact}
            showHeader={switcherProps.showHeader}
            showLabels={switcherProps.showLabels}
            currentScheme={state.localThemeScheme}
            themes={switcherThemes}
            themeMode={state.localThemeMode}
            onSchemeChange={handleSchemeChange}
          />
        </div>
      </div>
      {/if}
    {/snippet}
  </ThemeSurface>
</form>
