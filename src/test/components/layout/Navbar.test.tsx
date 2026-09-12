import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navbar from '../../../components/layout/Navbar';
import { navItems } from '../../../data/portfolioData';

describe('Navbar component', () => {
  let observerCallback: IntersectionObserverCallback;
  let observeMock: ReturnType<typeof vi.fn>;
  let disconnectMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();

    class MockObserver {
      root = null;
      rootMargin = '';
      thresholds = [];
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }
      observe = observeMock;
      unobserve = vi.fn();
      disconnect = disconnectMock;
      takeRecords = vi.fn(() => []);
    }

    vi.stubGlobal('IntersectionObserver', MockObserver);
    window.scrollTo = vi.fn();
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('should render brand logo, all navigation links, and theme toggle', () => {
    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    expect(screen.getByText('FTH')).toBeInTheDocument();
    navItems.forEach((item) => {
      // Each nav item appears in desktop and mobile menus
      const links = screen.getAllByText(item.label);
      expect(links.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('should scroll to top when brand logo is clicked', async () => {
    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const logo = screen.getByText('FTH').closest('a');
    expect(logo).toBeInTheDocument();
    fireEvent.click(logo!);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should navigate and scroll smoothly when desktop nav link is clicked', () => {
    const targetSection = document.createElement('div');
    targetSection.id = 'projects';
    document.body.appendChild(targetSection);

    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const desktopLinks = screen.getAllByRole('link', { name: 'Projects' });
    fireEvent.click(desktopLinks[0]);

    expect(targetSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    document.body.removeChild(targetSection);
  });

  it('should handle nav link click gracefully when target element does not exist in DOM', () => {
    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const desktopLinks = screen.getAllByRole('link', { name: 'Projects' });
    // Should not throw error even if #projects does not exist
    expect(() => fireEvent.click(desktopLinks[0])).not.toThrow();
  });

  it('should call onToggleTheme when theme toggle button is clicked', async () => {
    const handleToggle = vi.fn();
    const { rerender } = render(<Navbar theme="dark" onToggleTheme={handleToggle} />);

    const toggleBtn = screen.getByLabelText('Switch to light mode');
    await userEvent.click(toggleBtn);
    expect(handleToggle).toHaveBeenCalledTimes(1);

    // Rerender with light theme
    rerender(<Navbar theme="light" onToggleTheme={handleToggle} />);
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });

  it('should toggle mobile menu open and closed via hamburger button', async () => {
    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const hamburger = screen.getByLabelText('Toggle mobile menu');
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    expect(document.body.style.overflow).toBe('');

    // Open menu
    await userEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    expect(document.body.style.overflow).toBe('hidden');

    // Close menu
    await userEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    expect(document.body.style.overflow).toBe('');
  });

  it('should close mobile menu when mobile overlay is clicked', async () => {
    const { container } = render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const hamburger = screen.getByLabelText('Toggle mobile menu');
    await userEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');

    const overlay = container.querySelector('.navbar__mobile-overlay');
    expect(overlay).toBeInTheDocument();
    fireEvent.click(overlay!);

    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('should close mobile menu and scroll when mobile link is clicked', () => {
    const targetSection = document.createElement('div');
    targetSection.id = 'contact';
    document.body.appendChild(targetSection);

    const { container } = render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const hamburger = screen.getByLabelText('Toggle mobile menu');
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');

    const mobileMenu = container.querySelector('.navbar__mobile-menu');
    const contactLink = mobileMenu?.querySelector('a[href="#contact"]');
    expect(contactLink).toBeInTheDocument();

    fireEvent.click(contactLink!);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    expect(targetSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(targetSection);
  });

  it('should close mobile menu on window resize above 768px', () => {
    render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    const hamburger = screen.getByLabelText('Toggle mobile menu');
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');

    // Trigger resize with width > 768
    window.innerWidth = 1024;
    fireEvent(window, new Event('resize'));

    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('should update scroll progress on window scroll', () => {
    const { container } = render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 2000, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 1000, configurable: true });
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true });

    fireEvent.scroll(window);

    const progressBar = container.querySelector('.navbar__progress') as HTMLElement;
    expect(progressBar).toBeInTheDocument();
    // 500 / (2000 - 1000) * 100 = 50%
    expect(progressBar.style.width).toBe('50%');

    // Case when totalHeight <= 0
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1000, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 1000, configurable: true });
    fireEvent.scroll(window);
    expect(progressBar.style.width).toBe('0%');
  });

  it('should update active section when IntersectionObserver reports an entry intersecting', () => {
    const targetSection = document.createElement('div');
    targetSection.id = 'skills';
    document.body.appendChild(targetSection);

    const { container } = render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    act(() => {
      observerCallback(
        [{ isIntersecting: true, target: targetSection } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    const activeLink = container.querySelector('.navbar__link.active');
    expect(activeLink).toHaveAttribute('href', '#skills');

    document.body.removeChild(targetSection);
  });

  it('should ignore non-intersecting observer entries', () => {
    const targetSection = document.createElement('div');
    targetSection.id = 'skills';
    document.body.appendChild(targetSection);

    const { container } = render(<Navbar theme="dark" onToggleTheme={vi.fn()} />);

    act(() => {
      observerCallback(
        [{ isIntersecting: false, target: targetSection } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    const activeLink = container.querySelector('.navbar__link.active');
    expect(activeLink).toBeNull();

    document.body.removeChild(targetSection);
  });
});
