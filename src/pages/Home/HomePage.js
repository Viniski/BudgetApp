import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import TotalCard from "../../component/TotalCard/TotalCard";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import AddButton from "../../component/AddButton/AddButton";
import Header from "../../component/Header/Header";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";

function HomePage() {
  const transactions = useSelector((state) => state.transactions);
  console.log(transactions);
  useWebsiteTitle("BudgetApp by Viniski");

  return (
    <>
      <Header page="home" title="Strona główna" />
      <section className="cards">
        <TotalCard />
        <ExpenseCard />
        <IncomeCard />
      </section>
      <section className="transaction-section">
        <TransactionSectionHeader
          title="Ostatnie transakcje"
          type="transakcje"
        />
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
      </section>
      <Link to="/dodaj-transakcje">
        <AddButton />
      </Link>
    </>
  );
}

export default HomePage;
