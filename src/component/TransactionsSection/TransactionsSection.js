import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import FilterSection from "../FilterSection/FilterSection";
import Pagination from "../../component/Pagination/Pagination";

import { useGetFilteredTransaction } from "../../hooks/useGetFilteredTransaction";

function TransactionSection({ type }) {
  const navigate = useNavigate();
  //let typeURL = 


  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";

  const [searchParams] = useSearchParams();

  const getParamsToFilterFromURL = () => {
    const objectParams = {
      minAmount: searchParams.get("min"),
      maxAmount: searchParams.get("max"),
      endDate: searchParams.get("do"),
      startDate: searchParams.get("od"),
      selectedCategory: searchParams.get("delete_category")?.split(',') || [],
    }

    console.log(objectParams);

    return objectParams;
  };

  //?strona=1&min=20&max=3400&od=2005-05-12&do=2023-05-12&delete_category=Dochód stały,Dochód dodatkowy
  let stateTransactions = useSelector((state) => state.transactions);
  const getTransactions = () => {
    if (type === "expense") {
      stateTransactions = stateTransactions.filter(
        (el) => el.type === "expense"
      );
    }

    if (type === "income") {
      stateTransactions = stateTransactions.filter(
        (el) => el.type === "income"
      );
    }

    return stateTransactions;
  };

  const stateTransaction = getTransactions();

  const transactions = useGetFilteredTransaction(stateTransaction, getParamsToFilterFromURL());

  const currentPage = (searchParams.get("strona") || 1);
  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage - 1;
  let transactionOnPage = transactions.slice(startIndex, endIndex + 1);

  const paginate = (number) => {
    //dochody, wydatki...
    // navigate(?min=20&max=8400&od=2005-05-12&do=2023-05-12&delete_category=Dochód%20stały,Dochód%20dodatkowy)
  };

  return (
    <section className="transaction-section">
      <div className="transaction-section__header">
        <h3>{`Twoje transakcje`}</h3>
        <FilterSection
          type={type}
          title="wydatki"
          themeDark={themeDark}
        />
      </div>
      {transactionOnPage.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          data={transaction}
          themeDark={themeDark}
        />
      ))}
      {!transactions.length && (
        <p
          className={`transaction-section__paragraph ${
            themeDark && `transaction-section__paragraph--dark`
          }`}
        >
          Brak transakcji
        </p>
      )}
      <Pagination
        cardNumber={transactions.length}
        perPage={perPage}
        paginate={paginate}
        themeDark={themeDark}
      />
    </section>
  );
}

export default TransactionSection;
