import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateHomeURL, updateExpenseURL, updateIncomeURL } from "../../redux/urlSlice";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import FilterSection from "../FilterSection/FilterSection";
import Pagination from "../../component/Pagination/Pagination";
import { useGetFilteredTransaction } from "../../hooks/useGetFilteredTransaction";
import { useLocation } from "react-router-dom";
import createPaginationUrl from "../../helpers/createPaginationUrl";

function TransactionSection({ type, title }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark" ? true : "";

  const [searchParams] = useSearchParams();

  const getParamsToFilterFromURL = () => {
    const objectParams = {
      page: searchParams.get("strona"),
      minAmount: searchParams.get("min"),
      maxAmount: searchParams.get("max"),
      endDate: searchParams.get("do"),
      startDate: searchParams.get("od"),
      selectedCategory: searchParams.get("delete_category")?.split(',') || [],
    }

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

  const transactions = useGetFilteredTransaction(stateTransaction, getParamsToFilterFromURL());

  const currentPage = (searchParams.get("strona") || 1);
  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage - 1;
  let transactionOnPage = transactions.slice(startIndex, endIndex + 1);

  const paginate = (number) => {
    const newUrl = createPaginationUrl(location.pathname, getParamsToFilterFromURL(), number);
    dispatch(
      location.pathname === "/"
        ? updateHomeURL(newUrl)
        : type === "/wydatki"
        ? updateExpenseURL(newUrl)
        : updateIncomeURL(newUrl)
    );
    navigate(newUrl);
  };

  return (
    <section className="transaction-section">
        <FilterSection
          type={type}
          title={title}
          themeDark={themeDark}
          criteria={getParamsToFilterFromURL()}
        />
      {transactionOnPage.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          data={transaction}
          themeDark={themeDark}
        />
      ))}
      {!transactions.length && (
        <p
          className={`transaction-section__paragraph ${
            themeDark && `transaction-section__paragraph--dark`
          }`}
        >
          Brak transakcji
        </p>
      )}
      <Pagination
        cardNumber={transactions.length}
        perPage={perPage}
        paginate={paginate}
        themeDark={themeDark}
      />
    </section>
  );
}

export default TransactionSection;
