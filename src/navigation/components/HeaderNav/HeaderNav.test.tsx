import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import mockStore from "../../../__mocks__/store";
import { App } from "../../../App";

describe("Nav", () => {
  const MockApp = () => {
    return (
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  };
  it("navigates income when you click the link in nav", () => {
    render(<MockApp />);

    const button = screen.getByTestId("open-menu-button");
    userEvent.click(button);

    act(() => {
      const navLink = screen.getByRole("link", { name: "Dochody" });
      userEvent.click(navLink);
    });

    const headerName = screen.getByRole("heading", { name: "Dochody" });
    expect(headerName).toBeInTheDocument();
  });

  it("navigates home when you click undo button", () => {
    render(<MockApp />);

    act(() => {
      const backButton = screen.getByTestId("undo-button");
      userEvent.click(backButton);
    });

    const headerName = screen.getByRole("heading", { name: "Strona główna" });
    expect(headerName).toBeInTheDocument();
  });

  it("navigates expense when you click the link in nav", () => {
    render(<MockApp />);

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
