# Theme — Система управления темами

Модуль `theme` — полноценная система управления темами для Svelte-приложений. Покрывает весь цикл жизни темы: от определения токенов и хранения настроек до применения стилей в DOM и рендеринга UI-компонентов. Все слои взаимодействуют через строго типизированные контракты.

---

## Концепция

Тема описывается двумя независимыми осями:

| Ось | Значения | Смысл |
|-----|----------|-------|
| **Режим** (`TokenThemeMode`) | `default` · `light` · `dark` | Светлость — следует за системой или задаётся явно |
| **Схема** (`TokenThemeScheme`) | `minimal` · `ocean` · `forest` · `sunset` | Цветовая палитра — задаёт акцентные оттенки |

Комбинация режима и схемы однозначно определяет объект `Theme`, который затем применяется к `<html>` через CSS-переменные.

Режим `default` — адаптивный: он автоматически следует системной предпочтительной теме (`prefers-color-scheme`) и обновляется при её изменении без перезагрузки страницы.

---

## Структура модуля

```
theme/
├── type/           — TypeScript-типы (Theme, ColorScale, токены)
├── const/          — Константы (enum-токены, record-маппинги, struct-значения)
├── interface/      — Контракты компонентов (contract + recipe)
├── class/          — Классы-менеджеры (object-manager + style-manager)
├── function/       — Функции (script/css — DOM, state — Svelte runes)
└── svelte/         — UI-компоненты (atom → molecule → organism)
```

Зависимости направлены строго вниз: `svelte` → `function` → `class` → `const/type`. Обратных зависимостей нет.

---

## Слой 1 — Типы (`type/`)

### `Theme` — корневой тип данных

```
Theme {
  scheme: 'light' | 'dark'
  colors: {
    primary, secondary, tertiary     — ColorScale (Record<number, string>)
    neutral, success, info, warning  — ColorScale
    error, danger                    — ColorScale
    background, text, border         — Record<string, string>
    outline, shadow, scrim, backdrop — string
    onPrimary, onSecondary, ...      — semantic on-colors
    graph, scene                     — специфика графов и сцен
  }
  typography: StructThemeTypography
  motion: {
    duration, easing, transitions, animations
  }
  gradients?:  { types, directional, radial }
  elevation?:  Record<string, unknown>
  opacity?:    Record<string, string>
  zIndex?:     Record<string, string>
  spacing?:    Record<string, string>
  borderRadius?, boxShadow?, size?, scene?
}
```

`ColorScale` — шкала оттенков одного цвета (`{ 50: '#f0f9ff', 100: '#e0f2fe', ..., 900: '#0c4a6e' }`). Это позволяет использовать один и тот же токен на разных уровнях яркости.

### Enum-типы

```ts
TokenThemeMode   = 'default' | 'light' | 'dark'
TokenThemeScheme = 'minimal' | 'ocean' | 'forest' | 'sunset'
TokenThemeSize   = литеральный union размеров
TokenThemeTone   = литеральный union тональностей
TokenThemeVariant = литеральный union вариантов
```

---

## Слой 2 — Константы (`const/`)

### Enum-массивы

```ts
TOKEN_THEME_MODE   = ['default', 'light', 'dark']
TOKEN_THEME_SCHEME = ['minimal', 'ocean', 'forest', 'sunset']
```

Используются для валидации: `TOKEN_THEME_MODE.includes(value)`.

### Struct-значения — готовые объекты тем

Для каждой комбинации режима и схемы существует конкретный объект `Theme`:

```
THEME_MODE_DEFAULT  — базовый режим (полная таблица токенов)
THEME_MODE_LIGHT    — светлый режим (инвертированный фон)
THEME_MODE_DARK     — тёмный режим (тёмные поверхности)

SCHEME_MINIMAL  — нейтральная палитра (slate/blue)
SCHEME_OCEAN    — морская палитра (cyan/teal)
SCHEME_FOREST   — лесная палитра (green/emerald)
SCHEME_SUNSET   — закатная палитра (orange/rose)
```

### Record-маппинги

```ts
RECORD_THEME_SCHEME: Record<TokenThemeScheme, { light: Theme; dark: Theme }>
RECORD_THEME_MODE:   Record<TokenThemeMode, string>   // → CSS-класс
```

`RECORD_THEME_SCHEME` — центральная точка разрешения: по схеме и режиму возвращает готовый объект `Theme`.

### Storage-контракт

```ts
THEME_STORAGE_CONTRACT = {
  modeStorageKey:       'theme-mode',
  schemeStorageKey:     'theme-scheme',
  defaultThemeMode:     'default',
  defaultThemeScheme:   'minimal'
}
```

---

## Слой 3 — Классы (`class/`)

### `object-manager/` — низкоуровневые менеджеры

