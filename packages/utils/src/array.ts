type Compact<T> = (T extends null | undefined ? never : T)[]

export function compact<T>(value: T[]): Compact<T> {
  const copiedValue = structuredClone(value)
  return copiedValue.filter(Boolean) as Compact<T>
}

export function isArray(value: any): value is Array<any> {
  return Array.isArray(value)
}