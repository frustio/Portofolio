import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section" id="certifications" aria-label="Certifications">
      <div className="container">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-header">
            <span className="section-header__label">// Certifications</span>
            <h2 className="section-header__title">Credentials & Learning</h2>
            <p className="section-header__description">
              Continuous learning validated by industry certifications
            </p>
          </div>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ certification, index }: { certification: typeof certifications[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`certification-card glass-card scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="certification-card__icon">
        <Award size={24} />
      </div>
      <div className="certification-card__info">
        <div className="certification-card__name">{certification.name}</div>
        <div className="certification-card__meta">
          <span>{certification.issuer}</span>
          <span>·</span>
          <span>{certification.date}</span>
        </div>
      </div>
      {certification.credentialUrl && (
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon certification-card__link"
          aria-label={`View ${certification.name} credential`}
        >
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}
