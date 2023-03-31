import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TransactionSection } from "./TransactionsSection";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/mockStore/store";
import { MemoryRouter } from "react-router-dom";

const MockedFilterSection = () => {
  const route = "/";

  return (
    <Provider store={mockStore}>
      <MemoryRouter initialEntries={[route]}>
        <TransactionSection type="expense" title="wydatki" />
      </MemoryRouter>
    </Provider>
  );
};

describe("Transaction section", () => {
  it("should open a filter inputs section after click filter button", () => {
    render(<MockedFilterSection criteria={{}} />);
    const buttonElement = screen.getByTestId("filter-button");
    userEvent.click(buttonElement);
    const inputElementMin = screen.getByPlaceholderText(/Kwota minimalna/i);
    const inputElementMax = screen.getByPlaceholderText(/Kwota maksymalna/i);
    expect(inputElementMin).toBeInTheDocument();
    expect(inputElementMax).toBeInTheDocument();
  });
});

describe("", () => {
  it("should add criteria to page after submit a filter form", () => {
    render(<MockedFilterSection criteria={{}} />);
    const buttonElement = screen.getByTestId("filter-button");
    userEvent.click(buttonElement);

    const input = screen.getByPlaceholderText(/Kwota minimalna/i);
    const submitButton = screen.getByText(/Filtruj wydatki/i);

    fireEvent.change(input, { target: { value: 100 } });
    userEvent.click(submitButton);

    const activeCriteria = screen.getByText("Kwota minimalna: 100 PLN");
    expect(activeCriteria).toBeInTheDocument();
  });
});
