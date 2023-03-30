import { useSelector } from "react-redux";

export function useGetTransactions(type) {
  let allTransactions = useSelector((state) => state.transactions);

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
