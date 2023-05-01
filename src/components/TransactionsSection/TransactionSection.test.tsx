import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TransactionSection } from "./TransactionsSection";
import { renderWithProviders } from "../../helpers/testUtils";
import { MemoryRouter } from "react-router-dom";
import { ROOT } from "../../navigation/CONSTANTS";

const MockedFilterSection = ({ criteria: {} }) => {
  const route = ROOT;

  return (
    <MemoryRouter initialEntries={[route]}>
      <TransactionSection type="expense" title="wydatki" />
    </MemoryRouter>
  );
};

describe("Transaction section", () => {
  it("should open a filter inputs section after click filter button", () => {
    renderWithProviders(<MockedFilterSection criteria={{}} />);
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
    renderWithProviders(<MockedFilterSection criteria={{}} />);
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
