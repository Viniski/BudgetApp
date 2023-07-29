import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { TotalCard } from './total-card';

const MockComponent = () => (
  <MemoryRouter>
    <TotalCard />
  </MemoryRouter>
);

describe('Total card', () => {
  it('should display correct amount of total transactions', () => {
    renderWithProviders(<MockComponent />);

    const paragraph = screen.getByText(/1703 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
