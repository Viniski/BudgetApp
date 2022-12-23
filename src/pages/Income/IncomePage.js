import TransactionCard from "../../component/TransactionCard/TransactionCard";

function IncomePage() {
  return (
    <>
      <p>Income Page</p>
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
