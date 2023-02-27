import { Link } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TotalCard from "../../component/TotalCards/TotalCard";
import ExpenseCard from "../../component/TotalCards/ExpenseCard";
import IncomeCard from "../../component/TotalCards/IncomeCard";
import AddButton from "../../component/Buttons/AddButton";
import Header from "../../component/Header/Header";
import TransactionSection from "../../component/TransactionsSection/TransactionsSection";

function HomePage() {
  useWebsiteTitle("BudgetApp by Viniski");

  return (
    <>
      <Header page="home" title="Strona główna" />
      <section className="cards">
        <TotalCard />
        <ExpenseCard />
        <IncomeCard />
      </section>
        <TransactionSection type="all"/>
      <Link to="/dodaj-transakcje">
        <AddButton />
      </Link>
    </>
  );
}

export default HomePage;
