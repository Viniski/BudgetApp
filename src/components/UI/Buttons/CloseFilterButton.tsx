import { clsx } from "clsx";

type Props = {
  onClick: () => void;
  isDarkTheme: boolean;
};

export const CloseFilterButton = ({ onClick, isDarkTheme }: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "transaction-section__button-filter",
        isDarkTheme && "transaction-section__button-filter--dark"
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </button>
  );
};
