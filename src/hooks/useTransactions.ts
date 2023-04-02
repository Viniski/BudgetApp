import { useAppSelector } from "../redux/hooks";

type Params = "all" | "expense" | "income";

export function useTransactions(type: Params = "all") {
  const transactions = useAppSelector((state) => state.transactions);
  if (type === "all") {
    return transactions;
  } else if (type === "expense") {
    return transactions.filter((el) => el.type === "expense");
  } else {
    return transactions.filter((el) => el.type === "income");
  }
}
