/** Distinct values of `items` in first-seen order. */
export function unique<T>(items: Iterable<T>): T[] {
	return [...new Set(items)];
}
