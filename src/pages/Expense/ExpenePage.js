import { Link } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import AddButton from "../../component/Buttons/AddButton";
import TransactionSection from "../../component/TransactionsSection/TransactionsSection";

function ExpensePage() {
  useWebsiteTitle("Wydatki | BudgetApp by Viniski");

  return (
    <>
      <Header title="Wydatki" />
      <section className="cards">
        <ExpenseCard className="cards__expense--main-card" />
      </section>
      <TransactionSection type="expense"/>
      <Link to="/dodaj-wydatek">
        <AddButton />
      </Link>
    </>
  );
}

export default ExpensePage;
