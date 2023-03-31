import { render, screen } from "@testing-library/react";
import { SelectTypeInput } from "./SelectTypeInput";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/mockStore/store";

const mockedOnChange = jest.fn();

describe("SelectTypeInput", () => {
  it("should render select type input element", () => {
    render(
      <Provider store={mockStore}>
        <SelectTypeInput onChange={mockedOnChange} />
      </Provider>
    );
    const selectType = screen.getByTestId("select-type-input");
    expect(selectType).toBeInTheDocument();
  });
});
