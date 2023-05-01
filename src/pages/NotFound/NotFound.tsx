import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { NotFoundLink } from "../../navigation/components/NotFoundLink/NotFoundLink";
import { Header } from "../../components/Header/Header";

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
