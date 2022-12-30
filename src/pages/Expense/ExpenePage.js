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
      <section className="cards">
      <ExpenseCard className="cards__expense--main-card"/>
      </section>
      <section className="transaction-section">
        <TransactionSectionHeader title="Wszystkie przychody"/>
        <TransactionCard transactionType="expense"/>
        <TransactionCard transactionType="expense"/>
        <TransactionCard transactionType="expense"/>
        <TransactionCard transactionType="expense"/>
        <TransactionCard transactionType="expense"/>
      </section>
      <AddButton />
    </>
  );
}

export default ExpensePage;
