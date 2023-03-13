import { Link } from "react-router-dom";
import { EDIT_TRANSACTION_ID } from "../../CONSTANTS";

export function EditTransactionLink({ id, children }) {
  return <Link to={EDIT_TRANSACTION_ID(id)}>{children}</Link>;
}
