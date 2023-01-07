import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";
import Pagination from "../../component/Pagination/Pagination";
import AddButton from "../../component/AddButton/AddButton";

function IncomePage() {
  const transactions = useSelector((state) => state.transactions);
  const incomeTransactions = transactions.filter((el) => el.type === "income");

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage-1)*5;
  const endIndex = (currentPage*5)-1;
  const transactionOnPage = incomeTransactions.slice(startIndex, endIndex+1); 

  const paginate = (number) => setCurrentPage(number);

  useWebsiteTitle("Dochody | BudgetApp by Viniski");
  return (
    <>
      <Header title="Dochody" />
      <section className="cards">
        <IncomeCard className="cards__income--main-card" />
      </section>
      <section className="transaction-section">
        <TransactionSectionHeader type="dochody" />
        {transactionOnPage.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
        {!incomeTransactions.length && "Nie masz żadnych transakcji"}
        <Pagination cardNumber={incomeTransactions.length} perPage={5} paginate={paginate} />
      </section>
      <Link to="/dodaj-dochód">
        <AddButton />
      </Link>
    </>
  );
}

export default IncomePage;
