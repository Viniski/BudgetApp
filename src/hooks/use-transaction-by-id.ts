import { useTransactionStore } from '@/store/transactions';

export const useTransactionById = (id: string | undefined) => useTransactionStore((state) => state.initialState.filter((transaction) => transaction.id === Number(id))[0]);
