import { Link } from "react-router-dom";
import { TRANSACTION_ID } from "../../CONSTANTS";

type Props = {
  id: number;
  children: React.ReactNode;
};

export function DetailsTransactionLink({ id, children }: Props) {
  return <Link to={TRANSACTION_ID(id)}>{children}</Link>;
}
