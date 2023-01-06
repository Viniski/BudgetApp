import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";
import AddButton from "../../component/AddButton/AddButton";

function IncomePage() {
  const transactions = useSelector((state) => state.transactions);
  const incomeTransactions = transactions.filter((el) => el.type === "income");
  useWebsiteTitle("Dochody | BudgetApp by Viniski");
  return (
    <>
      <Header title="Dochody" />
      <section className="cards">
        <IncomeCard className="cards__income--main-card" />
      </section>
      <section className="transaction-section">
        <TransactionSectionHeader type="dochody" />
        {incomeTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
        {!incomeTransactions.length && "Nie masz żadnych transakcji"}
      </section>
      <Link to="/dodaj-dochód">
        <AddButton />
      </Link>
    </>
  );
}

export default IncomePage;
