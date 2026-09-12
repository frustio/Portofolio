import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { useTypingEffect } from '../../hooks/useTypingEffect';

describe('useTypingEffect hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should type characters forward one by one', () => {
    const strings = ['Code'];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 1000;

    const { result } = renderHook(() =>
      useTypingEffect(strings, typingSpeed, deletingSpeed, pauseDuration)
    );

    expect(result.current).toBe('');

    // Advance 1 tick -> 'C'
    act(() => {
      vi.advanceTimersByTime(typingSpeed);
    });
    expect(result.current).toBe('C');

    // Advance next tick -> 'Co'
    act(() => {
      vi.advanceTimersByTime(typingSpeed);
    });
    expect(result.current).toBe('Co');

    // Advance next tick -> 'Cod'
    act(() => {
      vi.advanceTimersByTime(typingSpeed);
    });
    expect(result.current).toBe('Cod');

    // Advance next tick -> 'Code'
    act(() => {
      vi.advanceTimersByTime(typingSpeed);
    });
    expect(result.current).toBe('Code');
  });

  it('should pause when full word is typed, delete characters, and cycle to next word', () => {
    const strings = ['Hi', 'Go'];
    const typingSpeed = 50;
    const deletingSpeed = 25;
    const pauseDuration = 500;

    const { result } = renderHook(() =>
      useTypingEffect(strings, typingSpeed, deletingSpeed, pauseDuration)
    );

    // Type 'H'
    act(() => {
      vi.advanceTimersByTime(typingSpeed);
    });
    expect(result.current).toBe('H');

    // Type 'Hi'
    act(() => {
      vi.advanceTimersByTime(typingSpeed);
    });
    expect(result.current).toBe('Hi');

    // Trigger pause timeout
    act(() => {
      vi.advanceTimersByTime(typingSpeed);
    });
    act(() => {
      vi.advanceTimersByTime(pauseDuration);
    });

    // Delete 'i' -> 'H'
    act(() => {
      vi.advanceTimersByTime(deletingSpeed);
    });
    expect(result.current).toBe('H');

    // Delete 'H' -> ''
    act(() => {
      vi.advanceTimersByTime(deletingSpeed);
    });
    expect(result.current).toBe('');

    // Transition to next word and type 'G'
    act(() => {
      vi.advanceTimersByTime(deletingSpeed);
    });
    act(() => {
      vi.advanceTimersByTime(typingSpeed);
    });
    expect(result.current).toBe('G');
  });

  it('should clear timer on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');
    const { unmount } = renderHook(() => useTypingEffect(['Test']));

    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
