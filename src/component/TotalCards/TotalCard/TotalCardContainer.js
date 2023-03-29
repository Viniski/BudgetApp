import { useSelector } from "react-redux";
import { TotalCardView } from "./TotalCardView";

export function TotalCardContainer({ variant }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
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
    <TotalCardView
      isDarkTheme={isDarkTheme}
      totalAmount={calculateTotalTransaction()}
    />
  );
}
