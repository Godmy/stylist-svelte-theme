/**
 * Форматирует строку в заглавный регистр с пробелами
 * @param value - исходная строка
 * @returns отформатированная строка
 */
export function formatLabel(value: string): string {
  if (!value) return '';
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
