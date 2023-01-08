import { Link } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TotalCard from "../../component/TotalCard/TotalCard";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import AddButton from "../../component/AddButton/AddButton";
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
