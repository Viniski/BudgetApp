import { screen } from "@testing-library/react";
import { TransactionCard } from "./TransactionCard";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../helpers/testUtils";
import { ROOT } from "../../navigation/CONSTANTS";

const MockTransactionCard = () => {
  const route = ROOT;

  return (
    <MemoryRouter initialEntries={[route]}>
      <TransactionCard
        isDarkTheme={false}
        data={{
          amount: 24,
          category: "Jedzenie",
          date: "2022-12-13",
          id: 3454319,
          note: "Było całkiem smaczne, wróc tu",
          title: "Obiad w restauracji",
          type: "expense",
        }}
      />
    </MemoryRouter>
  );
};

describe("Transaction Card", () => {
  it("should render transaction card title", () => {
    renderWithProviders(<MockTransactionCard />);
    const title = screen.getByText(/Obiad w restauracji/i);
    expect(title).toBeInTheDocument();
  });

  it("should render transaction card amount", () => {
    renderWithProviders(<MockTransactionCard />);
    const amount = screen.getByText(/24/i);
    expect(amount).toBeInTheDocument();
  });

  it("should render transaction card category", () => {
    renderWithProviders(<MockTransactionCard />);
    const category = screen.getByText(/jedzenie/i);
    expect(category).toBeInTheDocument();
  });
});
