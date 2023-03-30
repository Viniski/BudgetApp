import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  updateHomeURL,
  updateExpenseURL,
  updateIncomeURL,
} from "../../../redux/urlSlice";
import { getFilteredTransaction } from "../../../helpers/getFilteredTransaction";
import { useGetTransactions } from "./useGetTransactions";
import { useGetParamsFromURL } from "./useGetParamsFromURL";
import { useTheme } from "../../../hooks/useTheme";
import { createPaginationUrl } from "../../../helpers/createPaginationUrl";

export function useTransactionSection(type) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isDarkTheme = useTheme();
  const allTransactions = useGetTransactions(type);
  const filterParams = useGetParamsFromURL();

  const filtredTransactions = getFilteredTransaction(
    allTransactions,
    filterParams
  );

  const currentPage = searchParams.get("strona") || 1;
  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage - 1;
  let transactionOnPage = filtredTransactions.slice(startIndex, endIndex + 1);

  const paginate = (number) => {
    const newUrl = createPaginationUrl(location.pathname, filterParams, number);
    dispatch(
      location.pathname === "/"
        ? updateHomeURL(newUrl)
        : type === "/wydatki"
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
