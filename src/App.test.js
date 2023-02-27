import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";
import App from "./App";

describe("App - theme light/dark", () => {
  const MockApp = () => {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

  it("render app in dark theme when click theme button", () => {
    render(
      <MockApp/>
    );

    act(() => {
      const button = screen.getByTestId("theme-button");
      fireEvent.click(button);
    });

    const element = screen.getByTestId("filter-button");
    expect(element).toHaveClass("transaction-section__button-filter--dark");
  });

  it("render app in light theme when click theme button in dark theme app", () => {
    render(
      <MockApp/>
    );

    act(() => {
      const button = screen.getByTestId("theme-button");
      fireEvent.click(button);
    });

    const element = screen.getByTestId("filter-button");
    expect(element).not.toHaveClass("transaction-section__button-filter--dark");
  });
});
