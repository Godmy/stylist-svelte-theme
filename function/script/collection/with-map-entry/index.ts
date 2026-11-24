/** Copy of `map` with `key` set to `value`, or removed when `value` is `undefined`. */
export function withMapEntry<K, V>(
	map: Iterable<readonly [K, V]>,
	key: K,
	value: V | undefined
): Map<K, V> {
	const next = new Map(map);
	if (value === undefined) next.delete(key);
	else next.set(key, value);
	return next;
}
