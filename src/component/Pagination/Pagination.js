function Pagination({ cardNumber, paginate, perPage }) {
  const paginationPages = Math.ceil(cardNumber / perPage);
  const arrayPagination = [];

  for (let i = 1; i <= paginationPages; i++) {
    arrayPagination.push(i);
  }

  console.log(paginationPages, arrayPagination);

  return <div>
    {arrayPagination.length < 2 ? null : arrayPagination.map((number) => (
          <button className="sus" onClick={() => paginate(number)}>{number}</button>
        ))}
  </div>;
}

export default Pagination;
