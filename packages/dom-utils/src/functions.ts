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
