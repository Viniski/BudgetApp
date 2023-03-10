import { render, screen } from "@testing-library/react";
import React from "react";
import { SelectCategoryInput } from "./SelectCategoryInput";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/mockStore/store";

const mockedOnChange = jest.fn();

describe("SelectCategoryInput", () => {
  it("should render select category input element", () => {
    render(
      <Provider store={mockStore}>
        <SelectCategoryInput type="all" onChange={mockedOnChange} />
      </Provider>
    );
    const selectInput = screen.getByTestId("select-category-input");
    expect(selectInput).toBeInTheDocument();
  });
});
