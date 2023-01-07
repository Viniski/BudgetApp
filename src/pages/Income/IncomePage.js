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
import TransactionSection from "../../component/TransactionsSection/TransactionsSection";

function IncomePage() {
  // const incomeTransactions = transactions.filter((el) => el.type === "income");

  // const transactionOnPage = incomeTransactions.slice(startIndex, endIndex+1); 

  useWebsiteTitle("Dochody | BudgetApp by Viniski");
  return (
    <>
      <Header title="Dochody" />
      <section className="cards">
        <IncomeCard className="cards__income--main-card" />
      </section>
      <TransactionSection type="income"/>
      {/* <section className="transaction-section">
        <TransactionSectionHeader type="dochody" />
        {transactionOnPage.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
        {!incomeTransactions.length && "Nie masz żadnych transakcji"}
        <Pagination cardNumber={incomeTransactions.length} perPage={5} paginate={paginate} />
      </section> */}
      <Link to="/dodaj-dochód">
        <AddButton />
      </Link>
    </>
  );
}

export default IncomePage;
