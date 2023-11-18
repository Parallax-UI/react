export function memorize<TFn extends (...args: any[]) => any>(cb: TFn) {
  const cache: Record<string, any> = {}

  return (...args: Parameters<TFn>) => {
    const key = JSON.stringify(args)
    if (key in cache) {
      return cache[key]
    } else {
      const value = cb(...args)
      cache[key] = value
      return value
    }
  }
}

export function once<TFn extends (...args: any[]) => any>(cb: TFn) {
  let hasCalled = false
  return (...args: Parameters<TFn>) => {
    if (!hasCalled) {
      cb(...args)
      hasCalled = true
    }
  }
}
