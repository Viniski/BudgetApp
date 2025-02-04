import { Link, useNavigate, useParams } from 'react-router-dom';
import { CategoryDetails } from '@/components/category-details/category-details';
import { Header } from '@/components/header/header-dupa';
import { useTransactionById } from '@/hooks/use-transaction-by-id';
import { useWebsiteTitle } from '@/hooks/use-webstite-title';
import { useTransactionStore } from '@/store/transactions';

export const DetailsPage = () => {
  useWebsiteTitle('Szczegóły transakcji | BudgetApp by Viniski');
  const { id } = useParams();
  const tranasaction = useTransactionById(id);
  const navigate = useNavigate();
  const removeTransaction = useTransactionStore((state) => state.remove);

  const handleDeleteTransaction = () => {
    removeTransaction(Number(id));
    navigate('/');
  };

  return (
    <>
      <Header title="Szczegóły transakcji" />
      <section className="details-section">
        <CategoryDetails category="Tytuł" value={tranasaction.title} />
        <CategoryDetails category="Wartość" value={`${tranasaction.amount} PLN`} />
        <CategoryDetails category="Typ" value={tranasaction.type === 'income' ? 'Przychód' : 'Wydatek'} />
        <CategoryDetails category="Kategoria" value={tranasaction.category} />
        <CategoryDetails category="Data" value={tranasaction.date} />
        <CategoryDetails category="Notatki" value={tranasaction.note} />
      </section>
      <section className="button-details">
        <button aria-label="Usuń transakcje" type="button" onClick={handleDeleteTransaction}>
          <span>Usuń</span>
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
        <Link to={`/edytuj-transakcje/${id}`}>
          <button aria-label="Edytuj transakcje" type="button">
            <span>Edytuj</span>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </section>
    </>
  );
};
