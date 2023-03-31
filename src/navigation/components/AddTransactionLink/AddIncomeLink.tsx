import { Link } from "react-router-dom";
import { ADD_INCOME } from "../../CONSTANTS";

type Props = {
  children: any;
};

export function AddIncomeLink({ children }: Props) {
  return <Link to={ADD_INCOME}>{children}</Link>;
}
