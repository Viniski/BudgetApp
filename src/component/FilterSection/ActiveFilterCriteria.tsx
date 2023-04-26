import { DeleteActiveCriteriaButton } from "../../UI/Buttons/DeleteActiveCriteriaButton";
import type { Params } from "./useFilterSection";

type Props = {
  criteria: Params;
  onFilter: (criteria: string) => void;
  type: string;
  isDarkTheme: boolean;
};

export function ActiveFilterCriteria({
  criteria,
  onFilter,
  type,
  isDarkTheme,
}: Props) {
  const { maxAmount, minAmount, endDate, startDate, selectedCategory } =
    criteria;

  const isCategoryButtonIsActive = () => {
    return selectedCategory.length ? true : false;
  };

  const handleDeleteFilterCriteriaButton = (criteria: string) => {
    onFilter(criteria);
  };

  const numberOfAllCategory = 7;
  const numberOfExpenseCategory = 5;
  const numberOfIncomeCategory = 3;

  const categoryNumber =
    type === "all"
      ? numberOfAllCategory - selectedCategory.length
      : type === "expense"
      ? numberOfExpenseCategory - selectedCategory.length
      : numberOfIncomeCategory - selectedCategory.length;

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
          <DeleteActiveCriteriaButton
            onClick={() => handleDeleteFilterCriteriaButton("minAmount")}
            isDarkTheme={isDarkTheme}
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
          <DeleteActiveCriteriaButton
            onClick={() => handleDeleteFilterCriteriaButton("maxAmount")}
            isDarkTheme={isDarkTheme}
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
          <DeleteActiveCriteriaButton
            onClick={() => handleDeleteFilterCriteriaButton("startDate")}
            isDarkTheme={isDarkTheme}
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
          <DeleteActiveCriteriaButton
            onClick={() => handleDeleteFilterCriteriaButton("endDate")}
            isDarkTheme={isDarkTheme}
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
          <DeleteActiveCriteriaButton
            onClick={() => handleDeleteFilterCriteriaButton("selectedCategory")}
            isDarkTheme={isDarkTheme}
          />
        </div>
      )}
    </section>
  );
}
