import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

/**
 * Менеджер стилей для компонента ThemeProvider
 */
export class StyleManagerThemeProvider {
	/**
	 * Возвращает CSS-классы для основного контейнера ThemeProvider
	 */
	static getContainerClasses(className?: string): string {
		return mergeClassNames('theme-provider', className);
	}
}

