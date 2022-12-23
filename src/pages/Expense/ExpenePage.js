import TransactionCard from "../../component/TransactionCard/TransactionCard";

function ExpensePage() {
    return (
      <>
        <p>Expense Page</p>
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
  
  export default ExpensePage;