import { screen } from "@testing-library/react";
import { SelectCategoryInput } from "./SelectCategoryInput";
import { renderWithProviders } from "../../../helpers/testUtils";

const mockedOnChange = jest.fn();

describe("SelectCategoryInput", () => {
  it("should render select category input element", () => {
    renderWithProviders(
      <SelectCategoryInput type="all" onChange={mockedOnChange} />
    );
    const selectInput = screen.getByTestId("select-category-input");
    expect(selectInput).toBeInTheDocument();
  });
});
