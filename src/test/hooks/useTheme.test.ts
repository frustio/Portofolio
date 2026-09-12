import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useTheme } from '../../hooks/useTheme';

describe('useTheme hook', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('should initialize with stored dark theme from localStorage', () => {
    localStorage.setItem('portfolio-theme', 'dark');
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should initialize with stored light theme from localStorage', () => {
    localStorage.setItem('portfolio-theme', 'light');
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('should fallback to light theme when preferred by system matchMedia', () => {
    vi.mocked(window.matchMedia).mockReturnValueOnce({
      matches: true,
      media: '(prefers-color-scheme: light)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
  });

  it('should fallback to dark theme when preferred by default', () => {
    vi.mocked(window.matchMedia).mockReturnValueOnce({
      matches: false,
      media: '(prefers-color-scheme: light)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('should toggle theme between dark and light', () => {
    localStorage.setItem('portfolio-theme', 'dark');
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });
});
