import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="container">
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-header">
            <span className="section-header__label">// Contact</span>
            <h2 className="section-header__title">Let's Build Something</h2>
            <p className="section-header__description">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="contact__content">
            <p className="contact__text">
              Whether you need help with embedded systems design, industrial IoT solutions, 
              or full-stack web development — I'm always excited to take on new engineering challenges. 
              Drop me an email or connect on social media.
            </p>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="btn btn-primary btn-lg contact__email-btn"
            >
              <Send size={18} />
              Say Hello
            </a>

            <div className="contact__socials">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="GitHub"
              >
                <GithubIcon width={22} height={22} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="LinkedIn"
              >
                <LinkedinIcon width={22} height={22} />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="contact__social-link"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
