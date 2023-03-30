import { Link } from "react-router-dom";
import { ADD_EXPENSE } from "../../CONSTANTS";

export function AddExpenseLink({ children }) {
  return <Link to={ADD_EXPENSE}>{children}</Link>;
}
