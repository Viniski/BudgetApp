function Pagination({ cardNumber, paginate, perPage }) {
  const paginationPages = Math.ceil(cardNumber / perPage);
  const arrayPagination = [];

  for (let i = 1; i <= paginationPages; i++) {
    arrayPagination.push(i);
  }

  console.log(paginationPages, arrayPagination);

  return <div className="transaction-section__pagination">
    {arrayPagination.length < 2 ? null : arrayPagination.map((number) => (
          <button key={number} className="button-pagination" onClick={() => paginate(number)}>{number}</button>
        ))}
  </div>;
}

export default Pagination;

//${
//  themeDark && `transaction-section__pagination--dark`
//}
