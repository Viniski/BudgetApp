import { useTransactionStore } from '@/store/transactions';

type Params = 'all' | 'expense' | 'income';

export const useTransactions = (type: Params = 'all') => {
  const transactions = useTransactionStore((state) => state.initialState);
  if (type === 'all') {
    return transactions;
  }
  if (type === 'expense') {
    return transactions.filter((el) => el.type === 'expense');
  }

  return transactions.filter((el) => el.type === 'income');
};
