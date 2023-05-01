import { screen } from "@testing-library/react";
import { AddPage } from "./AddPage";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../helpers/testUtils";

const MockComponent = () => {
  return (
    <MemoryRouter>
      <AddPage type="expense" name="wydatek" />
    </MemoryRouter>
  );
};

describe("Add page", () => {
  it("should display button with correct title of add page", () => {
    renderWithProviders(<MockComponent />);

    const button = screen.getByRole("button", { name: /Dodaj wydatek/i });
    expect(button).toBeInTheDocument();
  });
});
