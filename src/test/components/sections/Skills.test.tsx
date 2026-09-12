import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from '../../../components/sections/Skills';
import { skillGroups } from '../../../data/portfolioData';

describe('Skills component', () => {
  it('should render section header and all skill categories', () => {
    render(<Skills />);

    expect(screen.getByText('// Skills')).toBeInTheDocument();
    expect(screen.getByText('Technical Arsenal')).toBeInTheDocument();

    skillGroups.forEach((group) => {
      expect(screen.getByText(group.category)).toBeInTheDocument();
    });
  });

  it('should render skill items with names and proficiency percentage', () => {
    render(<Skills />);

    const sampleGroup = skillGroups[0];
    sampleGroup.items.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
      const percentages = screen.getAllByText(`${skill.proficiency}%`);
      expect(percentages.length).toBeGreaterThanOrEqual(1);
    });
  });
});
