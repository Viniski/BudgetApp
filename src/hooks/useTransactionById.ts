import { useTransactionStore } from "../store/transactions";

export function useTransactionById(id: string | undefined) {
  return useTransactionStore(
    (state) =>
      state.initialState.filter(
        (transaction) => transaction.id === Number(id)
      )[0]
  );
}
