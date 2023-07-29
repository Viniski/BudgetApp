import { clsx } from 'clsx';
import { FilterSection } from '@/components/filter-section/filter-section';
import { Pagination } from '@/components/pagination/pagination';
import { TransactionCard } from '@/components/transaction-card/transaction-card';
import { useTheme } from '@/hooks/use-theme';
import { useTransactionSection } from './hooks/use-transaction-section';

type Props = {
  type: 'all' | 'expense' | 'income';
  title: string;
};

export const TransactionSection = ({ type, title }: Props) => {
  const isDarkTheme = useTheme();
  const { transactions, perPage, transactionOnPage, criteria, paginate } = useTransactionSection(type);

  return (
    <section className="transaction-section">
      <FilterSection criteria={criteria} isDarkTheme={isDarkTheme} title={title} type={type} />
      {transactionOnPage.map((transaction) => (
        <TransactionCard key={transaction.id} data={transaction} isDarkTheme={isDarkTheme} />
      ))}
      {!transactions.length && (
        <p className={clsx('transaction-section__paragraph', isDarkTheme && 'transaction-section__paragraph--dark')}>
          Brak transakcji
        </p>
      )}
      <Pagination cardNumber={transactions.length} isDarkTheme={isDarkTheme} paginate={paginate} perPage={perPage} />
    </section>
  );
};
