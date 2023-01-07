import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";
import Pagination from "../../component/Pagination/Pagination";
import AddButton from "../../component/AddButton/AddButton";

function ExpensePage() {
  const transactions = useSelector((state) => state.transactions);
  console.log(transactions)
  const expenseTransactions = transactions.filter(
    (el) => el.type === "expense"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage-1)*5;
  const endIndex = (currentPage*5)-1;
  const transactionOnPage = expenseTransactions.slice(startIndex, endIndex+1); 

  const paginate = (number) => setCurrentPage(number);

  useWebsiteTitle("Wydatki | BudgetApp by Viniski");

  return (
    <>
      <Header title="Wydatki" />
      <section className="cards">
        <ExpenseCard className="cards__expense--main-card" />
      </section>
      <section className="transaction-section">
        <TransactionSectionHeader type="wydatki" />
        {transactionOnPage.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
        {!expenseTransactions.length && "Nie masz żadnych transakcji"}
          <Pagination cardNumber={expenseTransactions.length} perPage={5} paginate={paginate}/>
      </section>
      <Link to="/dodaj-wydatek">
        <AddButton />
      </Link>
    </>
  );
}

export default ExpensePage;
