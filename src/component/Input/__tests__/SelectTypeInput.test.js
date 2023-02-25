import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SelectTypeInput from "../SelectTypeInput";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const mockedOnChange = jest.fn();

describe("SelectTypeInput", () => {
  it("should render select type input element", () => {
    render(
      <Provider store={store}>
        <SelectTypeInput
          onChange={mockedOnChange}
        />
      </Provider>
    );
    const selectType = screen.getByTestId("select-type-input");
    expect(selectType).toBeInTheDocument();
  });
});
