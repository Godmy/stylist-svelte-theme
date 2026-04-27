# Theme

`theme` - домен для описания, выбора, хранения и применения темы в `stylist-svelte`.

Сейчас тема строится по двум независимым осям:

| Ось | Тип | Значения |
| --- | --- | --- |
| Режим | `TokenThemeMode` | `default`, `light`, `dark` |
| Схема | `TokenThemeScheme` | `minimal`, `ocean`, `forest`, `sunset` |

`default` относится только к `mode`. Это не отдельная цветовая схема, а режим, который разрешается в `light` или `dark` через системную тему браузера.

## Структура

```text
theme/
|- const/       - токены, готовые theme-объекты, storage-константы
|- type/        - enum, record и struct-типы темы
|- interface/   - recipe и contract типы для компонентов
|- class/       - object-manager и style-manager
|- function/
|  |- script/
|  |  |- css/   - применение готового Theme к DOM и разрешение режима
|  |  |- dom/   - переключение mode/scheme на целевом элементе
|  |  |- resolve-target-element/ - общий resolver целевого DOM-элемента
|  |- state/    - Svelte-specific `.svelte.ts` фабрики состояния
|- svelte/      - provider, toggle, switcher, settings и consumer
```

Внутри `theme` действует правило: один не-barrel `*.ts` файл - один экспорт.

## Основные сущности

### `Theme`

Корневой тип темы находится в [theme/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/type/struct/theme/index.ts).

Ключевые поля:

```ts
type Theme = {
	mode: TokenThemeMode;
	colors: ThemeColors;
	typography: StructThemeTypography;
	domain?: ThemeDomainColors;
};
```

Важно:
- `mode` и `scheme` не смешиваются.
- `Theme` хранит уже конкретный theme-object.
- Выбор `scheme` происходит снаружи, а разрешение конкретной темы делает `ManagerThemeResolver`.
- Layout-токены (`spacing`, `borderRadius`, `zIndex`, `boxShadow`) живут в `layout`, а не в `theme`.

### Константы

Основные enum-константы:
- [theme-mode/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/enum/theme-mode/index.ts)
- [theme-scheme/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/enum/theme-scheme/index.ts)

Готовые схемы:
- [scheme-minimal/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/scheme-minimal/index.ts)
- [scheme-ocean/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/scheme-ocean/index.ts)
- [scheme-forest/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/scheme-forest/index.ts)
- [scheme-sunset/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/scheme-sunset/index.ts)

Режимы темы:
- [theme-mode-default/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/theme-mode-default/index.ts)
- [theme-mode-light/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/theme-mode-light/index.ts)
- [theme-mode-dark/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/theme-mode-dark/index.ts)

Storage-константы:
- [theme-storage-contract/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/theme-storage-contract/index.ts)
- [theme-storage/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/const/struct/theme-storage/index.ts)

## Разрешение и применение темы

### `ManagerThemeResolver`

[theme-resolver/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/class/object-manager/theme-resolver/index.ts)

Отвечает за:
- `resolve(scheme, mode)` -> получить конкретный `Theme`
- `applyByMode(mode, scheme, element?)` -> разрешить режим и применить тему к DOM
- `supportsMode(value)` и `supportsScheme(value)` -> валидация входных значений

### DOM/script функции

CSS-слой:
- [apply-theme-to-dom/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/script/css/apply-theme-to-dom/index.ts)
- [resolve-theme-mode/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/script/css/resolve-theme-mode/index.ts)
- [supports-theme-mode/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/script/css/supports-theme-mode/index.ts)

DOM-слой:
- [apply-theme-mode/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/script/dom/apply-theme-mode/index.ts)
- [apply-theme-mode-and-scheme/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/script/dom/apply-theme-mode-and-scheme/index.ts)
- [toggle-theme-mode/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/script/dom/toggle-theme-mode/index.ts)

Client/runtime:
- [get-system-theme-mode/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/script/client/get-system-theme-mode/index.ts)

Общий helper:
- [resolve-target-element/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/script/resolve-target-element/index.ts)

