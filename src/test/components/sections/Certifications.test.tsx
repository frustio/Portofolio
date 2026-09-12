import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Certifications from '../../../components/sections/Certifications';
import { certifications } from '../../../data/portfolioData';

describe('Certifications component', () => {
  it('should render section header and all certifications', () => {
    render(<Certifications />);

    expect(screen.getByText('// Certifications')).toBeInTheDocument();
    expect(screen.getByText('Credentials & Learning')).toBeInTheDocument();

    certifications.forEach((cert) => {
      expect(screen.getByText(cert.name)).toBeInTheDocument();
      expect(screen.getByText(cert.issuer)).toBeInTheDocument();

      const dates = screen.getAllByText(cert.date);
      expect(dates.length).toBeGreaterThanOrEqual(1);

      if (cert.credentialUrl) {
        const link = screen.getByLabelText(`View ${cert.name} credential`);
        expect(link).toHaveAttribute('href', cert.credentialUrl);
        expect(link).toHaveAttribute('target', '_blank');
      }
    });
  });
});
