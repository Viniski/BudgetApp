import { useState } from "react";
import { useSelector } from "react-redux";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import FilterSection from "../FilterSection/FilterSection";
import FilterButton from "../Buttons/FilterButton";
import CloseFilterButton from "../Buttons/CloseFilterButton";
import Pagination from "../../component/Pagination/Pagination";

function TransactionSection({ type }) {
  let stateTransactions = useSelector((state) => state.transactions);

  const getTransactions = () => {
    //why with arg - undefined?
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

  const [transactions, setTransactions] = useState(getTransactions());

  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";

  const [isClicked, setIsClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage - 1;
  let transactionOnPage = transactions.slice(startIndex, endIndex + 1);

  const handleFilterButton = () => {
    setIsClicked(!isClicked);
  };

  const getCategoryToDelete = (selectedCategory) => {
    let arrayAllCategories = [
      "Dochód stały",
      "Dochód dodatkowy",
      "Koszty stałe",
      "Jedzenie",
      "Transport",
      "Rozrywka",
      "Inne",
    ];

    for (let i = 0; i < selectedCategory.length; i++) {
      arrayAllCategories = arrayAllCategories.filter(
        (element) => element !== selectedCategory[i]
      );
    }

    return [...arrayAllCategories];
  };

  const handleFilter = (parameters) => {
    const minAmount = parameters.minAmount;
    const maxAmount = parameters.maxAmount;
    const endDate = parameters.endDate;
    const startDate = parameters.startDate;
    const selectedCategory = parameters.selectedCategory;
    let newTransactions = getTransactions();
    console.log("start", newTransactions);

    if (minAmount) {
      newTransactions = newTransactions.filter(
        (el) => Number(el.amount) >= Number(minAmount)
      );
    }

    if (maxAmount) {
      newTransactions = newTransactions.filter(
        (el) => Number(el.amount) <= Number(maxAmount)
      );
    }

    if (endDate) {
      newTransactions = newTransactions.filter(
        (el) => new Date(el.date) <= new Date(endDate)
      );
    }

    if (startDate) {
      newTransactions = newTransactions.filter(
        (el) => new Date(el.date) >= new Date(startDate)
      );
    }

    let arrayCategoryToDelete = getCategoryToDelete(selectedCategory);

    for (let i = 0; i < arrayCategoryToDelete.length; i++) {
      newTransactions = newTransactions.filter(
        (element) => element.category !== arrayCategoryToDelete[i]
      );
    }

    console.log("end", newTransactions);
    setTransactions(newTransactions);
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
          {isClicked && (
            <FilterSection
              type={type}
              title="wydatki"
              onFilter={handleFilter}
            />
          )}
        </div>
        {transactionOnPage.map((transaction) => (
          <TransactionCard key={transaction.id} data={transaction} />
        ))}
        {!transactions.length &&
          "Nie masz żadnych transakcji LUB brak transakcji dla podanych kryteriów "}
      </section>
      <Pagination
        cardNumber={transactions.length}
        perPage={perPage}
        paginate={paginate}
      />
    </>
  );
}

export default TransactionSection;
