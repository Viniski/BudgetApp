import { Link } from 'react-router-dom';
import { EDIT_TRANSACTION_ID } from '@/navigation/constants-dupa';

type Props = {
  id: number;
  children: React.ReactNode;
};

export const EditTransactionLink = ({ id, children }: Props) => <Link to={EDIT_TRANSACTION_ID(id)}>{children}</Link>;
