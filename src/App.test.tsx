import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "./redux/store";
import { App } from "./App";

describe("App - theme light/dark", () => {
  const MockApp = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

  it("should render app in dark theme when click theme button", () => {
    render(<MockApp />);

    act(() => {
      const button = screen.getByTestId("theme-button");
      userEvent.click(button);
    });

    const element = screen.getByTestId("filter-button");
    expect(element).toHaveClass("transaction-section__button-filter--dark");
  });
});
