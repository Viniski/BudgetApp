import { Link } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";

function NotFound () {
  useWebsiteTitle("Błąd | BudgetApp by Viniski");
  return (
    <>
      <Header title="Dochody" />
      <section>
        <h1>404</h1>
        <p>ups! chyba coś poszło nie tak...</p>
        <Link to="/">Powrót do strony głównej</Link>
      </section>
    </>
  );
}

export default NotFound;
