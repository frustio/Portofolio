import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.subtitles, 80, 40, 2000);

  const statusLabel =
    personalInfo.status === 'available'
      ? 'Available for hire'
      : personalInfo.status === 'open-to-offers'
      ? 'Open to opportunities'
      : 'Currently busy';

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      {/* Background effects */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__content">
        {/* Status pill */}
        <div className="hero__status">
          <span className="hero__status-dot" />
          <span className="hero__status-text">{statusLabel}</span>
        </div>

        {/* Name */}
        <h1 className="hero__name">
          <span className="hero__name-gradient">{personalInfo.name}</span>
        </h1>

        {/* Typing subtitle */}
        <div className="hero__subtitle" aria-label={personalInfo.title}>
          {'> '}{typedText}
          <span className="hero__cursor" />
        </div>

        {/* Bio */}
        <p className="hero__bio">{personalInfo.bio}</p>

        {/* CTA Buttons */}
        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary btn-lg" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Projects
            <ExternalLink size={16} />
          </a>
          <a href="#contact" className="btn btn-secondary btn-lg" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="hero__socials">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub profile"
          >
            <GithubIcon width={20} height={20} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon width={20} height={20} />
          </a>
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="btn-icon"
            aria-label="Send email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span>Scroll down</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
