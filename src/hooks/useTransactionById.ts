import { useAppSelector } from "../redux/hooks";

export function useTransactionById(id: string | undefined) {
  return useAppSelector((state) =>
    state.transactions.find((transaction) => transaction.id === Number(id))
  );
}
