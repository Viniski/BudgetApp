import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";
import { NotFoundLink } from "../../navigation/components/NotFoundLink/NotFoundLink";

export function NotFound() {
  useWebsiteTitle("Błąd | BudgetApp by Viniski");

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
}
