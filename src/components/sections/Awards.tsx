import { Trophy, MapPin, ExternalLink } from 'lucide-react';
import { awards } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Awards() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section" id="awards" aria-label="Honors and awards">
      <div className="container">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-header">
            <span className="section-header__label">// Awards</span>
            <h2 className="section-header__title">Honors &amp; Awards</h2>
            <p className="section-header__description">
              National recognition at the Indonesian Flying Robot Contest (KRTI)
            </p>
          </div>
        </div>

        <div className="awards__grid">
          {awards.map((award, index) => (
            <AwardCard key={award.id} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award, index }: { award: typeof awards[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`award-card glass-card scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="award-card__icon" aria-hidden="true">
        <Trophy size={26} />
      </div>
      <div className="award-card__rank">{award.rank}</div>
      <h3 className="award-card__event">{award.event}</h3>
      <div className="award-card__category">{award.category}</div>
      {award.theme && <p className="award-card__theme">{award.theme}</p>}
      <div className="award-card__meta">
        <span className="award-card__location">
          <MapPin size={12} aria-hidden="true" />
          {award.location}
        </span>
        <span>{award.date}</span>
      </div>
      {award.credentialUrl && (
        <a
          href={award.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm award-card__link"
          aria-label={`View ${award.rank} ${award.event} certificate`}
        >
          <ExternalLink size={14} />
          Certificate
        </a>
      )}
    </div>
  );
}

