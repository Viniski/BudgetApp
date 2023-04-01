import { useAppSelector } from "../../../redux/hooks";

export function useGetTransactions(type: string) {
  let allTransactions = useAppSelector((state) => state.transactions);

  const getTransactionsFilteredByType = () => {
    if (type === "expense") {
      allTransactions = allTransactions.filter((el) => el.type === "expense");
    }

    if (type === "income") {
      allTransactions = allTransactions.filter((el) => el.type === "income");
    }

    return allTransactions;
  };

  const transactions = getTransactionsFilteredByType();

  return transactions;
}
