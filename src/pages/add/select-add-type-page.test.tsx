import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { SelectAddTypePage } from './select-add-type-page';

const MockComponent = () => (
  <MemoryRouter>
    <SelectAddTypePage />
  </MemoryRouter>
);

describe('Select add type page', () => {
  test('should display expense button', () => {
    renderWithProviders(<MockComponent />);

    const buttonExpense = screen.getByRole('button', {
      name: /Dodaj wydatek/i,
    });
    expect(buttonExpense).toBeInTheDocument();
  });

  test('should display income button', () => {
    renderWithProviders(<MockComponent />);

    const buttonIncome = screen.getByRole('button', {
      name: /Dodaj przychód/i,
    });
    expect(buttonIncome).toBeInTheDocument();
  });

  test('should display correct title page', () => {
    renderWithProviders(<MockComponent />);

    const { title } = document;
    expect(title).toBe('Dodaj transakcje | BudgetApp by Viniski');
  });
});
