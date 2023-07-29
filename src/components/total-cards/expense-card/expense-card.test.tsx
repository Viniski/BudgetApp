import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { ExpenseCard } from './expense-card';

const MockComponent = () => (
  <MemoryRouter>
    <ExpenseCard />
  </MemoryRouter>
);

describe('Expense card', () => {
  it('should display correct amount of expense transactions', () => {
    renderWithProviders(<MockComponent />);

    const paragraph = screen.getByText(/-2647 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
