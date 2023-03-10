function Pagination({ cardNumber, paginate, perPage, themeDark }) {
  const paginationPages = Math.ceil(cardNumber / perPage);
  const arrayPagination = [];

  for (let i = 1; i <= paginationPages; i++) {
    arrayPagination.push(i);
  }

  return (
    <div className="transaction-section__pagination">
      {arrayPagination.length < 2
        ? null
        : arrayPagination.map((number) => (
            <button
              key={number}
              className={`button-pagination ${
                themeDark && `button-pagination--dark`
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
    </div>
  );
}

export default Pagination;
