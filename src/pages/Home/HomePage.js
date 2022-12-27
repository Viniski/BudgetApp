import { Link } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import TotalCard from "../../component/TotalCard/TotalCard";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import AddButton from "../../component/AddButton/AddButton";
import Header from "../../component/Header/Header";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";

function HomePage() {
  useWebsiteTitle('BudgetApp by Viniski')

  return (
    <>
      <Header page="home" title="Strona główna" />
      <section className="totalSection">
        <TotalCard />
        <ExpenseCard />
        <IncomeCard />
      </section>
      <section className="transactionSection">
        <TransactionSectionHeader title="Ostatnie transakcje" />
        <TransactionCard transactionType="income" />
        <TransactionCard transactionType="income" />
        <TransactionCard transactionType="expense" />
      </section>
      <Link to="/dodaj-transakcje">
        <AddButton />
      </Link>
    </>
  );
}

export default HomePage;
