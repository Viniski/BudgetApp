import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";
import { NotFoundView } from "./NotFoundView";

export function NotFoundContainer() {
  useWebsiteTitle("Błąd | BudgetApp by Viniski");

  return (
    <>
      <Header title="Nie znaleziono strony" />
      <NotFoundView />
    </>
  );
}
