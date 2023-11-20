export function isNumberInRange(
  value: number,
  min: number,
  max: number,
): boolean {
  return typeof value === "number" && value >= min && value <= max
}
