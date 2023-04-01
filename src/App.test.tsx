import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import mockStore from "./__mocks__/store";
import { App } from "./App";

describe("App - theme light/dark", () => {
  const MockApp = () => {
    return (
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  };

  it("render app in dark theme when click theme button", () => {
    render(<MockApp />);

    act(() => {
      const button = screen.getByTestId("theme-button");
      userEvent.click(button);
    });

    const element = screen.getByTestId("filter-button");
    expect(element).toHaveClass("transaction-section__button-filter--dark");
  });

  it("render app in light theme when click theme button in dark theme app", () => {
    render(<MockApp />);

    act(() => {
      const button = screen.getByTestId("theme-button");
      userEvent.click(button);
    });

    const element = screen.getByTestId("filter-button");
    expect(element).not.toHaveClass("transaction-section__button-filter--dark");
  });
});
