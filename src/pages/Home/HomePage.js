import { Link } from "react-router-dom";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { TotalCard } from "../../component/TotalCards/TotalCard";
import { ExpenseCard } from "../../component/TotalCards/ExpenseCard";
import { IncomeCard } from "../../component/TotalCards/IncomeCard";
import { AddButton } from "../../UI/Buttons/AddButton";
import { Header } from "../../component/Header/Header";
import { TransactionSection } from "../../component/TransactionsSection/TransactionsSection";

export function HomePage() {
  useWebsiteTitle("BudgetApp by Viniski");

  return (
    <>
      <Header title="Strona główna" />
      <section className="cards">
        <TotalCard />
        <ExpenseCard />
        <IncomeCard />
      </section>
      <TransactionSection type="all" title="transakcje" />
      <Link to="/dodaj-transakcje">
        <AddButton />
      </Link>
    </>
  );
}
