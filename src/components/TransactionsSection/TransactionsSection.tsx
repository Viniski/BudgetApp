import { TransactionCard } from "../TransactionCard/TransactionCard";
import { FilterSection } from "../FilterSection/FilterSection";
import { Pagination } from "../Pagination/Pagination";
import { useTransactionSection } from "./hooks/useTransactionSection";
import { useTheme } from "../../hooks/useTheme";

type Props = {
  type: "all" | "expense" | "income";
  title: string;
};

export function TransactionSection({ type, title }: Props) {
  const isDarkTheme = useTheme();
  const { transactions, perPage, transactionOnPage, criteria, paginate } =
    useTransactionSection(type);

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
