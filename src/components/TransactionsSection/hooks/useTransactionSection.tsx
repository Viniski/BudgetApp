import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import {
  updateHomeURL,
  updateExpenseURL,
  updateIncomeURL,
} from "../../../redux/urlSlice";
import { getFilteredTransaction } from "../../../helpers/getFilteredTransaction";
import { useTransactions } from "../../../hooks/useTransactions";
import { useGetParamsFromURL } from "./useGetParamsFromURL";
import { useTheme } from "../../../hooks/useTheme";
import { createPaginationUrl } from "../../../helpers/createPaginationUrl";
import type { initialStateType } from "../../../data/initialTransaction";
import { ROOT, EXPENSE } from "../../../navigation/CONSTANTS";

type Params = "all" | "expense" | "income";

export function useTransactionSection(type: Params) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const isDarkTheme = useTheme();
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
  let transactionOnPage: initialStateType = filtredTransactions.slice(
    startIndex,
    endIndex + 1
  );

  const paginate = (number: number) => {
    const newUrl = createPaginationUrl(location.pathname, filterParams, number);
    dispatch(
      location.pathname === ROOT
        ? updateHomeURL(newUrl)
        : location.pathname === EXPENSE
        ? updateExpenseURL(newUrl)
        : updateIncomeURL(newUrl)
    );
    navigate(newUrl);
  };

  return {
    isDarkTheme,
    transactions: filtredTransactions,
    perPage,
    transactionOnPage,
    criteria: filterParams,
    paginate,
  };
}
