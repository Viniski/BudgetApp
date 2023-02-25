import { render, screen } from "@testing-library/react";
import React from "react";
import TransactionCard from "./TransactionCard";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

const MockTransactionCard = () => {
  const route = "/";

  return (
    <MemoryRouter initialEntries={[route]}>
      <Provider store={store}>
        <TransactionCard
          themeDark={false}
          data={{
            amount: "24",
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
