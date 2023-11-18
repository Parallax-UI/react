import { Prettify } from "./types"

export function omit<
  TValue extends Record<any, any>,
  TKey extends string | symbol | number,
>(
  value: TValue,
  keys: TKey[],
): { [Property in Exclude<keyof TValue, TKey>]: TValue[Property] } {
  // TODO: polyfill of structuredClone
  const copiedValue = structuredClone(value)
  keys.forEach((key) => Reflect.deleteProperty(copiedValue, key))
  return copiedValue
}

export function keys<TValue extends Record<any, any>>(value: TValue): string[] {
  return Object.keys(value)
}

// TODO: make it more extensive
export function merge<
  TValue extends Record<any, any>,
  TOther extends Record<any, any>,
  TValueKey extends keyof TValue,
  TOtherKey extends keyof TOther,
>(
  value: TValue,
  other: TOther,
): Prettify<
  { [Property in Exclude<TValueKey, TOtherKey>]: TValue[Property] } & {
    [Key in TOtherKey]: TOther[Key]
  }
> {
  const copiedValue = structuredClone(value)
  const copiedOther = structuredClone(other)
  return {
    ...copiedValue,
    ...copiedOther,
  }
}

export function pick<
  TValue extends Record<any, any>,
  TKey extends string | symbol | number,
>(value: TValue, keys: TKey[]): { [Property in TKey]: TValue[Property] } {
  const copiedValue = structuredClone(value)
  const picked = {} as { [Property in TKey]: TValue[Property] }

  keys.forEach((key) => {
    if (key in copiedValue) {
      picked[key] = copiedValue[key]
    }
  })
  return picked
}

export function values<
  TValue extends Record<any, any>,
  TKey extends keyof TValue,
>(value: TValue): TValue[TKey][] {
  return Object.values(value)
}
