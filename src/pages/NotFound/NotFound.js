import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";

export function NotFound() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  useWebsiteTitle("Błąd | BudgetApp by Viniski");
  return (
    <>
      <Header title="Nie znaleziono strony" />
      <section className="wrapper-404">
        <h2 className="title-huge">404</h2>
        <p>Ups!! chyba coś poszło nie tak...</p>
        <Link to="/">
          <p className={`link ${isDarkTheme && `link--dark`}`}>
            Powrót do strony głównej
          </p>
        </Link>
      </section>
    </>
  );
}
