import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__text">
          © {new Date().getFullYear()} <span>Furqon Taufiq Hidayat</span>. Built with{' '}
          <Heart size={14} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--accent-primary)' }} />{' '}
          and lots of code.
        </p>
        <button className="footer__back-to-top" onClick={handleBackToTop} aria-label="Back to top">
          <ArrowUp size={14} />
          Back to top
        </button>
      </div>
    </footer>
  );
}
