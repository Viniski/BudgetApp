import { clsx } from 'clsx';

type Props = {
  cardNumber: number;
  paginate: (number: number) => void;
  perPage: number;
  isDarkTheme: boolean;
};

export const Pagination = ({ cardNumber, paginate, perPage, isDarkTheme }: Props) => {
  const paginationPagesNumber = Math.ceil(cardNumber / perPage);
  const paginationPages: number[] = [...Array(paginationPagesNumber).keys()].map((i) => i + 1);

  return (
    <div className="transaction-section__pagination">
      {paginationPages.length > 1 &&
        paginationPages.map((number) => (
          <button
            key={number}
            className={clsx('button-pagination', isDarkTheme && 'button-pagination--dark')}
            type="button"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
    </div>
  );
};
