import { useState } from "react";
import { formatDate } from "../../helpers/formatDate";
import CloseFilterButton from "../Buttons/CloseFilterButton";

function ActiveFilterCriteria({ criteria, onFilter, type }) {
  const maxAmount = criteria.maxAmount;
  const minAmount = criteria.minAmount;
  const endDate = criteria.endDate;
  const startDate = criteria.startDate;
  //selectedCategory będzie trudniejsze
  const selectedCategory = criteria.selectedCategory;

  const isCategoryButtonIsActive = () => {
    const categoryNumber = type === "all" ? 7 : type === "expense" ? 5 : 3;
    return selectedCategory.length !== categoryNumber;
  };

  const handleDeleteFilterCriteriaButton = (para) => {
    console.log("hej, usuwam Cię");
    //tu będę miał znów miał kryteria i przekazywał je go głównego komponentu
  };

  return (
    <section>
      {minAmount && (
        <div className="transaction-section__active-criteria">
          <p>Od: ${minAmount} PLN</p>
          <CloseFilterButton
            className="card__button-trash"
            onClick={handleDeleteFilterCriteriaButton}
          />
        </div>
      )}

      {maxAmount && (
        <div className="transaction-section__active-criteria">
          <p>Do: ${maxAmount} PLN</p>
          <CloseFilterButton
            className="card__button-trash"
            onClick={handleDeleteFilterCriteriaButton}
          />
        </div>
      )}

      {startDate && (
        <div className="transaction-section__active-criteria">
          <p>Od: ${startDate}</p>
          <CloseFilterButton
            className="card__button-trash"
            onClick={handleDeleteFilterCriteriaButton}
          />
        </div>
      )}

      {endDate && (
        <div className="transaction-section__active-criteria">
          <p>Do: ${endDate}</p>
          <CloseFilterButton
            className="card__button-trash"
            onClick={handleDeleteFilterCriteriaButton}
          />
        </div>
      )}

      {isCategoryButtonIsActive() && (
        <div className="transaction-section__active-criteria">
          <p>Kategorie: ${selectedCategory.length}</p>
          <CloseFilterButton
            className="card__button-trash"
            onClick={handleDeleteFilterCriteriaButton}
          />
        </div>
      )}
    </section>
  );
}

export default ActiveFilterCriteria;
