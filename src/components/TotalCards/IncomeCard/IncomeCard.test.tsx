import { screen } from "@testing-library/react";
import { IncomeCard } from "./IncomeCard";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../helpers/testUtils";

const MockComponent = () => {
  return (
    <MemoryRouter>
      <IncomeCard />
    </MemoryRouter>
  );
};

describe("Income card", () => {
  it("should display correct amount of income transactions", () => {
    renderWithProviders(<MockComponent />);

    const paragraph = screen.getByText(/4350 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
