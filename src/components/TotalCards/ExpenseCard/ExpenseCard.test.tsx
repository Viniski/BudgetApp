import { screen } from "@testing-library/react";
import { ExpenseCard } from "./ExpenseCard";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../helpers/testUtils";

const MockComponent = () => {
  return (
    <MemoryRouter>
      <ExpenseCard />
    </MemoryRouter>
  );
};

describe("Expense card", () => {
  it("should display correct amount of expense transactions", () => {
    renderWithProviders(<MockComponent />);

    const paragraph = screen.getByText(/-2647 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
