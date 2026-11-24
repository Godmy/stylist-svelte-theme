/** Lookup of `items` by `keyOf`; a later item replaces an earlier one with the same key. */
export function indexBy<T, K>(items: Iterable<T>, keyOf: (item: T) => K): Map<K, T> {
	const index = new Map<K, T>();
	for (const item of items) index.set(keyOf(item), item);
	return index;
}
