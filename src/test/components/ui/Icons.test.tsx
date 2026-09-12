import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GithubIcon, LinkedinIcon } from '../../../components/ui/Icons';

describe('Custom SVG Icons', () => {
  it('should render GithubIcon with default and custom props', () => {
    const { container } = render(
      <GithubIcon className="custom-icon" data-testid="github-icon" width={24} height={24} />
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('custom-icon');
    expect(svg).toHaveAttribute('data-testid', 'github-icon');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('should render LinkedinIcon with default and custom props', () => {
    const { container } = render(
      <LinkedinIcon className="linkedin-custom" data-testid="linkedin-icon" width={30} height={30} />
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('linkedin-custom');
    expect(svg).toHaveAttribute('data-testid', 'linkedin-icon');
    expect(svg).toHaveAttribute('width', '30');
    expect(svg).toHaveAttribute('height', '30');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });
});
