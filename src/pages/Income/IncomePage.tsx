import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../components/Header/Header";
import { IncomeCard } from "../../components/TotalCards/IncomeCard/IncomeCard";
import { AddButton } from "../../components/UI/Buttons/AddButton";
import { TransactionSection } from "../../components/TransactionsSection/TransactionsSection";
import { AddTransactionLink } from "../../navigation/components/AddTransactionLink/AddTransactionLink";

export function IncomePage() {
  useWebsiteTitle("Dochody | BudgetApp by Viniski");

  return (
    <>
      <Header title="Przychody" />
      <section className="cards">
        <IncomeCard variant="main" />
      </section>
      <TransactionSection type="income" title="wpływy" />
      <AddTransactionLink>
        <AddButton />
      </AddTransactionLink>
    </>
  );
}
