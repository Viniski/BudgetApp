import { useSelector } from "react-redux";
import { ExpenseCardView } from "./ExpenseCardView";

export function ExpenseCardContainer({ variant }) {
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
    <ExpenseCardView
      isDarkTheme={isDarkTheme}
      totalExpense={calculateExpenseTransaction()}
      variant={variant === "main" ? "cards__expense--main-card" : ""}
    />
  );
}
