export class StyleManagerThemeContext {
	static root(className?: string): string {
		return className?.trim() || '';
	}
}
