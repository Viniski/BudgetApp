import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../components/Header/Header";
import { ExpenseCard } from "../../components/TotalCards/ExpenseCard/ExpenseCard";
import { AddButton } from "../../components/UI/Buttons/AddButton";
import { TransactionSection } from "../../components/TransactionsSection/TransactionsSection";
import { AddTransactionLink } from "../../navigation/components/AddTransactionLink/AddTransactionLink";

export function ExpensePage() {
  useWebsiteTitle("Wydatki | BudgetApp by Viniski");

  return (
    <>
      <Header title="Wydatki" />
      <section className="cards">
        <ExpenseCard variant="main" />
      </section>
      <TransactionSection type="expense" title="wydatki" />
      <AddTransactionLink>
        <AddButton />
      </AddTransactionLink>
    </>
  );
}