| Класс | Ответственность |
|-------|----------------|
| `ThemeResolver` | Разрешает `Theme` по схеме и режиму через `RECORD_THEME_SCHEME` |
| `ThemeStorageManager` | Читает и записывает настройки в `localStorage` |
| `ThemeContextManager` | Хранит Svelte-context: геттеры, сеттеры текущего режима и схемы |
| `ThemeCSSManager` | Применяет CSS-классы к DOM-элементу |
| `ThemeModeToggle` (object) | Логика переключения `light ↔ dark` |
| `ThemeSettings` (object) | Агрегирует настройки для панели управления |
| `ThemeSwitcher` (object) | Управляет выбором схемы |

**Пример работы `ThemeResolver`:**

```ts
// Разрешить тему по схеме и режиму
const theme = ThemeResolver.resolve('ocean', 'dark');
// → объект Theme из RECORD_THEME_SCHEME['ocean']['dark']

// Применить к DOM
ThemeResolver.applyByMode('default', 'forest', document.documentElement);
```

**`ThemeStorageManager`** поддерживает нормализацию legacy-значений:

```ts
normalizeMode('lighter') → 'light'
normalizeMode('system')  → 'default'
normalizeMode(null)      → 'default'  // fallback
```

### `style-manager/` — высокоуровневые менеджеры

Оборачивают `object-manager` в удобный API для конкретных компонентов:

```
StyleManagerThemeProvider   → CSS-классы контейнера провайдера
StyleManagerThemeConsumer   → CSS-классы потребителя
StyleManagerThemeContext    → CSS-классы контекстного отображения
StyleManagerThemeModeToggle → CSS-классы кнопки переключения
StyleManagerThemeSwitcher   → CSS-классы селектора схемы
StyleManagerThemeSettings   → CSS-классы панели настроек
```

---

## Слой 4 — Функции (`function/`)

### `script/css/` — чистые функции для DOM

Все функции не имеют побочных эффектов за пределами переданных аргументов (или `document.documentElement` по умолчанию).

| Функция | Описание |
|---------|----------|
| `applyThemeToDOM(theme, el?)` | Разворачивает `Theme` в CSS-переменные на элементе |
| `applyThemeMode(mode, el?)` | Устанавливает атрибут `data-theme` |
| `applySchemeToDOM(scheme, el?)` | Устанавливает атрибут `data-scheme` |
| `applyThemeModeAndScheme(mode, scheme, el?)` | Применяет оба атрибута и CSS-переменные |
| `resolveThemeMode(mode)` | `'default'` → `'light'` или `'dark'` по системной теме |
| `toggleThemeMode(current)` | `'light'` ↔ `'dark'`, `'default'` → `'light'` |
| `getSystemThemeMode()` | Читает `prefers-color-scheme` из медиа-запроса |
| `initSystemThemeListener(cb)` | Подписывается на изменения системной темы, возвращает cleanup |
| `supportsThemeMode(value)` | Type guard: `value is TokenThemeMode` |

### `state/` — Svelte rune фабрики

Каждый компонент имеет парный файл `.svelte.ts` с фабрикой состояния:

```
createThemeProviderState(props)     → { currentMode, currentScheme, containerClass, setMode, setScheme }
createThemeContextState(props)      → снимок контекста для дочерних компонентов
createThemeModeToggleState(props)   → логика кнопки переключения
createThemeSwitcherState(props)     → логика селектора схемы
createThemeSettingsState(props)     → агрегированное состояние панели
createThemeConsumerState(props)     → доступ к текущей теме из контекста
```

**Жизненный цикл `createThemeProviderState`:**

```
1. Инициализация: currentMode = props.initialMode ?? 'default'
                  currentScheme = props.initialScheme ?? 'minimal'

2. $effect: initSystemThemeListener → авто-обновление при mode === 'default'

3. ThemeContextManager.set(...)  → публикует геттеры/сеттеры в Svelte context

4. $effect: applyThemeModeAndScheme(mode, scheme) → применяет к DOM при каждом изменении

5. setMode/setScheme → обновляют $state + ThemeStorageManager.persistSettings(...)
```

---

## Слой 5 — Интерфейсы (`interface/`)

### `contract/` — типы входных данных

```ts
ThemeSettingsContract {
  themeMode: TokenThemeMode
  themeScheme: TokenThemeScheme
  themes: readonly StructThemeScheme[]
  modeSection: { show, title, description, toggleProps }
  schemeSection: { show, title, description, switcherProps }
  onThemeModeChange?: (mode) => void
  onThemeSchemeChange?: (scheme) => void
}
```

### `recipe/` — пропсы Svelte-компонентов

```ts
ThemeProviderRecipe   { initialMode?, initialScheme?, class?, children }
ThemeConsumerRecipe   { children }
ThemeContextRecipe    { class?, children? }
ThemeModeToggleRecipe { class?, label?, icon?, ... }
ThemeSwitcherRecipe   { class?, themes?, ... }
ThemeSettingsRecipe   { class?, ...ThemeSettingsContractInput }
```

---

## Слой 6 — Svelte-компоненты (`svelte/`)

Организованы по атомарному дизайну.

### Atom — базовые элементы

