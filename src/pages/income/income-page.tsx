import { Header } from '@/components/header/header-dupa';
import { IncomeCard } from '@/components/total-cards/income-card/income-card';
import { TransactionSection } from '@/components/transactions-section/transactions-section';
import { AddButton } from '@/components/ui/buttons/add-button';
import { useWebsiteTitle } from '@/hooks/use-webstite-title';
import { AddTransactionLink } from '@/navigation/components/add-transaction-link/add-transaction-link';

export const IncomePage = () => {
  useWebsiteTitle('Dochody | BudgetApp by Viniski');

  return (
    <>
      <Header title="Przychody" />
      <section className="cards">
        <IncomeCard variant="main" />
      </section>
      <TransactionSection title="wpływy" type="income" />
      <AddTransactionLink>
        <AddButton />
      </AddTransactionLink>
    </>
  );
};
