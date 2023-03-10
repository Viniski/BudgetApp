import { useSelector } from "react-redux";

export function ExpenseCard(props) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const transactions = useSelector((state) => state.transactions);

  const calculateExpenseTransaction = () => {
    const expense = transactions.filter((el) => el.type === "expense");
    let totalExpense = 0;

    for (let i = 0; i < expense.length; i++) {
      totalExpense -= Number(expense[i].amount);
    }

    return totalExpense;
  };

  return (
    <div
      className={`cards__expense ${props?.className} ${
        isDarkTheme && `cards__expense--dark`
      }`}
    >
      <div className="cards__expense-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      </div>
      <h2 className="cards__h2">Bilans wydatków</h2>
      <p className="cards__p">{calculateExpenseTransaction()} PLN</p>
    </div>
  );
}
