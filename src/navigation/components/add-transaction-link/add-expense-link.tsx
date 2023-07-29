import { Link } from 'react-router-dom';
import { ADD_EXPENSE } from '@/navigation/constants-dupa';

type Props = {
  children: React.ReactNode;
};

export const AddExpenseLink = ({ children }: Props) => <Link to={ADD_EXPENSE}>{children}</Link>;
