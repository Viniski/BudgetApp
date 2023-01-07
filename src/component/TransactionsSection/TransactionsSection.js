import { useState } from "react";
import { useSelector } from "react-redux";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import FilterSection from "../FilterSection/FilterSection";
import FilterButton from "../Buttons/FilterButton";
import CloseFilterButton from "../Buttons/CloseFilterButton";
import Pagination from "../../component/Pagination/Pagination";

function TransactionSection({ type }) {
  console.log(type);
  let transactions = useSelector((state) => state.transactions);
  // filtrowanie
  //
  //
  // ...
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  const [isClicked, setIsClicked] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = currentPage * 5 - 1;
  
  let transactionOnPage = transactions.slice(startIndex, endIndex + 1);

  //jednak ten scope tu działa, że zmienia mi też wartość w zakresie globalnym a nie tylko w zakresie lokalnym :) 
  //myślałem, że tak nie będzie bo jest zakres blokowy 
  //Mam wrażenie, że dalej tego nie umiem xDD 
  //ale działa wszytsko ładnie :)
  if (type === "expense") {
    transactions = transactions.filter(
      (el) => el.type === "expense"
    );

    transactionOnPage = transactions.slice(
      startIndex,
      endIndex + 1
    );
  }
  if (type === "income") {
    transactions = transactions.filter(
      (el) => el.type === "income"
    );
    transactionOnPage = transactions.slice(
      startIndex,
      endIndex + 1
    );
  }

  const handleFilterButton = () => {
    setIsClicked(!isClicked);
  };

  const paginate = (number) => setCurrentPage(number);

  return (
    <>
      <section className="transaction-section">
        <div className="transaction-section__header">
          <h3>{`Twoje transakcje`}</h3>
          <FilterButton
            onClick={handleFilterButton}
            className={
              isClicked
                ? `transaction-section__button-filter--disactive`
                : `transaction-section__button-filter ${
                    themeDark && `transaction-section__button-filter--dark`
                  }`
            }
          />
          <CloseFilterButton
            onClick={handleFilterButton}
            className={
              isClicked
                ? `transaction-section__button-filter ${
                    themeDark && `transaction-section__button-filter--dark`
                  }`
                : `transaction-section__button-filter--disactive`
            }
          />
          {isClicked && <FilterSection type="expense" title="wydatki" />}
        </div>
        {transactionOnPage.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
        {!transactions.length && "Nie masz żadnych transakcji"}
      </section>
      <Pagination
        cardNumber={transactions.length}
        perPage={5}
        paginate={paginate}
      />
    </>
  );
}

export default TransactionSection;
