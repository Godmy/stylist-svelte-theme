/** Copy of `set` with `value` removed when present, added otherwise. */
export function toggleInSet<T>(set: Iterable<T>, value: T): Set<T> {
	const next = new Set(set);
	if (!next.delete(value)) next.add(value);
	return next;
}
