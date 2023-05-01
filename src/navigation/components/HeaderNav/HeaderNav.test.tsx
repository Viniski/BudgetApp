import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { App } from "../../../App";
import { renderWithProviders } from "../../../helpers/testUtils";

describe("Nav", () => {
  it("should navigates income when you click the link in nav", () => {
    renderWithProviders(<App />);

    const button = screen.getByTestId("open-menu-button");
    userEvent.click(button);

    act(() => {
      const navLink = screen.getByRole("link", { name: "Przychody" });
      userEvent.click(navLink);
    });

    const headerName = screen.getByRole("heading", { name: "Przychody" });
    expect(headerName).toBeInTheDocument();
  });

  it("should navigates home when you click undo button", () => {
    renderWithProviders(<App />);

    act(() => {
      const backButton = screen.getByTestId("undo-button");
      userEvent.click(backButton);
    });

    const headerName = screen.getByRole("heading", { name: "Strona główna" });
    expect(headerName).toBeInTheDocument();
  });

  it("should navigates expense when you click the link in nav", () => {
    renderWithProviders(<App />);

    const button = screen.getByTestId("open-menu-button");
    userEvent.click(button);

    act(() => {
      const navLink = screen.getByRole("link", { name: "Wydatki" });
      userEvent.click(navLink);
    });

    const headerName = screen.getByRole("heading", { name: "Wydatki" });
    expect(headerName).toBeInTheDocument();
  });
});
