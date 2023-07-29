import { clsx } from 'clsx';
import { DeleteActiveCriteriaButton } from '@/components/ui/buttons/delete-active-criteria-button';
import { Params } from '@/helpers/global-types';

type Props = {
  criteria: Params;
  onFilter: (criteria: string) => void;
  type: string;
  isDarkTheme: boolean;
};

const numberOfAllCategory = 7;
const numberOfExpenseCategory = 5;
const numberOfIncomeCategory = 3;

export const ActiveFilterCriteria = ({ criteria, onFilter, type, isDarkTheme }: Props) => {
  const { maxAmount, minAmount, endDate, startDate, selectedCategory } = criteria;

  const isCategoryButtonActive = () => Boolean(selectedCategory.length);

  const handleDeleteFilterCriteriaButton = (filterCriteria: string) => {
    onFilter(filterCriteria);
  };

  let categoryNumber;

  if (type === 'all') {
    categoryNumber = numberOfAllCategory - selectedCategory.length;
  } else if (type === 'expense') {
    categoryNumber = numberOfExpenseCategory - selectedCategory.length;
  } else {
    categoryNumber = numberOfIncomeCategory - selectedCategory.length;
  }

  return (
    <section>
      {minAmount && (
        <div className="transaction-section__active-criteria">
          <p
            className={clsx(
              'transaction-section__active-criteria-paragraph',
              isDarkTheme && 'transaction-section__active-criteria-paragraph--dark',
            )}
          >
            Kwota minimalna: {minAmount} PLN
          </p>
          <DeleteActiveCriteriaButton
            isDarkTheme={isDarkTheme}
            onClick={() => handleDeleteFilterCriteriaButton('minAmount')}
          />
        </div>
      )}

      {maxAmount && (
        <div className="transaction-section__active-criteria">
          <p
            className={clsx(
              'transaction-section__active-criteria-paragraph',
              isDarkTheme && 'transaction-section__active-criteria-paragraph--dark',
            )}
          >
            Kwota maksymalna: {maxAmount} PLN
          </p>
          <DeleteActiveCriteriaButton
            isDarkTheme={isDarkTheme}
            onClick={() => handleDeleteFilterCriteriaButton('maxAmount')}
          />
        </div>
      )}

      {startDate && (
        <div className="transaction-section__active-criteria">
          <p
            className={clsx(
              'transaction-section__active-criteria-paragraph',
              isDarkTheme && 'transaction-section__active-criteria-paragraph--dark',
            )}
          >
            Okres od: {startDate}
          </p>
          <DeleteActiveCriteriaButton
            isDarkTheme={isDarkTheme}
            onClick={() => handleDeleteFilterCriteriaButton('startDate')}
          />
        </div>
      )}

      {endDate && (
        <div className="transaction-section__active-criteria">
          <p
            className={clsx(
              'transaction-section__active-criteria-paragraph',
              isDarkTheme && 'transaction-section__active-criteria-paragraph--dark',
            )}
          >
            Okres do: {endDate}
          </p>
          <DeleteActiveCriteriaButton
            isDarkTheme={isDarkTheme}
            onClick={() => handleDeleteFilterCriteriaButton('endDate')}
          />
        </div>
      )}

      {isCategoryButtonActive() && (
        <div className="transaction-section__active-criteria">
          <p
            className={clsx(
              'transaction-section__active-criteria-paragraph',
              isDarkTheme && 'transaction-section__active-criteria-paragraph--dark',
            )}
          >
            Liczba kategorii: {categoryNumber}
          </p>
          <DeleteActiveCriteriaButton
            isDarkTheme={isDarkTheme}
            onClick={() => handleDeleteFilterCriteriaButton('selectedCategory')}
          />
        </div>
      )}
    </section>
  );
};
