import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../components/Header/Header";
import { AddIncomeLink } from "../../navigation/components/AddTransactionLink/AddIncomeLink";
import { AddExpenseLink } from "../../navigation/components/AddTransactionLink/AddExpenseLink";

export function SelectAddTypePage() {
  useWebsiteTitle("Dodaj transakcje | BudgetApp by Viniski");
  return (
    <>
      <Header title="Dodaj transakcje" />
      <div className="select-container">
        <AddIncomeLink>
          <button className="button-options">Dodaj przychód</button>
        </AddIncomeLink>
        <AddExpenseLink>
          <button className="button-options">Dodaj wydatek</button>
        </AddExpenseLink>
      </div>
    </>
  );
}
