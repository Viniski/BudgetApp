import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useUrlStore } from "../../../store/url";
import { getFilteredTransaction } from "../../../helpers/getFilteredTransaction";
import { useTransactions } from "../../../hooks/useTransactions";
import { useGetParamsFromURL } from "./useGetParamsFromURL";
import { createPaginationUrl } from "../../../helpers/createPaginationUrl";
import type { initialTransactions } from "../../../data/initialTransaction";
import { ROOT, EXPENSE } from "../../../navigation/CONSTANTS";

type Params = "all" | "expense" | "income";

export function useTransactionSection(type: Params) {
  const navigate = useNavigate();
  const location = useLocation();
  const updateHomeURL = useUrlStore((state) => state.updateHomeURL);
  const updateIncomeURL = useUrlStore((state) => state.updateIncomeURL);
  const updateExpenseURL = useUrlStore((state) => state.updateExpenseURL);
  const [searchParams] = useSearchParams();
  const allTransactions = useTransactions(type);
  const filterParams = useGetParamsFromURL();

  const filtredTransactions = getFilteredTransaction(
    allTransactions,
    filterParams
  );

  const currentPage = Number(searchParams.get("strona")) || 1;
  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage - 1;
  const transactionOnPage: initialTransactions = filtredTransactions.slice(
    startIndex,
    endIndex + 1
  );

  const paginate = (number: number) => {
    const newUrl = createPaginationUrl(location.pathname, filterParams, number);
    location.pathname === ROOT
      ? updateHomeURL(newUrl)
      : location.pathname === EXPENSE
      ? updateExpenseURL(newUrl)
      : updateIncomeURL(newUrl);
    navigate(newUrl);
  };

  return {
    transactions: filtredTransactions,
    perPage,
    transactionOnPage,
    criteria: filterParams,
    paginate,
  };
}
