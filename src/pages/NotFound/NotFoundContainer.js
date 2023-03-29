import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { NotFoundView } from "./NotFoundView";

export function NotFoundContainer() {
  useWebsiteTitle("Błąd | BudgetApp by Viniski");

  return (
    <>
      <NotFoundView />
    </>
  );
}
