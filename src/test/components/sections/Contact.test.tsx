import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from '../../../components/sections/Contact';
import { personalInfo } from '../../../data/portfolioData';

describe('Contact component', () => {
  it('should render section header and call to action text', () => {
    render(<Contact />);

    expect(screen.getByText('// Contact')).toBeInTheDocument();
    expect(screen.getByText("Let's Build Something")).toBeInTheDocument();
    expect(screen.getByText(/Whether you need help with embedded systems/i)).toBeInTheDocument();
  });

  it('should render "Say Hello" button with mailto link', () => {
    render(<Contact />);

    const sayHelloBtn = screen.getByRole('link', { name: /say hello/i });
    expect(sayHelloBtn).toHaveAttribute('href', `mailto:${personalInfo.socials.email}`);
  });

  it('should render GitHub, LinkedIn, and Email social links', () => {
    render(<Contact />);

    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', personalInfo.socials.github);

    const linkedinLink = screen.getByLabelText('LinkedIn');
    expect(linkedinLink).toHaveAttribute('href', personalInfo.socials.linkedin);

    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).toHaveAttribute('href', `mailto:${personalInfo.socials.email}`);
  });
});
