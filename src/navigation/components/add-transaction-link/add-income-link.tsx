import { Link } from 'react-router-dom';
import { ADD_INCOME } from '@/navigation/constants-dupa';

type Props = {
  children: React.ReactNode;
};

export const AddIncomeLink = ({ children }: Props) => <Link to={ADD_INCOME}>{children}</Link>;
