import { Link } from 'react-router-dom';
import { ADD_TRANSACTION } from '@/navigation/constants-dupa';

type Props = {
  children: React.ReactNode;
};

export const AddTransactionLink = ({ children }: Props) => <Link to={ADD_TRANSACTION}>{children}</Link>;
