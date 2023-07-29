import { Link } from 'react-router-dom';
import { TRANSACTION_ID } from '@/navigation/constants-dupa';

type Props = {
  id: number;
  children: React.ReactNode;
};

export const DetailsTransactionLink = ({ id, children }: Props) => <Link to={TRANSACTION_ID(id)}>{children}</Link>;
