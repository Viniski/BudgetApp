import { Link } from "react-router-dom";
import { EDIT_TRANSACTION_ID } from "../../CONSTANTS";

type Props = {
  id: number;
  children: React.ReactNode;
};

export function EditTransactionLink({ id, children }: Props) {
  return <Link to={EDIT_TRANSACTION_ID(id)}>{children}</Link>;
}
