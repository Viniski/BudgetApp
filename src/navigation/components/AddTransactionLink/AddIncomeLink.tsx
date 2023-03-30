import { Link } from "react-router-dom";
import { ADD_INCOME } from "../../CONSTANTS";

export function AddIncomeLink({ children }) {
  return <Link to={ADD_INCOME}>{children}</Link>;
}
