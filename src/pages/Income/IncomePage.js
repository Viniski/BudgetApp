import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";
import IncomeCard from "../../component/TotalCard/IncomeCard";
import TransactionSectionHeader from "../../component/TransactionSectionHeader/TransactionSectionHeader";
import AddButton from "../../component/AddButton/AddButton";

function IncomePage() {
  return (
    <>
      <Header title="Przychody"/>
      <IncomeCard />
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
