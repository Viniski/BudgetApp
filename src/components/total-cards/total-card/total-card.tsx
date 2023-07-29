import { useMemo } from 'react';
import { clsx } from 'clsx';
import { useTheme } from '@/hooks/use-theme';
import { useTransactions } from '@/hooks/use-transactions';

export const TotalCard = () => {
  const isDarkTheme = useTheme();
  const income = useTransactions('income');
  const expense = useTransactions('expense');

  const calculateTotalTransaction = useMemo(() => {
    let totalAmount = 0;

    for (let i = 0; i < income.length; i += 1) {
      totalAmount += Number(income[i].amount);
    }

    for (let i = 0; i < expense.length; i += 1) {
      totalAmount -= Number(expense[i].amount);
    }

    return totalAmount;
  }, [income, expense]);

  return (
    <div className={clsx('cards__total', isDarkTheme && 'cards__total--dark')}>
      <h2 className="cards__h2">Bilans transakcji</h2>
      <p className="cards__p">{calculateTotalTransaction} PLN</p>
    </div>
  );
};
