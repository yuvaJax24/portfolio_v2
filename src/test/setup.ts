import '@testing-library/jest-dom/vitest'

Object.defineProperty(window, 'matchMedia', { writable: true, value: (query: string) => ({
  matches: query.includes('reduce') ? true : false, media: query, onchange: null,
  addListener: () => {}, removeListener: () => {}, addEventListener: () => {}, removeEventListener: () => {}, dispatchEvent: () => false,
}) })
class ResizeObserverMock { observe() {} unobserve() {} disconnect() {} }
class IntersectionObserverMock { observe() {} unobserve() {} disconnect() {} }
globalThis.ResizeObserver = ResizeObserverMock
globalThis.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver
Element.prototype.scrollIntoView = () => {}
