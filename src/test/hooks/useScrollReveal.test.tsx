import { render, renderHook, act, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useScrollReveal } from '../../hooks/useScrollReveal';

describe('useScrollReveal hook', () => {
  let observerCallback: IntersectionObserverCallback;
  let observeMock: ReturnType<typeof vi.fn>;
  let unobserveMock: ReturnType<typeof vi.fn>;
  let disconnectMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    observeMock = vi.fn();
    unobserveMock = vi.fn();
    disconnectMock = vi.fn();

    class MockObserver {
      root = null;
      rootMargin = '';
      scrollMargin = '';
      thresholds = [];
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }
      observe = observeMock;
      unobserve = unobserveMock;
      disconnect = disconnectMock;
      takeRecords = vi.fn(() => []);
    }

    vi.stubGlobal('IntersectionObserver', MockObserver);
  });

  it('should initialize with isVisible as false and not observe if ref has no element', () => {
    const { result } = renderHook(() => useScrollReveal());
    expect(result.current.isVisible).toBe(false);
    expect(observeMock).not.toHaveBeenCalled();
  });

  it('should observe element when ref is attached and set isVisible to true on intersection (once = true)', () => {
    function TestComponent() {
      const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });
      return (
        <div ref={ref} data-testid="reveal-target" data-visible={isVisible}>
          Test Content
        </div>
      );
    }

    const { unmount } = render(<TestComponent />);
    const target = screen.getByTestId('reveal-target');

    expect(observeMock).toHaveBeenCalledWith(target);
    expect(target).toHaveAttribute('data-visible', 'false');

    // Simulate intersecting
    act(() => {
      observerCallback(
        [{ isIntersecting: true, target } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(target).toHaveAttribute('data-visible', 'true');
    expect(unobserveMock).toHaveBeenCalledWith(target);

    unmount();
    expect(disconnectMock).toHaveBeenCalled();
  });

  it('should toggle isVisible when once is false', () => {
    function TestComponent() {
      const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: false });
      return (
        <div ref={ref} data-testid="reveal-target" data-visible={isVisible}>
          Test Content
        </div>
      );
    }

    render(<TestComponent />);
    const target = screen.getByTestId('reveal-target');

    // Intersecting -> true
    act(() => {
      observerCallback(
        [{ isIntersecting: true, target } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
    expect(target).toHaveAttribute('data-visible', 'true');
    expect(unobserveMock).not.toHaveBeenCalled();

    // Not intersecting -> false
    act(() => {
      observerCallback(
        [{ isIntersecting: false, target } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
    expect(target).toHaveAttribute('data-visible', 'false');
  });
});
