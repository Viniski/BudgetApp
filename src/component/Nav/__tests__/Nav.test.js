import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import React from "react";
import App from "../../../App";

describe("Nav", () => {
  const MockApp = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
  it("navigates income when you click the link in nav", () => {
    render(<MockApp />);

    const button = screen.getByTestId("open-menu-button");
    fireEvent.click(button);

    act(() => {
      const navLink = screen.getByRole("link", { name: "Dochody" });
      fireEvent.click(navLink);
    });

    const headerName = screen.getByRole("heading", { name: "Dochody" });
    expect(headerName).toBeInTheDocument();
  });

  it("navigates home when you click undo button", () => {
    render(<MockApp />);

    act(() => {
      const backButton = screen.getByTestId("undo-button");
      fireEvent.click(backButton);
    });

    const headerName = screen.getByRole("heading", { name: "Strona główna" });
    expect(headerName).toBeInTheDocument();
  });

  it("navigates expense when you click the link in nav", () => {
    render(<MockApp />);

    const button = screen.getByTestId("open-menu-button");
    fireEvent.click(button);

    act(() => {
      const navLink = screen.getByRole("link", { name: "Wydatki" });
      fireEvent.click(navLink);
    });

    const headerName = screen.getByRole("heading", { name: "Wydatki" });
    expect(headerName).toBeInTheDocument();
  });
});
