import { useAppSelector } from "../redux/hooks";

export function useTransactionById(id: string | undefined) {
  return useAppSelector(
    (state) =>
      state.transactions.filter(
        (transaction) => transaction.id === Number(id)
      )[0]
  );
}
