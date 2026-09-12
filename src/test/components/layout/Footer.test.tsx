import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Footer from '../../../components/layout/Footer';

describe('Footer component', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  it('should render copyright text with current year and author name', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('Furqon Taufiq Hidayat')).toBeInTheDocument();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('should scroll smoothly to top when Back to top button is clicked', () => {
    render(<Footer />);

    const backToTopBtn = screen.getByRole('button', { name: /back to top/i });
    expect(backToTopBtn).toBeInTheDocument();

    fireEvent.click(backToTopBtn);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
