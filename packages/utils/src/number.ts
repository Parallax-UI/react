export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function isNumber(value: any): value is number {
  return typeof value === "number"
}

// Refactor to change to min/max functions
export function isNumberInRange(
  value: number,
  min: number,
  max: number,
): boolean {
  return typeof value === "number" && value >= min && value <= max
}