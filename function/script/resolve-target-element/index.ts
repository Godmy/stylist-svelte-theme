export function resolveTargetElement(element?: HTMLElement): HTMLElement | null {
	if (element) return element;
	if (typeof document === 'undefined') return null;
	return document.documentElement;
}
