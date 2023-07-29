import { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { ROOT } from '@/navigation/constants-dupa';
import { TransactionCard } from './transaction-card';

type Data = ComponentProps<typeof TransactionCard>['data'];

const MockTransactionCard = () => {
  const route = ROOT;
  const mockData = {
    amount: 24,
    category: 'Jedzenie',
    title: 'Obiad w restauracji',
    type: 'expense',
  } as Data;

  return (
    <MemoryRouter initialEntries={[route]}>
      <TransactionCard data={mockData} isDarkTheme={false} />
    </MemoryRouter>
  );
};

describe('Transaction Card', () => {
  it('should render transaction card title', () => {
    renderWithProviders(<MockTransactionCard />);
    const title = screen.getByText(/Obiad w restauracji/i);
    expect(title).toBeInTheDocument();
  });

  it('should render transaction card amount', () => {
    renderWithProviders(<MockTransactionCard />);
    const amount = screen.getByText(/24/i);
    expect(amount).toBeInTheDocument();
  });

  it('should render transaction card category', () => {
    renderWithProviders(<MockTransactionCard />);
    const category = screen.getByText(/jedzenie/i);
    expect(category).toBeInTheDocument();
  });
});
