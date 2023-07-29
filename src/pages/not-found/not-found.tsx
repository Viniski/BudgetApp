import { Header } from '@/components/header/header-dupa';
import { useWebsiteTitle } from '@/hooks/use-webstite-title';
import { NotFoundLink } from '@/navigation/components/not-found-link/not-found-link';

export const NotFound = () => {
  useWebsiteTitle('Błąd | BudgetApp by Viniski');

  return (
    <>
      <Header title="Nie znaleziono strony" />
      <section className="wrapper-404">
        <h2 className="title-huge">404</h2>
        <p>Ups!! chyba coś poszło nie tak...</p>
        <NotFoundLink />
      </section>
    </>
  );
};
