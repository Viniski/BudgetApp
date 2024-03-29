import { Link } from "react-router-dom";
import { ADD_TRANSACTION } from "../../CONSTANTS";

type Props = {
  children: React.ReactNode;
};

export function AddTransactionLink({ children }: Props) {
  return <Link to={ADD_TRANSACTION}>{children}</Link>;
}
