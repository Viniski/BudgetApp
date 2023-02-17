import { Link } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";

function SelectAddTypePage() {
  useWebsiteTitle("Dodaj transakcje | BudgetApp by Viniski");
  return (
    <>
      <Header title="Dodaj transakcje" />
      <div className="select-container">
      <Link to="/dodaj-dochód">
        <button className="button-options">Dodaj dochód</button>
      </Link>
      <Link to="/dodaj-wydatek">
        <button className="button-options">Dodaj wydatek</button>
      </Link>
      </div>
    </>
  );
}

export default SelectAddTypePage;
