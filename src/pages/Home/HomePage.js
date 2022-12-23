import TransactionCard from "../../component/TransactionCard/TransactionCard";
import TotalCard from "../../component/TotalCard/TotalCard";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import AddButton from "../../component/AddButton/AddButton";
import Header from "../../component/Header/Header";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";

function HomePage() {
  return (
    <>
      <Header page="home" title="Strona główna" />
      <section className="totalSection">
        <TotalCard />
        <ExpenseCard />
        <IncomeCard />
      </section>
      <section className="transactionSection">
        <TransactionSectionHeader title="Ostatnie transakcje"/>
        <TransactionCard transactionType="income" />
        <TransactionCard transactionType="income" />
        <TransactionCard transactionType="expense" />
      </section>
      <AddButton />
    </>
  );
}

export default HomePage;
