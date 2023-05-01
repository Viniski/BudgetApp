import { screen } from "@testing-library/react";
import { TotalCard } from "./TotalCard";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../helpers/testUtils";

const MockComponent = () => {
  return (
    <MemoryRouter>
      <TotalCard />
    </MemoryRouter>
  );
};

describe("Total card", () => {
  it("should display correct amount of total transactions", () => {
    renderWithProviders(<MockComponent />);

    const paragraph = screen.getByText(/1703 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
