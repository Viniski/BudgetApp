import { useState } from "react";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { ChartComponent } from "./components/ChartComponent";
import { Header } from "../../components/Header/Header";

type Params = "all" | "expense" | "income";

export function ChartsPage() {
  useWebsiteTitle("Wykresy | BudgetApp by Viniski");
  const [type, setType] = useState<Params>("all");
  return (
    <>
      <Header title="Wykresy" />
      <section className="wrapper-404">
        <button onClick={() => setType("all")} className="button-options">
          Wszystko
        </button>
        <button onClick={() => setType("expense")} className="button-options">
          Wydatki
        </button>
        <button onClick={() => setType("income")} className="button-options">
          Przychody
        </button>
        <ChartComponent type={type} />
      </section>
    </>
  );
}
