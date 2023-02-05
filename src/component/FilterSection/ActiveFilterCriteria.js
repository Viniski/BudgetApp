import CloseFilterButton from "../Buttons/CloseFilterButton";

function ActiveFilterCriteria({ criteria, onFilter, type, themeDark }) {
  console.log(criteria);
  const maxAmount = criteria.maxAmount;
  const minAmount = criteria.minAmount;
  const endDate = criteria.endDate;
  const startDate = criteria.startDate;
  const selectedCategory = criteria.selectedCategory;

  const isCategoryButtonIsActive = () => {
    const categoryNumber = type === "all" ? 7 : type === "expense" ? 5 : 3;
    return selectedCategory.length !== categoryNumber;
  };

  const handleDeleteFilterCriteriaButton = (criteria) => {
    onFilter(criteria);
  };

  return (
    <section>
      {minAmount && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              themeDark &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Od: ${minAmount} PLN
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              themeDark && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("minAmount")}
          />
        </div>
      )}

      {maxAmount && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              themeDark &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Do: ${maxAmount} PLN
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              themeDark && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("maxAmount")}
          />
        </div>
      )}

      {startDate && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              themeDark &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Od: ${startDate}
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              themeDark && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("startDate")}
          />
        </div>
      )}

      {endDate && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              themeDark &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Do: ${endDate}
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              themeDark && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("endDate")}
          />
        </div>
      )}

      {isCategoryButtonIsActive() && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              themeDark &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Kategorie: ${selectedCategory.length}
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              themeDark && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("selectedCategory")}
          />
        </div>
      )}
    </section>
  );
}

export default ActiveFilterCriteria;
