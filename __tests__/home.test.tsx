import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders navbar brand', () => {
    render(<Home />);
    expect(screen.getByText(/DoeHetZelfWijs.nl/i)).toBeInTheDocument();
  });

  it('renders projects list', () => {
    render(<Home />);
    expect(screen.getByText(/Projecten/i)).toBeInTheDocument();
  });
});
