import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../helpers/testUtils";

const MockHeader = () => {
  return (
    <MemoryRouter>
      <Header title="Strona główna" />
    </MemoryRouter>
  );
};

describe("Header name", () => {
  it("should render the header name given in title props", () => {
    renderWithProviders(<MockHeader />);
    const header = screen.getByRole("heading", { name: "Strona główna" });
    expect(header).toBeInTheDocument();
  });
});

describe("Header nav", () => {
  test("should inicialy on home page nav is hide ", () => {
    renderWithProviders(<MockHeader />);

    const navLink = screen.queryByText("Przychody");
    expect(navLink).toBeNull();
  });

  test("should nav is expands when the button is clicked on home page", () => {
    renderWithProviders(<MockHeader />);
    const button = screen.getByTestId("open-menu-button");
    userEvent.click(button);
    const navLink = screen.getByRole("link", { name: "Przychody" });
    expect(navLink).toBeVisible();
  });

  test("should nav is hides when the button is clicked twice on home page", () => {
    renderWithProviders(<MockHeader />);
    const openButton = screen.getByTestId("open-menu-button");
    userEvent.click(openButton);
    const closeButton = screen.getByTestId("close-menu-button");
    userEvent.click(closeButton);
    const navLink = screen.queryByText("Przychody");
    expect(navLink).toBeNull();
  });
});
