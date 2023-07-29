import { Header } from '@/components/header/header-dupa';
import { ExpenseCard } from '@/components/total-cards/expense-card/expense-card';
import { TransactionSection } from '@/components/transactions-section/transactions-section';
import { AddButton } from '@/components/ui/buttons/add-button';
import { useWebsiteTitle } from '@/hooks/use-webstite-title';
import { AddTransactionLink } from '@/navigation/components/add-transaction-link/add-transaction-link';

export const ExpensePage = () => {
  useWebsiteTitle('Wydatki | BudgetApp by Viniski');

  return (
    <>
      <Header title="Wydatki" />
      <section className="cards">
        <ExpenseCard variant="main" />
      </section>
      <TransactionSection title="wydatki" type="expense" />
      <AddTransactionLink>
        <AddButton />
      </AddTransactionLink>
    </>
  );
};
