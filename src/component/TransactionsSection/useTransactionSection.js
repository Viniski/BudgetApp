import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateHomeURL,
  updateExpenseURL,
  updateIncomeURL,
} from "../../redux/urlSlice";
import { getFilteredTransaction } from "../../helpers/getFilteredTransaction";
import { useLocation } from "react-router-dom";
import { createPaginationUrl } from "../../helpers/createPaginationUrl";

export function useTransactionSection(type) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const [searchParams] = useSearchParams();

  const getParamsToFilterFromURL = () => {
    const objectParams = {
      page: searchParams.get("strona"),
      minAmount: searchParams.get("min"),
      maxAmount: searchParams.get("max"),
      endDate: searchParams.get("do"),
      startDate: searchParams.get("od"),
      selectedCategory: searchParams.get("delete_category")?.split(",") || [],
    };

    return objectParams;
  };

  let stateTransactions = useSelector((state) => state.transactions);
  const getTransactions = () => {
    if (type === "expense") {
      stateTransactions = stateTransactions.filter(
        (el) => el.type === "expense"
      );
    }

    if (type === "income") {
      stateTransactions = stateTransactions.filter(
        (el) => el.type === "income"
      );
    }

    return stateTransactions;
  };

  const stateTransaction = getTransactions();

  const transactions = getFilteredTransaction(
    stateTransaction,
    getParamsToFilterFromURL()
  );

  const currentPage = searchParams.get("strona") || 1;
  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage - 1;
  let transactionOnPage = transactions.slice(startIndex, endIndex + 1);

  const paginate = (number) => {
    const newUrl = createPaginationUrl(
      location.pathname,
      getParamsToFilterFromURL(),
      number
    );
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
    transactions,
    perPage,
    transactionOnPage,
    criteria: getParamsToFilterFromURL(),
    paginate,
  };
}
