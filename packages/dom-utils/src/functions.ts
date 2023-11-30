export function getBoundingClientRect<T extends Element>(element: T): DOMRect {
  return element.getBoundingClientRect()
}

export function getClientRects<T extends Element>(element: T): DOMRectList {
  return element.getClientRects()
}

export function getParentElement<T extends Element>(element: T): Element | null {
  return element.parentElement;
}