`applyThemeModeAndScheme` - основная точка применения. Она:
1. Разрешает `mode` через `resolveThemeMode`.
2. Получает `Theme` через `ManagerThemeResolver.resolve`.
3. Применяет CSS variables через `applyThemeToDOM`.
4. Ставит `data-theme` и `data-scheme` на target element.

`applyThemeMode` больше не живёт отдельно от схемы по смыслу: если на элементе уже есть валидный `data-scheme`, он переиспользует его и делегирует в `applyThemeModeAndScheme`.

Deprecated helper `applySchemeToDOM` удалён.

## Svelte state и переключение темы

Provider-state:
- [theme-provider/index.svelte.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/state/theme-provider/index.svelte.ts)

Toggle-state:
- [theme-mode-toggle/index.svelte.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/state/theme-mode-toggle/index.svelte.ts)

Switcher-state:
- [theme-switcher/index.svelte.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/function/state/theme-switcher/index.svelte.ts)

Контекст:
- [theme-context-manager/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/class/object-manager/theme-context-manager/index.ts)

Storage:
- [theme-storage-manager/index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/class/object-manager/theme-storage-manager/index.ts)

Актуальный flow:

1. `ThemeProvider` читает `initialMode` и `initialScheme`, а при их отсутствии берёт значения из storage.
2. `ThemeProvider` публикует `getTheme/getMode/getScheme/setMode/setScheme` в Svelte context через `ManagerThemeContext`.
3. Любое изменение `mode` или `scheme` приводит к `applyThemeModeAndScheme(currentMode, currentScheme)`.
4. Если `mode === 'default'`, listener из `client/get-system-theme-mode` отслеживает системную тему и повторно применяет текущую схему с новым resolved mode.
5. `ThemeModeToggle` и `ThemeSwitcher` сначала используют context/provider callbacks, а если контекста нет, работают через прямое DOM-применение и storage.

## Svelte компоненты

Atom:
- [theme-provider/index.svelte](/D:/2026/code/template/stylist-svelte/src/lib/theme/component/atom/theme-provider/index.svelte)
- [theme-consumer/index.svelte](/D:/2026/code/template/stylist-svelte/src/lib/theme/component/atom/theme-consumer/index.svelte)
- [theme-mode-toggle/index.svelte](/D:/2026/code/template/stylist-svelte/src/lib/theme/component/atom/theme-mode-toggle/index.svelte)

Molecule:
- [theme-switcher/index.svelte](/D:/2026/code/template/stylist-svelte/src/lib/theme/component/molecule/theme-switcher/index.svelte)
- [theme-context/index.svelte](/D:/2026/code/template/stylist-svelte/src/lib/theme/component/molecule/theme-context/index.svelte)

Organism:
- [theme-settings/index.svelte](/D:/2026/code/template/stylist-svelte/src/lib/theme/component/organism/theme-settings/index.svelte)

Назначение:
- `ThemeProvider` - корневой источник состояния темы.
- `ThemeConsumer` - чтение текущего `Theme` из context.
- `ThemeModeToggle` - смена `mode`.
- `ThemeSwitcher` - смена `scheme`.
- `ThemeSettings` - агрегированный UI для обоих переключателей.

## Публичный API

Публичный вход - [index.ts](/D:/2026/code/template/stylist-svelte/src/lib/theme/index.ts).

Типичные группы экспорта:
- Svelte-компоненты
- `.svelte.ts` state-фабрики
- script/dom/client helpers
- object/style managers
- enum/record/struct константы
- enum/record/struct типы

После изменения структуры `theme` нельзя редактировать barrel `index.ts` вручную. Нужно пересобирать их через `stylist/indexation/cli.py`.

## Что важно не ломать

- Не использовать `scheme` для значений `light/dark/default`.
- Не возвращать анонимные `string` и `unknown`, если в домене уже есть конкретный тип.
- Не дублировать логику выбора target element: использовать `resolveTargetElement`.
- Не возвращаться к deprecated helper `applySchemeToDOM`.
- Не нарушать правило один `*.ts` файл - один экспорт, кроме barrel-файлов.
