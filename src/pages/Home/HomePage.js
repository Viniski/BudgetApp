import TransactionCard from "../../component/TransactionCard/TransactionCard";
import TotalCard from "../../component/TotalCard/TotalCard";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import AddButton from "../../component/AddButton/AddButton";
import Header from "../../component/Header/Header";

function HomePage() {
  return (
    <>
      <Header page="home" title="Strona główna"/>
      <section className="totalSection">
        <TotalCard />
        <ExpenseCard />
        <IncomeCard />
      </section>
      <section className="transactionSection">
        <h3>Ostatnie transakcje</h3>
        <TransactionCard transactionType="income" />
        <TransactionCard transactionType="income" />
        <TransactionCard transactionType="expense" />
      </section>
      <AddButton />
    </>
  );
}

export default HomePage;
