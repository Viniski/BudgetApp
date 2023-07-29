import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { IncomeCard } from './income-card';

const MockComponent = () => (
  <MemoryRouter>
    <IncomeCard />
  </MemoryRouter>
);

describe('Income card', () => {
  it('should display correct amount of income transactions', () => {
    renderWithProviders(<MockComponent />);

    const paragraph = screen.getByText(/4350 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
