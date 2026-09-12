import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../../../components/sections/About';
import { metrics } from '../../../data/portfolioData';

describe('About component', () => {
  it('should render section headers and personal bio', () => {
    render(<About />);

    expect(screen.getByText('// About Me')).toBeInTheDocument();
    expect(screen.getByText('Bridging Hardware & Software')).toBeInTheDocument();
    expect(screen.getByText(/Furqon Taufiq Hidayat/i)).toBeInTheDocument();
  });

  it('should render all metrics with values and labels', () => {
    render(<About />);

    metrics.forEach((metric) => {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });

  it('should handle fallback icon if metric icon is unknown', () => {
    const originalMetrics = [...metrics];
    metrics.push({ value: '99', label: 'Test Metric', icon: 'UnknownIcon' });

    render(<About />);
    expect(screen.getByText('Test Metric')).toBeInTheDocument();

    metrics.length = 0;
    metrics.push(...originalMetrics);
  });
});
