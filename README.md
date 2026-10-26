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

## Styles

- Component styles start with `HTML_LAYER_ORDER` and sit in `@layer theme` with `:where()` selectors, so consumer classes win without extra specificity. Overrides of a child component (ThemeSettings over ThemeSurface, ThemeModeToggle, ThemeSwitcher) keep one class of specificity.
- Sizes come from the global scales (`--space-*` times `--density-scale`, `--radius-*`, `--font-size-*`, `--elevation-*`); `test/unit/style-layer` checks the layer order, the selectors and the font stacks. The sandbox story chrome (`molecule/story`) is tooling and stays outside this rule.
- `ThemeSurface` classes are `theme-surface`, `theme-surface__header`, `__content`, `__footer` (formerly `layout-theme-surface*`).
- `ThemeModeToggle`: `size` (xs … 2xl) sets the font size and the button follows it in em; `showLabels` shows the mode name; `checked` is an alias of `darkMode`.
- The emitter also writes `--font-math` from `TOKEN_FONT_FAMILY_MATH` (`design-token/const/value/font-family-math`), kept out of `TOKEN_FONT_FAMILY` so it does not appear among the text families.
