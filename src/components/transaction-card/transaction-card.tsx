import { clsx } from 'clsx';
import { DeleteButton } from '@/components/ui/buttons/delete-button';
import { EditButton } from '@/components/ui/buttons/edit-button';
import { DetailsTransactionLink } from '@/navigation/components/details-transaction-link/details-transaction-link';
import { EditTransactionLink } from '@/navigation/components/edit-transaction-link/edit-transaction-link';
import { useTransactionStore } from '@/store/transactions';

type Props = {
  data: {
    id: number;
    date: string;
    type: string;
    amount: number;
    title: string;
    category: string;
    note: string;
  };
  isDarkTheme: boolean;
};

export const TransactionCard = ({ data, isDarkTheme }: Props) => {
  const removeTransaction = useTransactionStore((state) => state.remove);

  const handleDeleteTransaction = () => {
    removeTransaction(data.id);
  };

  return (
    <div className={clsx('transaction-section__card', isDarkTheme && 'transaction-section__card--dark')}>
      <DetailsTransactionLink id={data.id}>
        <div className={clsx('card__ammount', isDarkTheme && 'card__ammount--dark')}>
          <span className={data.type}>{data.type === 'expense' ? `-${data.amount}` : `+${data.amount}`}</span>
        </div>
      </DetailsTransactionLink>
      <DetailsTransactionLink id={data.id}>
        <div className="card__description">
          <p className={clsx('card__title', isDarkTheme && 'card__title--dark')}>{data.title}</p>
          <p className="card__category">{data.category}</p>
        </div>
      </DetailsTransactionLink>
      <div className="card__buttons">
        <DeleteButton isDarkTheme={isDarkTheme} onClick={handleDeleteTransaction} />
        <EditTransactionLink id={data.id}>
          <EditButton isDarkTheme={isDarkTheme} />
        </EditTransactionLink>
      </div>
    </div>
  );
};
