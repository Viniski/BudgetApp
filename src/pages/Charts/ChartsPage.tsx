import { useState } from "react";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { ChartComponent } from "./components/ChartComponent";
import { Header } from "../../component/Header/Header";

type Params = "all" | "expense" | "income";

export function ChartsPage() {
  useWebsiteTitle("Wykresy | BudgetApp by Viniski");
  const [type, setType] = useState<Params>("all");
  return (
    <>
      <Header title="Wykresy" />
      <section className="wrapper-404">
        <button onClick={() => setType("all")}>Wszystko</button>
        <button onClick={() => setType("expense")}>Wydatki</button>
        <button onClick={() => setType("income")}>Przychody</button>
        <ChartComponent type={type} />
      </section>
    </>
  );
}
