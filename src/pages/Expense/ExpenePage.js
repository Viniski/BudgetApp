import { Link } from "react-router-dom";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";
import { ExpenseCard } from "../../component/TotalCards/ExpenseCard";
import { AddButton } from "../../component/Buttons/AddButton";
import { TransactionSection } from "../../component/TransactionsSection/TransactionsSection";

export function ExpensePage() {
  useWebsiteTitle("Wydatki | BudgetApp by Viniski");

  return (
    <>
      <Header title="Wydatki" />
      <section className="cards">
        <ExpenseCard className="cards__expense--main-card" />
      </section>
      <TransactionSection type="expense" title="wydatki" />
      <Link to="/dodaj-wydatek">
        <AddButton />
      </Link>
    </>
  );
}
