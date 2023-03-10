import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockStore from "../../redux/store";

const MockHeader = () => {
  return (
    <Provider store={mockStore}>
      <MemoryRouter>
        <Header title="Strona główna" page="home" />
      </MemoryRouter>
    </Provider>
  );
};

describe("Header name", () => {
  it("should render the header name given in title props", () => {
    render(<MockHeader />);
    const header = screen.getByRole("heading", { name: "Strona główna" });
    expect(header).toBeInTheDocument();
  });
});

describe("Header nav", () => {
  test("inicialy on home page nav is hide ", () => {
    render(<MockHeader />);

    const navLink = screen.queryByText("Dochody");
    expect(navLink).toBeNull();
  });

  test("it nav is expands when the button is clicked on home page", () => {
    render(<MockHeader />);
    const button = screen.getByTestId("open-menu-button");
    fireEvent.click(button);
    const navLink = screen.getByRole("link", { name: "Dochody" });
    expect(navLink).toBeVisible();
  });

  test("it nav is hides when the button is clicked twice on home page", () => {
    render(<MockHeader />);
    const openButton = screen.getByTestId("open-menu-button");
    fireEvent.click(openButton);
    const closeButton = screen.getByTestId("close-menu-button");
    fireEvent.click(closeButton);
    const navLink = screen.queryByText("Dochody");
    expect(navLink).toBeNull();
  });
});
