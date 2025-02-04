import { clsx } from 'clsx';

type Props = {
  onClick: () => void;
  isDarkTheme: boolean;
};

export const UndoButton = ({ onClick, isDarkTheme }: Props) => (
  <button
    aria-label="Cofnij"
    className={clsx('header__button-back', isDarkTheme && 'header__button-back--dark')}
    data-testid="undo-button"
    type="button"
    onClick={onClick}
  >
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
        fillRule="evenodd"
      />
    </svg>
  </button>
);
