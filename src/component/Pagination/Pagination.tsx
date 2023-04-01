type Props = {
  cardNumber: number;
  paginate: (number: number) => void;
  perPage: number;
  isDarkTheme: boolean;
};

export function Pagination({
  cardNumber,
  paginate,
  perPage,
  isDarkTheme,
}: Props) {
  const paginationPages = Math.ceil(cardNumber / perPage);
  const arrayPagination: number[] = [...Array(paginationPages).keys()].map(
    (i) => i + 1
  );

  return (
    <div className="transaction-section__pagination">
      {arrayPagination.length < 2
        ? null
        : arrayPagination.map((number) => (
            <button
              key={number}
              className={`button-pagination ${
                isDarkTheme && `button-pagination--dark`
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
    </div>
  );
}
