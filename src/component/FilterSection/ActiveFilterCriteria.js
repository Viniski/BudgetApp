import { useState } from "react";
import { formatDate } from "../../helpers/formatDate";

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

  const handleFilterCriteriaButtons = (para) => {
    //tu będę miał znów miał kryteria i przekazywał je go głównego komponentu
  };

  const handleDeleteFilterCriteriaButton = (para) => {
    //tu będę miał znów miał kryteria i przekazywał je go głównego komponentu
  };

  return (
    <section>
      {minAmount && (
        <button
          onClick={() => console.log("hello")}
          className="button-options"
        >{`Od: ${minAmount} PLN`}</button>
      )}

      {maxAmount && (
        <button
          onClick={() => console.log("hello")}
          className="button-options"
        >{`Do: ${maxAmount} PLN`}</button>
      )}

      {startDate && (
        <button
          onClick={() => console.log("hello")}
          className="button-options"
        >{`Od: ${startDate}`}</button>
      )}

      {endDate && (
        <button
          onClick={() => console.log("hello")}
          className="button-options"
        >{`Do: ${endDate}`}</button>
      )}

      {isCategoryButtonIsActive() && (
        <button
          onClick={() => console.log("hello")}
          className="button-options"
        >{`Kategorie: ${selectedCategory.length}`}</button>
      )}
    </section>
  );
}

export default ActiveFilterCriteria;
