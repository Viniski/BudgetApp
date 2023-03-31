import React from "react";
import { Link } from "react-router-dom";
import { TRANSACTION_ID } from "../../CONSTANTS";

export function DetailsTransactionLink({ id, children }) {
  return <Link to={TRANSACTION_ID(id)}>{children}</Link>;
}
