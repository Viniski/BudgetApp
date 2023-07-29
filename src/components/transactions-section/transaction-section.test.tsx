import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '@/helpers/test-utils';
import { ROOT } from '@/navigation/constants-dupa';
import { TransactionSection } from './transactions-section';

const MockedFilterSection = () => {
  const route = ROOT;

  return (
    <MemoryRouter initialEntries={[route]}>
      <TransactionSection title="wydatki" type="expense" />
    </MemoryRouter>
  );
};

describe('Transaction section', () => {
  it('should open a filter inputs section when click filter button', () => {
    renderWithProviders(<MockedFilterSection />);
    const buttonElement = screen.getByTestId('filter-button');
    fireEvent.click(buttonElement);
    const inputElementMin = screen.getByPlaceholderText(/Kwota minimalna/i);
    const inputElementMax = screen.getByPlaceholderText(/Kwota maksymalna/i);
    expect(inputElementMin).toBeInTheDocument();
    expect(inputElementMax).toBeInTheDocument();
  });
});

describe('', () => {
  it('should add criteria to page when submit a filter form', () => {
    renderWithProviders(<MockedFilterSection />);
    const buttonElement = screen.getByTestId('filter-button');
    fireEvent.click(buttonElement);

    const input = screen.getByPlaceholderText(/Kwota minimalna/i);
    const submitButton = screen.getByText(/Filtruj wydatki/i);

    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.click(submitButton);

    const activeCriteria = screen.getByText('Kwota minimalna: 100 PLN');
    expect(activeCriteria).toBeInTheDocument();
  });
});
