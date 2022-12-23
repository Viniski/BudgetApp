import TransactionCard from "../../component/TransactionCard/TransactionCard";
import Header from "../../component/Header/Header";

function IncomePage() {
  return (
    <>
      <Header title="Szczegóły transakcji"/>
      <section className="transactionSection">
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </section>
    </>
  );
}

export default IncomePage;
