import Chart from "react-apexcharts";
import { useTransactions } from "../../../hooks/useTransactions";

type Props = {
  type: "all" | "expense" | "income";
};

export function ChartComponent({ type }: Props) {
  const transactions = useTransactions(type);

  function createTransactionNameArray() {
    const name = [];
    for (let i = 0; i < transactions.length; i++) {
      name.push(transactions[i].category);
    }
    return name;
  }

  function createTransactionAmountArray() {
    const amount = [];
    for (let i = 0; i < transactions.length; i++) {
      amount.push(parseInt(transactions[i].amount));
    }
    return amount;
  }

  return (
    <Chart
      type="pie"
      width={400}
      height={250}
      series={createTransactionAmountArray()}
      options={{
        title: { text: "" },
        noData: { text: "Brak danych" },
        labels: createTransactionNameArray(),
        responsive: [
          {
            breakpoint: undefined,
            options: {},
          },
        ],
      }}
    />
  );
}
