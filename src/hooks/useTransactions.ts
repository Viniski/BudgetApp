import { useTransactionStore } from "../store/transactions";

type Params = "all" | "expense" | "income";

export function useTransactions(type: Params = "all") {
  const transactions = useTransactionStore((state) => state.initialState);
  if (type === "all") {
    return transactions;
  } else if (type === "expense") {
    return transactions.filter((el) => el.type === "expense");
  } else {
    return transactions.filter((el) => el.type === "income");
  }
}
