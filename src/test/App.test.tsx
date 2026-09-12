import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from '../App';

describe('App root component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    window.scrollTo = vi.fn();
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('should render skip-to-content accessibility link', () => {
    render(<App />);

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#about');
  });

  it('should render all landmark sections within main-content', () => {
    const { container } = render(<App />);

    const main = container.querySelector('main#main-content');
    expect(main).toBeInTheDocument();

    expect(container.querySelector('section#hero')).toBeInTheDocument();
    expect(container.querySelector('section#about')).toBeInTheDocument();
    expect(container.querySelector('section#projects')).toBeInTheDocument();
    expect(container.querySelector('section#skills')).toBeInTheDocument();
    expect(container.querySelector('section#experience')).toBeInTheDocument();
    expect(container.querySelector('section#certifications')).toBeInTheDocument();
    expect(container.querySelector('section#contact')).toBeInTheDocument();
  });

  it('should toggle theme from dark to light across the application', () => {
    localStorage.setItem('portfolio-theme', 'dark');
    render(<App />);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    const themeToggleBtn = screen.getByLabelText('Switch to light mode');
    fireEvent.click(themeToggleBtn);

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });
});
