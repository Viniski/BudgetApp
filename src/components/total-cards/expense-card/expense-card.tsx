import { useMemo } from 'react';
import { clsx } from 'clsx';
import { useTheme } from '@/hooks/use-theme';
import { useTransactions } from '@/hooks/use-transactions';

type Props = {
  variant?: string;
};

export const ExpenseCard = ({ variant }: Props) => {
  const isDarkTheme = useTheme();
  const expense = useTransactions('expense');

  const calculateExpenseTransaction = useMemo(() => {
    let totalExpense = 0;

    for (let i = 0; i < expense.length; i += 1) {
      totalExpense -= Number(expense[i].amount);
    }

    return totalExpense;
  }, [expense]);

  return (
    <div
      className={clsx(
        'cards__expense',
        variant === 'main' && 'cards__expense--main-card',
        isDarkTheme && 'cards__expense--dark',
      )}
    >
      <div className="cards__expense-icon">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="cards__h2">Bilans wydatków</h2>
      <p className="cards__p">{calculateExpenseTransaction} PLN</p>
    </div>
  );
};
