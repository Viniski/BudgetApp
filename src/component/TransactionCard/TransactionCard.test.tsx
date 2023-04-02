import { render, screen } from "@testing-library/react";
import { TransactionCard } from "./TransactionCard";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/store";
import { ROOT } from "../../navigation/CONSTANTS";

const MockTransactionCard = () => {
  const route = ROOT;

  return (
    <MemoryRouter initialEntries={[route]}>
      <Provider store={mockStore}>
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
      </Provider>
    </MemoryRouter>
  );
};

describe("Transaction Card", () => {
  it("should render transaction card title", () => {
    render(<MockTransactionCard />);
    const title = screen.getByText(/Obiad w restauracji/i);
    expect(title).toBeInTheDocument();
  });

  it("should render transaction card amount", () => {
    render(<MockTransactionCard />);
    const amount = screen.getByText(/24/i);
    expect(amount).toBeInTheDocument();
  });

  it("should render transaction card category", () => {
    render(<MockTransactionCard />);
    const category = screen.getByText(/jedzenie/i);
    expect(category).toBeInTheDocument();
  });
});
