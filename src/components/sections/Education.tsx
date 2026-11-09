import { GraduationCap } from 'lucide-react';
import { education } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section" id="education" aria-label="Education">
      <div className="container">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-header">
            <span className="section-header__label">// Education</span>
            <h2 className="section-header__title">Academic Background</h2>
            <p className="section-header__description">
              Where the foundations in electrical engineering and control systems were built
            </p>
          </div>
        </div>

        <div className="education__list">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`education-card glass-card scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="education-card__header">
        <div className="education-card__icon" aria-hidden="true">
          <GraduationCap size={24} />
        </div>
        <div className="education-card__title-group">
          <h3 className="education-card__institution">{edu.institution}</h3>
          <p className="education-card__degree">{edu.degree}</p>
        </div>
        <span className="experience__period">{edu.period}</span>
      </div>

      <div className="education-card__meta">
        <span>{edu.location}</span>
        {edu.gpa && (
          <span className="badge badge-accent">GPA {edu.gpa}</span>
        )}
      </div>

      {edu.thesis && (
        <div className="project-card__detail">
          <div className="project-card__detail-label">Thesis</div>
          <div className="project-card__detail-text education-card__thesis">“{edu.thesis}”</div>
        </div>
      )}

      {edu.activities.length > 0 && (
        <ul className="experience__achievements education-card__activities">
          {edu.activities.map((activity) => (
            <li key={activity} className="experience__achievement">
              {activity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

