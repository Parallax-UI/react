export function isString(value: any): value is string {
  return typeof value === "string"
}

export function toString(value: any): string {
  return String(value)
}
