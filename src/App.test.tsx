import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { App } from "./App";
import { renderWithProviders } from "./helpers/testUtils";

describe("App - theme light/dark", () => {
  it("should render app in dark theme when click theme button", () => {
    renderWithProviders(<App />);

    act(() => {
      const button = screen.getByTestId("theme-button");
      userEvent.click(button);
    });

    const element = screen.getByTestId("filter-button");
    expect(element).toHaveClass("transaction-section__button-filter--dark");
  });
});
