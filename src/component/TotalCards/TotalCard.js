import { useSelector } from "react-redux";

export function TotalCard() {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark" ? true : "";
  const transactions = useSelector((state) => state.transactions);

  const calculateTotalTransaction = () => {
    const income = transactions.filter((el) => el.type === "income");
    const expense = transactions.filter((el) => el.type === "expense");
    let totalAmount = 0;

    for (let i = 0; i < income.length; i++) {
      totalAmount += Number(income[i].amount);
    }

    for (let i = 0; i < expense.length; i++) {
      totalAmount -= Number(expense[i].amount);
    }

    return totalAmount;
  };

  return (
    <div className={`cards__total ${themeDark && `cards__total--dark`}`}>
      <h2 className="cards__h2">Bilans transakcji</h2>
      <p className="cards__p">{calculateTotalTransaction()} PLN</p>
    </div>
  );
}
