import { describe, it, expect } from 'vitest';
import {
  personalInfo,
  metrics,
  projects,
  skillGroups,
  experiences,
  certifications,
  navItems,
} from '../../data/portfolioData';

describe('portfolioData integrity and schemas', () => {
  it('should have valid personalInfo structure and contact links', () => {
    expect(personalInfo.name).toBe('Furqon Taufiq Hidayat');
    expect(personalInfo.title).toBeTruthy();
    expect(personalInfo.subtitles.length).toBeGreaterThan(0);
    expect(personalInfo.bio).toBeTruthy();
    expect(personalInfo.socials.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(personalInfo.socials.github).toMatch(/^https?:\/\//);
    expect(personalInfo.socials.linkedin).toMatch(/^https?:\/\//);
    expect(['available', 'open-to-offers', 'busy']).toContain(personalInfo.status);
  });

  it('should have non-empty metrics with valid structure', () => {
    expect(metrics.length).toBeGreaterThan(0);
    metrics.forEach((metric) => {
      expect(metric.value).toBeTruthy();
      expect(metric.label).toBeTruthy();
      expect(metric.icon).toBeTruthy();
    });
  });

  it('should have unique project IDs and valid project details', () => {
    expect(projects.length).toBeGreaterThan(0);

    const projectIds = new Set<string>();
    const validCategories = ['embedded', 'electrical', 'iot', 'software', 'fullstack'];

    projects.forEach((project) => {
      expect(projectIds.has(project.id)).toBe(false);
      projectIds.add(project.id);

      expect(project.title).toBeTruthy();
      expect(validCategories).toContain(project.category);
      expect(project.summary).toBeTruthy();
      expect(project.challenge).toBeTruthy();
      expect(project.solution).toBeTruthy();
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);

      if (project.githubUrl) {
        expect(project.githubUrl).toMatch(/^https?:\/\//);
      }
      if (project.liveUrl) {
        expect(project.liveUrl).toMatch(/^https?:\/\//);
      }
    });
  });

  it('should have valid skillGroups with proficiency values between 1 and 100', () => {
    expect(skillGroups.length).toBeGreaterThan(0);

    skillGroups.forEach((group) => {
      expect(group.category).toBeTruthy();
      expect(group.icon).toBeTruthy();
      expect(group.items.length).toBeGreaterThan(0);

      group.items.forEach((skill) => {
        expect(skill.name).toBeTruthy();
        expect(skill.proficiency).toBeGreaterThanOrEqual(1);
        expect(skill.proficiency).toBeLessThanOrEqual(100);
      });
    });
  });

  it('should have valid experiences with achievements and tech used', () => {
    expect(experiences.length).toBeGreaterThan(0);

    const expIds = new Set<string>();
    experiences.forEach((exp) => {
      expect(expIds.has(exp.id)).toBe(false);
      expIds.add(exp.id);

      expect(exp.role).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.location).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(['full-time', 'contract', 'freelance', 'internship']).toContain(exp.type);
      expect(exp.description).toBeTruthy();
      expect(exp.achievements.length).toBeGreaterThan(0);
      expect(exp.techUsed.length).toBeGreaterThan(0);
    });
  });

  it('should have valid certifications list', () => {
    expect(certifications.length).toBeGreaterThan(0);

    certifications.forEach((cert) => {
      expect(cert.name).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
      expect(cert.date).toBeTruthy();
      if (cert.credentialUrl) {
        expect(cert.credentialUrl).toMatch(/^https?:\/\//);
      }
    });
  });

  it('should have navItems corresponding to valid section anchors', () => {
    expect(navItems.length).toBeGreaterThan(0);

    navItems.forEach((item) => {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^#[a-z0-9-]+$/);
    });
  });
});
