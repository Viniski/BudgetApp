import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";
import AddButton from "../../component/AddButton/AddButton";

function ExpensePage() {
  return (
    <>
      <Header title="Wydatki" />
      <ExpenseCard />
      <section className="transactionSection">
        <TransactionSectionHeader title="Wszystkie przychody"/>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </section>
      <AddButton />
    </>
  );
}

export default ExpensePage;
