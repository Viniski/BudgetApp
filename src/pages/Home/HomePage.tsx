import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { TotalCard } from "../../components/TotalCards/TotalCard/TotalCard";
import { ExpenseCard } from "../../components/TotalCards/ExpenseCard/ExpenseCard";
import { IncomeCard } from "../../components/TotalCards/IncomeCard/IncomeCard";
import { AddButton } from "../../components/UI/Buttons/AddButton";
import { Header } from "../../components/Header/Header";
import { TransactionSection } from "../../components/TransactionsSection/TransactionsSection";
import { AddTransactionLink } from "../../navigation/components/AddTransactionLink/AddTransactionLink";

export function HomePage() {
  useWebsiteTitle("BudgetApp by Viniski");

  return (
    <>
      <Header title="Strona główna" />
      <section className="cards">
        <TotalCard />
        <ExpenseCard variant="default" />
        <IncomeCard variant="default" />
      </section>
      <TransactionSection type="all" title="transakcje" />
      <AddTransactionLink>
        <AddButton />
      </AddTransactionLink>
    </>
  );
}
