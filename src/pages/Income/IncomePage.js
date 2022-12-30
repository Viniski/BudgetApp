import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";
import AddButton from "../../component/AddButton/AddButton";

function IncomePage() {
  useWebsiteTitle('Dochody | BudgetApp by Viniski');
  return (
    <>
      <Header title="Dochody"/>
      <section className="cards">
      <IncomeCard className="cards__income--main-card"/>
      </section>
      <section className="transaction-section">
        <TransactionSectionHeader title="Wszystkie dochody"/>
        <TransactionCard transactionType="income"/>
        <TransactionCard transactionType="income"/>
        <TransactionCard transactionType="income"/>
        <TransactionCard transactionType="income"/>
        <TransactionCard transactionType="income"/>
      </section>
      <AddButton />
    </>
  );
}

export default IncomePage;
