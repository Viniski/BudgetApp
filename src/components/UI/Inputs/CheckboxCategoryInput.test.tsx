import { screen } from "@testing-library/react";
import { CheckboxCategoryInput } from "./CheckboxCategoryInput";
import { renderWithProviders } from "../../../helpers/testUtils";

const mockedOnChange = jest.fn();

describe("CheckboxInput", () => {
  it("should render checkbox input element", () => {
    renderWithProviders(
      <CheckboxCategoryInput
        type="all"
        onChange={mockedOnChange}
        value={["Dochód stały", "Dochód dodatkowy"]}
      />
    );
    const checboxInput = screen.getByText(/Dochód stały/i);
    expect(checboxInput).toBeInTheDocument();
  });
});
