import { clsx } from 'clsx';

type Props = {
  onClick: () => void;
  isDarkTheme: boolean;
};

export const FilterButton = ({ onClick, isDarkTheme }: Props) => (
  <button
    aria-label="Filtruj transakcje"
    className={clsx('transaction-section__button-filter', isDarkTheme && 'transaction-section__button-filter--dark')}
    data-testid="filter-button"
    type="button"
    onClick={onClick}
  >
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
    </svg>
  </button>
);
