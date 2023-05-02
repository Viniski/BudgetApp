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
  const paginationPagesNumber = Math.ceil(cardNumber / perPage);
  const paginationPages: number[] = [
    ...Array(paginationPagesNumber).keys(),
  ].map((i) => i + 1);

  return (
    <>
      {paginationPages.length > 1
        ? paginationPages.map((number) => (
            <div className="transaction-section__pagination">
              <button
                key={number}
                className={`button-pagination ${
                  isDarkTheme && `button-pagination--dark`
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </div>
          ))
        : null}
    </>
  );
}
