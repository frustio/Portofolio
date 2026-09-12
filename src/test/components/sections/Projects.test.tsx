import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from '../../../components/sections/Projects';
import { projects } from '../../../data/portfolioData';

describe('Projects component', () => {
  it('should render section header and category filter buttons', () => {
    render(<Projects />);

    expect(screen.getByText('// Projects')).toBeInTheDocument();
    expect(screen.getByText('Engineering Case Studies')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Embedded' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Electrical' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'IoT' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Software' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Full-Stack' })).toBeInTheDocument();
  });

  it('should render all projects initially', () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('should filter projects when category button is clicked', () => {
    render(<Projects />);

    const embeddedBtn = screen.getByRole('button', { name: 'Embedded' });
    fireEvent.click(embeddedBtn);

    const embeddedProjects = projects.filter((p) => p.category === 'embedded');
    const nonEmbeddedProjects = projects.filter((p) => p.category !== 'embedded');

    embeddedProjects.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });

    nonEmbeddedProjects.forEach((p) => {
      expect(screen.queryByText(p.title)).not.toBeInTheDocument();
    });

    // Reset back to All
    const allBtn = screen.getByRole('button', { name: 'All' });
    fireEvent.click(allBtn);
    expect(screen.getByText(projects[0].title)).toBeInTheDocument();
  });

  it('should render project card details: challenge, solution, impact, tech stack, and links', () => {
    render(<Projects />);

    const sampleProject = projects[0];
    expect(screen.getByText(sampleProject.title)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.challenge)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.solution)).toBeInTheDocument();
    if (sampleProject.impact) {
      expect(screen.getByText(sampleProject.impact)).toBeInTheDocument();
    }

    sampleProject.techStack.forEach((tech) => {
      const badges = screen.getAllByText(tech);
      expect(badges.length).toBeGreaterThanOrEqual(1);
    });

    const sourceLinks = screen.getAllByRole('link', { name: /source code/i });
    expect(sourceLinks.length).toBeGreaterThan(0);
  });

  it('should render live demo link when project has liveUrl', () => {
    const originalProjects = [...projects];
    projects[0].liveUrl = 'https://demo.example.com';

    render(<Projects />);
    const demoLink = screen.getByRole('link', { name: /live demo/i });
    expect(demoLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com');

    delete projects[0].liveUrl;
    projects.length = 0;
    projects.push(...originalProjects);
  });
});
