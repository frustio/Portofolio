import { Cpu, Code, CircuitBoard, Wifi, Globe, Wrench } from 'lucide-react';
import { skillGroups } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={20} />,
  Code: <Code size={20} />,
  CircuitBoard: <CircuitBoard size={20} />,
  Wifi: <Wifi size={20} />,
  Globe: <Globe size={20} />,
  Wrench: <Wrench size={20} />,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section" id="skills" aria-label="Technical skills">
      <div className="container">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-header">
            <span className="section-header__label">// Skills</span>
            <h2 className="section-header__title">Technical Arsenal</h2>
            <p className="section-header__description">
              Technologies and tools I work with daily
            </p>
          </div>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, groupIndex) => (
            <SkillGroupCard key={group.category} group={group} index={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroupCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`skill-group glass-card scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="skill-group__header">
        <div className="skill-group__icon">
          {iconMap[group.icon] || <Cpu size={20} />}
        </div>
        <h3 className="skill-group__title">{group.category}</h3>
      </div>

      <div className="skill-group__items">
        {group.items.map((skill, skillIndex) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-item__header">
              <span className="skill-item__name">{skill.name}</span>
              <span className="skill-item__value">{skill.proficiency}%</span>
            </div>
            <div className="skill-item__bar">
              <div
                className={`skill-item__bar-fill ${isVisible ? 'animated' : ''}`}
                style={{
                  width: isVisible ? `${skill.proficiency}%` : '0%',
                  transitionDelay: `${(index * 100) + (skillIndex * 80)}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
