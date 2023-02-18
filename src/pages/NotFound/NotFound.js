import { Link } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import AddButton from "../../component/AddButton/AddButton";
import TransactionSection from "../../component/TransactionsSection/TransactionsSection";

function NotFound () {
  useWebsiteTitle("Błąd | BudgetApp by Viniski");
  return (
    <>
      <Header title="Dochody" />
      <section>
        <h1>404</h1>
        <p>ups! chyba coś poszło nie tak...</p>
      </section>
    </>
  );
}

export default NotFound;
