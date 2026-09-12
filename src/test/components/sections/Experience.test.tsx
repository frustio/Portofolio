import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from '../../../components/sections/Experience';
import { experiences } from '../../../data/portfolioData';

describe('Experience component', () => {
  it('should render section header and all work experience entries', () => {
    render(<Experience />);

    expect(screen.getByText('// Experience')).toBeInTheDocument();
    expect(screen.getByText('Professional Journey')).toBeInTheDocument();

    experiences.forEach((exp) => {
      expect(screen.getByText(exp.role)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();
      expect(screen.getByText(exp.period)).toBeInTheDocument();
      expect(screen.getByText(exp.description)).toBeInTheDocument();
    });
  });

  it('should render achievements and tech stack tags for experiences', () => {
    render(<Experience />);

    const sampleExp = experiences[0];
    sampleExp.achievements.forEach((achievement) => {
      expect(screen.getByText(achievement)).toBeInTheDocument();
    });

    sampleExp.techUsed.forEach((tech) => {
      const badges = screen.getAllByText(tech);
      expect(badges.length).toBeGreaterThanOrEqual(1);
    });
  });
});
