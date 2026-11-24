/**
 * `items` grouped by `keyOf`, groups in first-seen order and items in input order.
 * `keys` creates groups up front, fixing their order and keeping them even when empty.
 */
export function groupBy<T, K>(
	items: Iterable<T>,
	keyOf: (item: T) => K,
	keys: Iterable<K> = []
): Map<K, T[]> {
	const groups = new Map<K, T[]>();
	for (const key of keys) if (!groups.has(key)) groups.set(key, []);
	for (const item of items) {
		const key = keyOf(item);
		const group = groups.get(key);
		if (group) group.push(item);
		else groups.set(key, [item]);
	}
	return groups;
}
