export function compact<T>(
  value: T[],
): (T extends null | undefined ? never : T)[] {
  const copiedValue = structuredClone(value)
  return copiedValue.filter(Boolean) as (T extends null | undefined
    ? never
    : T)[]
}

export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}
