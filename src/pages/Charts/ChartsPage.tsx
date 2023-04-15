import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";

export function ChartsPage() {
  useWebsiteTitle("Wykresy | BudgetApp by Viniski");

  return (
    <>
      <Header title="Wykresy" />
    </>
  );
}
