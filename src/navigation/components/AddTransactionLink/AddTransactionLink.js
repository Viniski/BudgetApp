import { Link } from "react-router-dom";
import { ADD_TRANSACTION } from "../../CONSTANTS";

export function AddTransactionLink({ children }) {
  return <Link to={ADD_TRANSACTION}>{children}</Link>;
}
