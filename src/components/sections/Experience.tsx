import { experiences } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section" id="experience" aria-label="Work experience">
      <div className="container">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-header">
            <span className="section-header__label">// Experience</span>
            <h2 className="section-header__title">Professional Journey</h2>
            <p className="section-header__description">
              Building real-world systems across industries
            </p>
          </div>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`experience__item scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="experience__dot" />
      <div className="experience__card glass-card">
        <div className="experience__card-header">
          <h3 className="experience__role">{experience.role}</h3>
          <span className="experience__period">{experience.period}</span>
        </div>

        <p className="experience__company">
          <span className="experience__company-name">{experience.company}</span>
          {' · '}
          {experience.location}
          {' · '}
          <span style={{ textTransform: 'capitalize' }}>{experience.type}</span>
        </p>

        <p className="experience__description">{experience.description}</p>

        <ul className="experience__achievements">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="experience__achievement">
              {achievement}
            </li>
          ))}
        </ul>

        <div className="experience__tech">
          {experience.techUsed.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
