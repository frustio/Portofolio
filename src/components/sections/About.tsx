import { Calendar, FolderCode, Cpu, Award } from 'lucide-react';
import { metrics } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar size={24} />,
  FolderCode: <FolderCode size={24} />,
  Cpu: <Cpu size={24} />,
  Award: <Award size={24} />,
};

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section" id="about" aria-label="About me">
      <div className="container">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-header">
            <span className="section-header__label">// About Me</span>
            <h2 className="section-header__title">Bridging Hardware & Software</h2>
            <p className="section-header__description">
              Engineering solutions from circuit boards to cloud dashboards
            </p>
          </div>

          <div className="about__content">
            <p className="about__text">
              I'm <strong>Furqon Taufiq Hidayat</strong>, an engineer who thrives at the intersection of 
              electrical engineering, embedded systems, and software development. My work spans from 
              designing <strong>custom PCBs</strong> and writing <strong>microcontroller firmware</strong> to 
              building <strong>full-stack web applications</strong> and <strong>IoT platforms</strong>.
            </p>
            <p className="about__text">
              I believe the best engineering solutions come from understanding the full stack — from the 
              physics of sensors to the pixels on screen. Every line of code I write is meant to solve 
              a real-world problem, whether it's monitoring an industrial plant or optimizing energy consumption.
            </p>
          </div>
        </div>

        <div ref={metricsRef} className={`about__metrics stagger-children ${metricsVisible ? 'is-visible' : ''}`}>
          {metrics.map((metric) => (
            <div key={metric.label} className="about__metric-card glass-card">
              <div className="about__metric-icon">
                {iconMap[metric.icon] || <Cpu size={24} />}
              </div>
              <div className="about__metric-value">{metric.value}</div>
              <div className="about__metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
