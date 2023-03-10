import { CloseFilterButton } from "../Buttons/CloseFilterButton";

export function ActiveFilterCriteria({
  criteria,
  onFilter,
  type,
  isDarkTheme,
}) {
  const { maxAmount } = criteria;
  const { minAmount } = criteria;
  const { endDate } = criteria;
  const { startDate } = criteria;
  const { selectedCategory } = criteria;

  const isCategoryButtonIsActive = () => {
    return selectedCategory.length ? true : false;
  };

  const handleDeleteFilterCriteriaButton = (criteria) => {
    onFilter(criteria);
  };

  const categoryNumber =
    type === "all"
      ? 7 - selectedCategory.length
      : type === "expense"
      ? 5 - selectedCategory.length
      : 3 - selectedCategory.length;

  return (
    <section>
      {minAmount && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              isDarkTheme &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Kwota minimalna: {minAmount} PLN
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              isDarkTheme && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("minAmount")}
          />
        </div>
      )}

      {maxAmount && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              isDarkTheme &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Kwota maksymalna: {maxAmount} PLN
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              isDarkTheme && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("maxAmount")}
          />
        </div>
      )}

      {startDate && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              isDarkTheme &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Okres od: {startDate}
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              isDarkTheme && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("startDate")}
          />
        </div>
      )}

      {endDate && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              isDarkTheme &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Okres do: {endDate}
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              isDarkTheme && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("endDate")}
          />
        </div>
      )}

      {isCategoryButtonIsActive() && (
        <div className="transaction-section__active-criteria">
          <p
            className={`transaction-section__active-criteria-paragraph ${
              isDarkTheme &&
              `transaction-section__active-criteria-paragraph--dark`
            }`}
          >
            Liczba kategorii: {categoryNumber}
          </p>
          <CloseFilterButton
            className={`transaction-section__button-delete-criteria ${
              isDarkTheme && `transaction-section__button-delete-criteria--dark`
            }`}
            onClick={() => handleDeleteFilterCriteriaButton("selectedCategory")}
          />
        </div>
      )}
    </section>
  );
}
