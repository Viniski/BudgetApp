import { screen } from "@testing-library/react";
import { SelectTypeInput } from "./SelectTypeInput";
import { renderWithProviders } from "../../../helpers/testUtils";

const mockedOnChange = jest.fn();

describe("SelectTypeInput", () => {
  it("should render select type input element", () => {
    renderWithProviders(<SelectTypeInput onChange={mockedOnChange} />);
    const selectType = screen.getByTestId("select-type-input");
    expect(selectType).toBeInTheDocument();
  });
});
