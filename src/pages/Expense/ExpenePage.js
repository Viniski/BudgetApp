import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";
import AddButton from "../../component/AddButton/AddButton";

function ExpensePage() {
  const transactions = useSelector((state) => state.transactions);
  console.log(transactions)
  const expenseTransactions = transactions.filter(
    (el) => el.type === "expense"
  );
  useWebsiteTitle("Wydatki | BudgetApp by Viniski");

  return (
    <>
      <Header title="Wydatki" />
      <section className="cards">
        <ExpenseCard className="cards__expense--main-card" />
      </section>
      <section className="transaction-section">
        <TransactionSectionHeader type="wydatki" />
        {expenseTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
        {!expenseTransactions.length && "Nie masz żadnych transakcji"}
      </section>
      <Link to="/dodaj-wydatek">
        <AddButton />
      </Link>
    </>
  );
}

export default ExpensePage;
