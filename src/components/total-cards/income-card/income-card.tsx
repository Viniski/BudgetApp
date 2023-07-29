import { useMemo } from 'react';
import { clsx } from 'clsx';
import { useTheme } from '@/hooks/use-theme';
import { useTransactions } from '@/hooks/use-transactions';

type Props = {
  variant?: string;
};

export const IncomeCard = ({ variant }: Props) => {
  const isDarkTheme = useTheme();
  const income = useTransactions('income');

  const calculateIncomeTransaction = useMemo(() => {
    let totalIncome = 0;

    for (let i = 0; i < income.length; i += 1) {
      totalIncome += Number(income[i].amount);
    }

    return totalIncome;
  }, [income]);

  return (
    <div
      className={clsx(
        'cards__income',
        variant === 'main' && 'cards__expense--main-card',
        isDarkTheme && `cards__income--dark`,
      )}
    >
      <div className="cards__income-icon">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <h2>Bilans przychodów</h2>
      <p>{calculateIncomeTransaction} PLN</p>
    </div>
  );
};
