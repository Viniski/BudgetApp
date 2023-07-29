import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { InitialTransactions } from '@/data/initial-transaction';
import { createPaginationUrl } from '@/helpers/create-pagination-url';
import { getFilteredTransaction } from '@/helpers/get-filtered-transaction';
import { useTransactions } from '@/hooks/use-transactions';
import { EXPENSE, ROOT } from '@/navigation/constants-dupa';
import { useUrlStore } from '@/store/url';
import { useGetParamsFromURL } from './use-get-params-from-url';

type Params = 'all' | 'expense' | 'income';

export const useTransactionSection = (type: Params) => {
  const navigate = useNavigate();
  const location = useLocation();
  const updateHomeURL = useUrlStore((state) => state.updateHomeURL);
  const updateIncomeURL = useUrlStore((state) => state.updateIncomeURL);
  const updateExpenseURL = useUrlStore((state) => state.updateExpenseURL);
  const [searchParams] = useSearchParams();
  const allTransactions = useTransactions(type);
  const filterParams = useGetParamsFromURL();

  const filtredTransactions = getFilteredTransaction(allTransactions, filterParams);

  const currentPage = Number(searchParams.get('strona')) || 1;
  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage - 1;
  const transactionOnPage: InitialTransactions = filtredTransactions.slice(startIndex, endIndex + 1);

  const paginate = (number: number) => {
    const newUrl = createPaginationUrl(location.pathname, filterParams, number);

    if (location.pathname === ROOT) {
      updateHomeURL(newUrl);
    } else if (location.pathname === EXPENSE) {
      updateExpenseURL(newUrl);
    } else {
      updateIncomeURL(newUrl);
    }

    navigate(newUrl);
  };

  return {
    transactions: filtredTransactions,
    perPage,
    transactionOnPage,
    criteria: filterParams,
    paginate,
  };
};
