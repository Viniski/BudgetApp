export function TotalCardView({ isDarkTheme, totalAmount }) {
  return (
    <div className={`cards__total ${isDarkTheme && `cards__total--dark`}`}>
      <h2 className="cards__h2">Bilans transakcji</h2>
      <p className="cards__p">{totalAmount} PLN</p>
    </div>
  );
}
