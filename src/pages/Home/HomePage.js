import { useState } from "react";
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
import Pagination from "../../component/Pagination/Pagination";

function HomePage() {
  const transactions = useSelector((state) => state.transactions);
  // filtrowanie
  // ...
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage-1)*5;
  const endIndex = (currentPage*5)-1;
  const transactionOnPage = transactions.slice(startIndex, endIndex+1); 

  const paginate = (number) => setCurrentPage(number);

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
        <TransactionSectionHeader type="transakcje" />
        {transactionOnPage.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
        {!transactions.length && "Nie masz żadnych transakcji"}
      </section>
      <Pagination cardNumber={transactions.length} perPage={5} paginate={paginate}/>
      <Link to="/dodaj-transakcje">
        <AddButton />
      </Link>
    </>
  );
}

export default HomePage;





  