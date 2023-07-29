import { clsx } from 'clsx';

type Props = {
  onClick: () => void;
  isDarkTheme: boolean;
};

export const OpenMenuButton = ({ onClick, isDarkTheme }: Props) => (
  <button
    aria-label="Otwórz menu nawigacji"
    className={clsx('header__button-menu', isDarkTheme && 'header__button-menu--dark')}
    data-testid="open-menu-button"
    type="button"
    onClick={onClick}
  >
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        fillRule="evenodd"
      />
    </svg>
  </button>
);
