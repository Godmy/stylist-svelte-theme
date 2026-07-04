# Theme

`theme` is the domain responsible for describing, storing, resolving, and applying themes in `stylist-svelte`.

## Model

The theme system is built around two axes:

| Axis   | Type               | Values                                 |
| ------ | ------------------ | -------------------------------------- |
| Mode   | `TokenThemeMode`   | `default`, `light`, `dark`             |
| Scheme | `TokenThemeScheme` | `minimal`, `ocean`, `forest`, `sunset` |

`default` belongs only to the mode axis. It means "follow the system theme", then resolve to `light` or `dark`.

## Structure

```text
theme/
|- class/
|  |- manager/
|  |- object-manager/
|  |- style-manager/
|- component/
|  |- atom/
|  |- molecule/
|  |- organism/
|- const/
|- function/
|  |- script/
|  |- state/
|- interface/
|- type/
```

## Main Exports

From `src/lib/theme/index.ts`:

- components: `ThemeProvider`, `ThemeConsumer`, `ThemeModeToggle`, `ThemeSwitcher`, `ThemeContext`, `ThemeSettings`
- managers: `ManagerTheme`, `ManagerThemeResolver`, `ManagerThemeContext`, `ManagerThemeStorage`
- helpers: `applyThemeMode`, `applyThemeModeAndScheme`, `applyThemeToDOM`, `resolveThemeMode`, `resolveThemeScheme`, `toggleThemeMode`

## Main Files

Core files in the current layout:

- `src/lib/theme/component/atom/theme-provider/index.svelte`
- `src/lib/theme/function/state/theme-provider/index.svelte.ts`
- `src/lib/theme/component/atom/theme-mode-toggle/index.svelte`
- `src/lib/theme/component/molecule/theme-switcher/index.svelte`
- `src/lib/theme/component/organism/theme-settings/index.svelte`
- `src/lib/theme/class/manager/theme-context/index.ts`
- `src/lib/theme/class/manager/theme-resolver/index.ts`
- `src/lib/theme/class/manager/theme-storage/index.ts`

## Runtime Flow

1. `ThemeProvider` reads `initialMode` and `initialScheme`.
2. If they are absent, it falls back to `ManagerThemeStorage`.
3. The provider writes theme accessors and mutators into `ManagerThemeContext`.
4. State changes call `applyThemeModeAndScheme(currentMode, currentScheme)`.
5. If the mode is `default`, the system-theme listener reapplies the current scheme when the OS theme changes.

## Notes

- `mode` and `scheme` are separate concepts and should not be collapsed into one prop.
- Theme application is DOM-aware and uses CSS variables plus data attributes.
- Theme-related tests currently live mainly under `src/test/theme`.
