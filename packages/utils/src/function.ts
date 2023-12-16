import { toString } from "."

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

export function callEvery<TFn extends (...args: any[]) => any>(...fns: TFn[]) {
  return (...args: Parameters<TFn>) => fns.forEach((fn) => fn(...args))
}

export function noop() {}

export function observer<TFn extends (...args: any[]) => any>() {
  const observers = new Set<TFn>()

  function subscribe(cb: TFn) {
    observers.add(cb)
    return () => unsubscribe(cb)
  }

  function unsubscribe(cb: TFn) {
    observers.delete(cb)
  }

  function notify(...args: Parameters<TFn>) {
    observers.forEach((cb) => cb(...args))
  }

  return {
    subscribe,
    unsubscribe,
    notify,
  }
}

export function isFunction(value: any): value is (...args: any[]) => any {
  return typeof value === "function"
}

export function debounce(cb: (...args: any[]) => any, ms = 0) {
  let cache: ReturnType<typeof setTimeout> | string | number | undefined =
    undefined

  clearTimeout(cache)
  cache = setTimeout(cb, ms)

  return {
    flush: () => {
      clearTimeout(cache)
      cache = undefined
      cb()
    },
    cancel: () => {
      clearTimeout(cache)
      cache = undefined
    },
  }
}

export const generateId = (
  (id = 0) =>
  () => {
    return id++
  }
)()

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function throttle(cb: (...args: any[]) => any, wait = 0) {
  let cache: ReturnType<typeof setInterval> | string | number | undefined =
    undefined
  clearInterval(cache)
  cache = setInterval(cb, wait)

  return {
    flush: () => {
      clearInterval(cache)
      cache = undefined
      cb()
    },
    cancel: () => {
      clearInterval(cache)
      cache = undefined
    },
  }
}

export function computePercentage(value: number, total: number) {
  return (value * total) / 100
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message
  }
  return toString(error)
}
