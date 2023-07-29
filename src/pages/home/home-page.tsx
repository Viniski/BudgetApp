import { Header } from '@/components/header/header-dupa';
import { ExpenseCard } from '@/components/total-cards/expense-card/expense-card';
import { IncomeCard } from '@/components/total-cards/income-card/income-card';
import { TotalCard } from '@/components/total-cards/total-card/total-card';
import { TransactionSection } from '@/components/transactions-section/transactions-section';
import { AddButton } from '@/components/ui/buttons/add-button';
import { useWebsiteTitle } from '@/hooks/use-webstite-title';
import { AddTransactionLink } from '@/navigation/components/add-transaction-link/add-transaction-link';

export const HomePage = () => {
  useWebsiteTitle('BudgetApp by Viniski');

  return (
    <>
      <Header title="Strona główna" />
      <section className="cards">
        <TotalCard />
        <ExpenseCard variant="default" />
        <IncomeCard variant="default" />
      </section>
      <TransactionSection title="transakcje" type="all" />
      <AddTransactionLink>
        <AddButton />
      </AddTransactionLink>
    </>
  );
};
