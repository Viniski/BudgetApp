import { Link } from "react-router-dom";
import { ADD_EXPENSE } from "../../CONSTANTS";

type Props = {
  children: React.ReactNode;
};

export function AddExpenseLink({ children }: Props) {
  return <Link to={ADD_EXPENSE}>{children}</Link>;
}
