import { render, screen } from "@testing-library/react";
import { ExpenseCard } from "./ExpenseCard";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../redux/store";

const MockComponent = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <ExpenseCard />
      </MemoryRouter>
    </Provider>
  );
};

describe("Expense card", () => {
  it("should display correct amount of expense transactions", () => {
    render(<MockComponent />);

    const paragraph = screen.getByText(/-2647 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
