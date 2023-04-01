import { Input } from "../../UI/Inputs/Input";
import { CheckboxCategoryInput } from "../../UI/Inputs/CheckboxCategoryInput";
import { ActiveFilterCriteria } from "./ActiveFilterCriteria";
import { FilterButton } from "../../UI/Buttons/FilterButton";
import { CloseFilterButton } from "../../UI/Buttons/CloseFilterButton";
import { Params, useFilterSection } from "./useFilterSection";

type Props = {
  criteria: Params;
  title: string;
  type: string;
  isDarkTheme: boolean;
};

export function FilterSection({ type, title, criteria, isDarkTheme }: Props) {
  const {
    minAmount,
    setMinAmount,
    maxAmount,
    setMaxAmount,
    today,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedCategory,
    changeCheckboxInput,
    handleFilterButton,
    filterSectionState,
    toogleFilterButton,
    objectToFilter,
    deleteFilterCriteria,
  } = useFilterSection();

  return (
    <>
      <div className="transaction-section__title">
        <h3>{`Twoje transakcje`}</h3>
      </div>
      <div className="transaction-section__filterButton">
        {filterSectionState.isFormActive ? (
          <CloseFilterButton
            onClick={toogleFilterButton}
            isDarkTheme={isDarkTheme}
          />
        ) : (
          <FilterButton
            onClick={toogleFilterButton}
            isDarkTheme={isDarkTheme}
          />
        )}
      </div>
      {filterSectionState.isFormActive && (
        <section className="inputs-filter">
          <Input
            type="number"
            placeholder="Kwota minimalna"
            value={minAmount}
            onChange={setMinAmount}
            variant="filter"
          />
          <Input
            type="number"
            placeholder="Kwota maksymalna"
            value={maxAmount}
            onChange={setMaxAmount}
            variant="filter"
          />
          <label className="inputs-filter__labelDate">Okres od:</label>
          <Input
            type="date"
            max={today}
            value={startDate}
            onChange={setStartDate}
            variant="filter"
          />
          <label className="inputs-filter__labelDate">Okres do:</label>
          <Input
            type="date"
            max={today}
            value={endDate}
            onChange={setEndDate}
            variant="filter"
          />
          <CheckboxCategoryInput
            value={selectedCategory}
            onChange={changeCheckboxInput}
            type={type}
            variant="inputs-filter__label"
          />
          <button
            onClick={() => handleFilterButton(objectToFilter)}
            className="button-options"
          >{`Filtruj ${title}`}</button>
        </section>
      )}
      <ActiveFilterCriteria
        type={type}
        criteria={criteria}
        onFilter={deleteFilterCriteria}
        isDarkTheme={isDarkTheme}
      />
    </>
  );
}
