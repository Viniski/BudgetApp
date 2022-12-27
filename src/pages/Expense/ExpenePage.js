import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";
import ExpenseCard from "../../component/TotalCard/ExpenseCard";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";
import AddButton from "../../component/AddButton/AddButton";

function ExpensePage() {
  useWebsiteTitle('Wydatki | BudgetApp by Viniski')
  return (
    <>
      <Header title="Wydatki" />
      <section className="totalSection">
      <ExpenseCard className="mainCard"/>
      </section>
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
