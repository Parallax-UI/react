export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function isNumber(value: any): value is number {
  return typeof value === "number"
}

export function max(...values: number[]) {
  return Math.max(...values)
}

export function min(...values: number[]) {
  return Math.min(...values)
}
