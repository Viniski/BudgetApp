import { Link } from "react-router-dom";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";
import { IncomeCard } from "../../component/TotalCards/IncomeCard";
import { AddButton } from "../../component/Buttons/AddButton";
import { TransactionSection } from "../../component/TransactionsSection/TransactionsSection";

export function IncomePage() {
  useWebsiteTitle("Dochody | BudgetApp by Viniski");
  return (
    <>
      <Header title="Przychody" />
      <section className="cards">
        <IncomeCard className="cards__income--main-card" />
      </section>
      <TransactionSection type="income" title="wpływy" />
      <Link to="/dodaj-dochód">
        <AddButton />
      </Link>
    </>
  );
}