**`ThemeProvider`** — корневой провайдер, обязателен как обёртка приложения:

```svelte
<ThemeProvider initialMode="default" initialScheme="ocean">
  <!-- всё приложение -->
</ThemeProvider>
```

Монтирует контекст через `ThemeContextManager`, применяет CSS-переменные и слушает системную тему.

**`ThemeConsumer`** — читает контекст и предоставляет детям:

```svelte
<ThemeConsumer>
  {#snippet children(theme)}
    <div style="color: {theme.colors.primary[600]}">...</div>
  {/snippet}
</ThemeConsumer>
```

**`ThemeModeToggle`** — кнопка переключения `light ↔ dark`.

### Molecule — составные элементы

**`ThemeSwitcher`** — выпадающий список или кнопки выбора цветовой схемы (minimal / ocean / forest / sunset).

**`ThemeContext`** — отображает информацию о текущей теме (для отладки и демо).

### Organism — полные блоки функциональности

**`ThemeSettings`** — полная панель настроек темы: раздел выбора режима + раздел выбора схемы с возможностью скрыть любой из разделов через `modeSection.show` / `schemeSection.show`.

---

## Потоки данных

### Инициализация темы

```
props.initialMode / props.initialScheme
         ↓
  createThemeProviderState
         ↓
  ThemeContextManager.set(getters, setters)  ← Svelte context
         ↓
  applyThemeModeAndScheme(mode, scheme)
         ↓
  ThemeResolver.resolve(scheme, resolvedMode)
         ↓
  applyThemeToDOM(theme, document.documentElement)
         ↓
  CSS-переменные на <html>  →  браузер рендерит
```

### Смена темы пользователем

```
UI: ThemeModeToggle / ThemeSwitcher
         ↓
  StyleManager → ObjectManager.setMode(mode)
         ↓
  state.setMode(mode)  [$state обновляется]
         ↓
  ThemeStorageManager.persistSettings(...)  [localStorage]
         ↓
  $effect срабатывает → applyThemeModeAndScheme(...)
         ↓
  DOM обновляется без перезагрузки
```

### Системная тема

```
OS: prefers-color-scheme меняется
         ↓
  initSystemThemeListener → callback
         ↓
  если currentMode === 'default':
    applyThemeModeAndScheme('default', currentScheme)
         ↓
  resolveThemeMode('default') читает getSystemThemeMode()
         ↓
  применяется light или dark в зависимости от ОС
```

---

## Публичный API модуля

Всё доступно через единый barrel `theme/index.ts`:

```ts
// Компоненты
import { ThemeProvider, ThemeConsumer, ThemeModeToggle,
         ThemeSwitcher, ThemeSettings, ThemeContext } from '$stylist/theme';

// Состояние (для кастомных компонентов)
import { createThemeProviderState, createThemeSwitcherState } from '$stylist/theme';

// DOM-утилиты
import { applyThemeToDOM, getSystemThemeMode, toggleThemeMode } from '$stylist/theme';

// Классы (для расширения)
import { ThemeResolver, ThemeStorageManager, ThemeContextManager } from '$stylist/theme';

// Константы
import { TOKEN_THEME_MODE, TOKEN_THEME_SCHEME, THEME_MODE_DEFAULT,
         RECORD_THEME_SCHEME, SCHEME_OCEAN } from '$stylist/theme';

// Типы
import type { Theme, TokenThemeMode, TokenThemeScheme,
              ThemeProviderRecipe, ThemeSettingsContract } from '$stylist/theme';
```

---

## Расширение и кастомизация

### Добавить новую схему

1. Создать `const/struct/scheme-custom/index.ts` → объект `{ light: Theme, dark: Theme }`
2. Добавить `'custom'` в `const/enum/theme-scheme/index.ts`
3. Добавить запись в `const/record/theme-scheme/index.ts` → `RECORD_THEME_SCHEME`
4. Обновить barrel `const/struct/index.ts` и `type/enum/theme-scheme/index.ts`

### Кастомный провайдер

```ts
import { createThemeProviderState } from '$stylist/theme';

// Используй фабрику напрямую в своём .svelte.ts
const state = createThemeProviderState({ initialMode: 'dark', initialScheme: 'forest' });
```

### Доступ к теме без компонента

```ts
import { ThemeContextManager } from '$stylist/theme';

const theme = ThemeContextManager.getTheme();   // текущий объект Theme
const mode  = ThemeContextManager.getMode();    // 'light' | 'dark' | 'default'
```

---

## Соглашения модуля

- Все barrel-файлы помечены `/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */`
- Svelte-состояние живёт в `.svelte.ts`-файлах, чистая логика — в `.ts`
- Классы `object-manager` — статические (`static`-методы), без инстанцирования
- Все DOM-функции защищены от SSR: проверяют `typeof localStorage !== 'undefined'`
- Нормализация legacy-значений (`'lighter'` → `'light'`, `'system'` → `'default'`) обеспечивает обратную совместимость при смене ключей хранилища
