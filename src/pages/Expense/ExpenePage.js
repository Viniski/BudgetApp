import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";
import { ExpenseCard } from "../../component/TotalCards/ExpenseCard/ExpenseCard";
import { AddButton } from "../../UI/Buttons/AddButton";
import { TransactionSection } from "../../component/TransactionsSection/TransactionsSection";
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
