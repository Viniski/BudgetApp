import { useSelector } from "react-redux";
import { IncomeCardView } from "./IncomeCardView";

export function IncomeCardContainer({ variant }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const transactions = useSelector((state) => state.transactions);

  const calculateIncomeTransaction = () => {
    const income = transactions.filter((el) => el.type === "income");
    let totalIncome = 0;

    for (let i = 0; i < income.length; i++) {
      totalIncome += Number(income[i].amount);
    }

    return totalIncome;
  };

  return (
    <IncomeCardView
      isDarkTheme={isDarkTheme}
      totalIncome={calculateIncomeTransaction()}
      variant={variant === "main" ? "cards__expense--main-card" : ""}
    />
  );
}
