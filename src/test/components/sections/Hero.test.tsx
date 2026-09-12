import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Hero from '../../../components/sections/Hero';
import { personalInfo } from '../../../data/portfolioData';

describe('Hero component', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('should render author name, status pill, and bio', () => {
    render(<Hero />);

    expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
    expect(screen.getByText(personalInfo.bio)).toBeInTheDocument();
  });

  it('should render different status labels based on personalInfo.status', () => {
    // Current status
    const { unmount } = render(<Hero />);
    expect(screen.getByText(/Available for hire|Open to opportunities|Currently busy/)).toBeInTheDocument();
    unmount();

    // Mock open-to-offers
    personalInfo.status = 'open-to-offers';
    const { unmount: unmount2 } = render(<Hero />);
    expect(screen.getByText('Open to opportunities')).toBeInTheDocument();
    unmount2();

    // Mock busy
    personalInfo.status = 'busy';
    const { unmount: unmount3 } = render(<Hero />);
    expect(screen.getByText('Currently busy')).toBeInTheDocument();
    unmount3();

    // Reset back to available
    personalInfo.status = 'available';
  });

  it('should handle CTA button clicks for smooth scrolling', () => {
    const projectsEl = document.createElement('div');
    projectsEl.id = 'projects';
    const contactEl = document.createElement('div');
    contactEl.id = 'contact';
    document.body.appendChild(projectsEl);
    document.body.appendChild(contactEl);

    render(<Hero />);

    const viewProjectsBtn = screen.getByRole('link', { name: /view projects/i });
    fireEvent.click(viewProjectsBtn);
    expect(projectsEl.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    const getInTouchBtn = screen.getByRole('link', { name: /get in touch/i });
    fireEvent.click(getInTouchBtn);
    expect(contactEl.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(projectsEl);
    document.body.removeChild(contactEl);
  });

  it('should render external social profile links with correct attributes', () => {
    render(<Hero />);

    const githubLink = screen.getByLabelText('GitHub profile');
    expect(githubLink).toHaveAttribute('href', personalInfo.socials.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    const linkedinLink = screen.getByLabelText('LinkedIn profile');
    expect(linkedinLink).toHaveAttribute('href', personalInfo.socials.linkedin);
    expect(linkedinLink).toHaveAttribute('target', '_blank');

    const emailLink = screen.getByLabelText('Send email');
    expect(emailLink).toHaveAttribute('href', `mailto:${personalInfo.socials.email}`);
  });
});
