import { render, screen } from "@testing-library/react";
import React from "react";
import { SelectAddTypePage } from "./SelectAddTypePage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockStore from "../../__mocks__/mockStore/store";

const MockComponent = () => {
  return (
    <Provider store={mockStore}>
      <MemoryRouter>
        <SelectAddTypePage />
      </MemoryRouter>
    </Provider>
  );
};

describe("Select add type page", () => {
  test("should display expense button", () => {
    render(<MockComponent />);

    const buttonExpense = screen.getByRole("button", {
      name: /Dodaj wydatek/i,
    });
    expect(buttonExpense).toBeInTheDocument();
  });

  test("should display income button", () => {
    render(<MockComponent />);

    const buttonIncome = screen.getByRole("button", { name: /Dodaj dochód/i });
    expect(buttonIncome).toBeInTheDocument();
  });

  test("display correct title page", () => {
    render(<MockComponent />);

    const title = document.title;
    expect(title).toBe("Dodaj transakcje | BudgetApp by Viniski");
  });
});
