import { TransactionCard } from "../TransactionCard/TransactionCard";
import { FilterSection } from "../FilterSection/FilterSection";
import { Pagination } from "../../component/Pagination/Pagination";
import { useTransactionSection } from "./useTransactionSection";

export function TransactionSection({ type, title }) {
  const {
    isDarkTheme,
    transactions,
    perPage,
    transactionOnPage,
    criteria,
    paginate,
  } = useTransactionSection(type);

  return (
    <section className="transaction-section">
      <FilterSection
        type={type}
        title={title}
        isDarkTheme={isDarkTheme}
        criteria={criteria}
      />
      {transactionOnPage.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          data={transaction}
          isDarkTheme={isDarkTheme}
        />
      ))}
      {!transactions.length && (
        <p
          className={`transaction-section__paragraph ${
            isDarkTheme && `transaction-section__paragraph--dark`
          }`}
        >
          Brak transakcji
        </p>
      )}
      <Pagination
        cardNumber={transactions.length}
        perPage={perPage}
        paginate={paginate}
        isDarkTheme={isDarkTheme}
      />
    </section>
  );
}
