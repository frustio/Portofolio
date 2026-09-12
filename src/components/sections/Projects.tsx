import { useState, useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projects } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'embedded', label: 'Embedded' },
  { key: 'electrical', label: 'Electrical' },
  { key: 'iot', label: 'IoT' },
  { key: 'software', label: 'Software' },
  { key: 'fullstack', label: 'Full-Stack' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  return (
    <section className="section" id="projects" aria-label="Projects">
      <div className="container">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-header">
            <span className="section-header__label">// Projects</span>
            <h2 className="section-header__title">Engineering Case Studies</h2>
            <p className="section-header__description">
              From firmware to full-stack — real solutions for real problems
            </p>
          </div>

          {/* Filter tabs */}
          <div className="projects__filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`projects__filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`project-card glass-card scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <span className="badge badge-accent project-card__category">{project.category}</span>
      </div>

      <p className="project-card__summary">{project.summary}</p>

      <div className="project-card__details">
        <div className="project-card__detail">
          <div className="project-card__detail-label">Challenge</div>
          <div className="project-card__detail-text">{project.challenge}</div>
        </div>
        <div className="project-card__detail">
          <div className="project-card__detail-label">Solution</div>
          <div className="project-card__detail-text">{project.solution}</div>
        </div>
      </div>

      {project.impact && (
        <div className="project-card__impact">
          <div className="project-card__impact-label">Impact</div>
          <div className="project-card__impact-text">{project.impact}</div>
        </div>
      )}

      <div className="project-card__tech">
        {project.techStack.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-card__actions">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
            <GithubIcon width={14} height={14} />
            Source Code
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
