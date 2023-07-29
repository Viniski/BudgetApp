import { CloseFilterButton } from '@/components/ui/buttons/close-filter-button';
import { FilterButton } from '@/components/ui/buttons/filter-button';
import { CheckboxCategoryInput } from '@/components/ui/inputs/checkbox-category-input';
import { Input } from '@/components/ui/inputs/input';
import { Params } from '@/helpers/global-types';
import { ActiveFilterCriteria } from './active-filter-criteria';
import { useFilterSection } from './use-filter-section';

type Props = {
  criteria: Params;
  title: string;
  type: string;
  isDarkTheme: boolean;
};

export const FilterSection = ({ type, title, criteria, isDarkTheme }: Props) => {
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
        <h3>Twoje transakcje</h3>
      </div>
      <div className="transaction-section__filterButton">
        {filterSectionState.isFormActive ? (
          <CloseFilterButton isDarkTheme={isDarkTheme} onClick={toogleFilterButton} />
        ) : (
          <FilterButton isDarkTheme={isDarkTheme} onClick={toogleFilterButton} />
        )}
      </div>
      {filterSectionState.isFormActive && (
        <section className="inputs-filter">
          <Input
            placeholder="Kwota minimalna"
            type="number"
            value={minAmount}
            variant="filter"
            onChange={() => setMinAmount}
          />
          <Input
            placeholder="Kwota maksymalna"
            type="number"
            value={maxAmount}
            variant="filter"
            onChange={() => setMaxAmount}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="inputs-filter__labelDate" htmlFor="startDate">
            Okres od:
          </label>
          <Input
            id="startDate"
            max={today}
            type="date"
            value={startDate}
            variant="filter"
            onChange={() => setStartDate}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="inputs-filter__labelDate" htmlFor="endDate">
            Okres do:
          </label>
          <Input id="endDate" max={today} type="date" value={endDate} variant="filter" onChange={() => setEndDate} />
          <CheckboxCategoryInput
            type={type}
            value={selectedCategory}
            variant="inputs-filter__label"
            onChange={changeCheckboxInput}
          />
          <button
            className="button-options"
            type="button"
            onClick={() => handleFilterButton(objectToFilter)}
          >{`Filtruj ${title}`}</button>
        </section>
      )}
      <ActiveFilterCriteria criteria={criteria} isDarkTheme={isDarkTheme} type={type} onFilter={deleteFilterCriteria} />
    </>
  );
};
