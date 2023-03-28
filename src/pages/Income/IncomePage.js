import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";
import { IncomeCard } from "../../component/TotalCards/IncomeCard/IncomeCard";
import { AddButton } from "../../UI/Buttons/AddButton";
import { TransactionSection } from "../../component/TransactionsSection/TransactionsSection";
import { AddTransactionLink } from "../../navigation/components/AddTransactionLink/AddTransactionLink";

export function IncomePage() {
  useWebsiteTitle("Dochody | BudgetApp by Viniski");

  return (
    <>
      <Header title="Przychody" />
      <section className="cards">
        <IncomeCard className="cards__income--main-card" />
      </section>
      <TransactionSection type="income" title="wpływy" />
      <AddTransactionLink>
        <AddButton />
      </AddTransactionLink>
    </>
  );
}
