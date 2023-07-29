import { clsx } from 'clsx';

type Props = {
  onClick: () => void;
  isDarkTheme: boolean;
};

export const CloseMenuButton = ({ onClick, isDarkTheme }: Props) => (
  <button
    aria-label="Zamknij menu nawigacji"
    className={clsx('header__button-menu', isDarkTheme && 'header__button-menu--dark')}
    data-testid="close-menu-button"
    type="button"
    onClick={onClick}
  >
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        fillRule="evenodd"
      />
    </svg>
  </button>
);
