import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../redux/store";

const MockHeader = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <Header title="Strona główna" />
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

    const navLink = screen.queryByText("Przychody");
    expect(navLink).toBeNull();
  });

  test("it nav is expands when the button is clicked on home page", () => {
    render(<MockHeader />);
    const button = screen.getByTestId("open-menu-button");
    userEvent.click(button);
    const navLink = screen.getByRole("link", { name: "Przychody" });
    expect(navLink).toBeVisible();
  });

  test("it nav is hides when the button is clicked twice on home page", () => {
    render(<MockHeader />);
    const openButton = screen.getByTestId("open-menu-button");
    userEvent.click(openButton);
    const closeButton = screen.getByTestId("close-menu-button");
    userEvent.click(closeButton);
    const navLink = screen.queryByText("Przychody");
    expect(navLink).toBeNull();
  });
});
