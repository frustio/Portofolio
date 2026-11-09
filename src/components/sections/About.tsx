import { Calendar, FolderCode, Cpu, Award, GraduationCap, Trophy, Briefcase } from 'lucide-react';
import { metrics } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar size={24} />,
  FolderCode: <FolderCode size={24} />,
  Cpu: <Cpu size={24} />,
  Award: <Award size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  Trophy: <Trophy size={24} />,
  Briefcase: <Briefcase size={24} />,
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
            <h2 className="section-header__title">Bridging Hardware &amp; Software</h2>
            <p className="section-header__description">
              From microcontroller firmware and UAV flight control to backend software testing
            </p>
          </div>

          <div className="about__content">
            <p className="about__text">
              I'm <strong>Furqon Taufiq Hidayat</strong>, an Electrical Engineering graduate from
              Universitas Negeri Yogyakarta specializing in <strong>embedded systems</strong>,{' '}
              <strong>microcontroller programming</strong>, <strong>control system algorithms</strong>, and{' '}
              <strong>software engineering</strong>.
            </p>
            <p className="about__text">
              I program ARM-based microcontrollers (STM32, Teensy) in C/C++ for real-time operation, and
              have designed UAV flight controller architectures and processed inertial sensor data for
              national flying-robot competitions. Today I build automated unit tests and resolve bugs in
              backend components, and I'm comfortable working in the Linux ecosystem for engineering
              development and hardware integration.
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
