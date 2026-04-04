/**
 * Менеджер стилей для компонента ThemeProvider
 *
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов и не содержит
 * никакой логики отображения или поведения.
 */
import { cn } from '$stylist/layout/function/script/merge-class-names';

/**
 * Менеджер стилей для компонента ThemeProvider
 */
export class ThemeProviderStyleManager {
	/**
	 * Возвращает CSS-классы для основного контейнера ThemeProvider
	 */
	static getContainerClasses(className?: string): string {
		return cn('theme-provider', className);
	}
}

