export function getBoundingClientRect<T extends Element>(element: T): DOMRect {
  return element.getBoundingClientRect()
}

export function getClientRects<T extends Element>(element: T): DOMRectList {
  return element.getClientRects()
}

export function getParentElement<T extends Element>(
  element: T,
): Element | null {
  return element.parentElement
}

export function getTagName<T extends Element>(element: T): string {
  return element.tagName
}

export function getComputedStyle<T extends Element>(
  element: T,
): CSSStyleDeclaration {
  return window.getComputedStyle(element)
}

export function matches<T extends Element>(element: T, selector: string) {
  return element.matches(selector)
}

export function focus<T extends HTMLElement>(element: T) {
  return element.focus()
}

export function blur<T extends HTMLElement>(element: T) {
  return element.blur()
}

export function addEvent<
  T extends EventTarget,
  TListener extends EventListener | EventListenerObject,
>({
  target,
  listener,
  eventName,
  options,
}: {
  target: T
  listener: TListener
  eventName: string
  options?: boolean | AddEventListenerOptions
}) {
  target.addEventListener(eventName, listener, options)
  const unsubscribe = () =>
    target.removeEventListener(eventName, listener, options)
  return unsubscribe
}

export function contains<T extends Node, K extends Node>(node: T, other: K) {
  return node.contains(other)
}

export function compareDocumentPosition<T extends Node, K extends Node>(
  node: T,
  other: K,
) {
  return node.compareDocumentPosition(other)
}

export function getOffsetSize<T extends HTMLElement>(element: T) {
  const { offsetHeight, offsetWidth } = element
  return {
    offsetHeight,
    offsetWidth,
  }
}

export function getOffsetDimensions<T extends HTMLElement>(element: T) {
  const { offsetLeft, offsetTop } = element
  const { offsetHeight, offsetWidth } = getOffsetSize(element)
  return {
    offsetLeft,
    offsetRight: offsetLeft + offsetWidth,
    offsetTop,
    offsetBottom: offsetTop + offsetHeight,
  }
}

export function getTabIndex<T extends HTMLElement>(element: T) {
  return element.tabIndex
}

export function getStyle<T extends HTMLElement | SVGElement>(element: T) {
  return element.style
}

export function isHidden<T extends HTMLElement>(element: T) {
  return element.hidden
}

export function getScrolledDimensions() {
  const scrollX = window.scrollX
  const scrollY = window.screenY

  return {
    x: scrollX,
    y: scrollY,
  }
}

export function getScrolledDimensionsCompatible() {
  const { x, y } = getScrolledDimensions()
  const scrollTop = x ?? document.documentElement.scrollTop
  const scrollLeft = y ?? document.documentElement.scrollLeft

  return {
    x: scrollLeft,
    y: scrollTop,
  }
}

export function enableDesignMode() {
  document.designMode = "on"
  return () => {
    document.designMode = "off"
  }
}
