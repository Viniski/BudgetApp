import CloseFilterButton from "../Buttons/CloseFilterButton";

function ActiveFilterCriteria({ criteria, onFilter, type, themeDark }) {
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
            onClick={handleDeleteFilterCriteriaButton}
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
            onClick={handleDeleteFilterCriteriaButton}
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
            onClick={handleDeleteFilterCriteriaButton}
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
            onClick={handleDeleteFilterCriteriaButton}
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
            onClick={handleDeleteFilterCriteriaButton}
          />
        </div>
      )}
    </section>
  );
}

export default ActiveFilterCriteria;
