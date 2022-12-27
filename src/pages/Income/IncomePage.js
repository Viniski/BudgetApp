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
      <section className="totalSection">
      <IncomeCard className="mainCard"/>
      </section>
      <section className="transactionSection">
        <TransactionSectionHeader title="Wszystkie dochody"/>
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

export default IncomePage;
