import { render, screen } from "@testing-library/react";
import { IncomeCard } from "./IncomeCard";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../redux/store";

const MockComponent = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <IncomeCard />
      </MemoryRouter>
    </Provider>
  );
};

describe("Income card", () => {
  it("should display correct amount of income transactions", () => {
    render(<MockComponent />);

    const paragraph = screen.getByText(/4350 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
