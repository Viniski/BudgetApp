import { Header } from '@/components/header/header-dupa';
import { useWebsiteTitle } from '@/hooks/use-webstite-title';
import { AddExpenseLink } from '@/navigation/components/add-transaction-link/add-expense-link';
import { AddIncomeLink } from '@/navigation/components/add-transaction-link/add-income-link';

export const SelectAddTypePage = () => {
  useWebsiteTitle('Dodaj transakcje | BudgetApp by Viniski');

  return (
    <>
      <Header title="Dodaj transakcje" />
      <div className="select-container">
        <AddIncomeLink>
          <button aria-label="Dodaj przychód" className="button-options" type="button">
            Dodaj przychód
          </button>
        </AddIncomeLink>
        <AddExpenseLink>
          <button aria-label="Dodaj wydatek" className="button-options" type="button">
            Dodaj wydatek
          </button>
        </AddExpenseLink>
      </div>
    </>
  );
};
