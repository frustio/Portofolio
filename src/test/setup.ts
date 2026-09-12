import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  localStorage.clear();
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly scrollMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  callback: IntersectionObserverCallback;
  elements: Element[] = [];

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    if (options?.rootMargin) this.rootMargin = options.rootMargin;
  }

  observe = vi.fn((element: Element) => {
    this.elements.push(element);
  });

  unobserve = vi.fn((element: Element) => {
    this.elements = this.elements.filter((el) => el !== element);
  });

  disconnect = vi.fn(() => {
    this.elements = [];
  });

  takeRecords = vi.fn(() => []);
}

window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Mock window.scrollTo
window.scrollTo = vi.fn();

// Mock Element.prototype.scrollIntoView
Element.prototype.scrollIntoView = vi.fn();
