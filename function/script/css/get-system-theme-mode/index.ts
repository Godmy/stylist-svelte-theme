import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';

let mediaQueryList: MediaQueryList | null = null;
let systemThemeCache: 'light' | 'dark' | null = null;

/**
 * Инициализирует слушатель изменения системной темы
 * Вызывает callback при изменении prefers-color-scheme
 */
export function initSystemThemeListener(callback: (isDark: boolean) => void): () => void {
	if (typeof window === 'undefined') {
		return () => {};
	}

	mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
	
	// Обновляем кэш при инициализации
	systemThemeCache = mediaQueryList.matches ? 'dark' : 'light';
	
	// Добавляем слушатель
	const handler = (e: MediaQueryListEvent) => {
		systemThemeCache = e.matches ? 'dark' : 'light';
		callback(e.matches);
	};

	mediaQueryList.addEventListener('change', handler);

	// Возвращаем функцию очистки
	return () => {
		mediaQueryList?.removeEventListener('change', handler);
		mediaQueryList = null;
		systemThemeCache = null;
	};
}

/**
 * Получает системную тему с кэшированием
 * Возвращает 'dark' или 'light' в зависимости от prefers-color-scheme
 */
export function getSystemThemeMode(): 'light' | 'dark' {
	if (typeof window === 'undefined') {
		return 'light';
	}

	// Возвращаем кэш, если доступен
	if (systemThemeCache !== null) {
		return systemThemeCache;
	}

	// Инициализируем при первом вызове
	if (!mediaQueryList) {
		mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
	}

	systemThemeCache = mediaQueryList.matches ? 'dark' : 'light';
	return systemThemeCache;
}

/**
 * Сбрасывает кэш системной темы
 * Полезно для тестов или принудительного обновления
 */
export function clearSystemThemeCache(): void {
	systemThemeCache = null;
}
