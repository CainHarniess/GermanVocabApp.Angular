export function makeArray<T>(items: T | T[] | null): T[] {
  if (!items) {
    return [];
  }
  return Array.isArray(items) ? items : [items]
}
