export function clamp(value: number, min: number, max: number) {
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

export function abs(value: number) {
  return Math.abs(value)
}

export function ceil(value: number) {
  return Math.ceil(value)
}

export function floor(value: number) {
  return Math.floor(value)
}

export function round(value: number) {
  return Math.round(value)
}

export function toInteger(value: string) {
  return parseInt(value)
}

export function toFloat(value: string) {
  return parseFloat(value)
}
