import { useAppSelector } from "../redux/hooks";

export function useTransactionById(id: string | undefined) {
  //tu lepiej find użyć :)
  return useAppSelector(
    (state) =>
      state.transactions.filter(
        (transaction) => transaction.id === Number(id)
      )[0]
  );
}
