import { render, screen } from "@testing-library/react";
import { CheckboxCategoryInput } from "./CheckboxCategoryInput";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/mockStore/store";

const mockedOnChange = jest.fn();

describe("CheckboxInput", () => {
  it("should render checkbox input element", () => {
    render(
      <Provider store={mockStore}>
        <CheckboxCategoryInput
          type="all"
          onChange={mockedOnChange}
          value={["Dochód stały", "Dochód dodatkowy"]}
        />
      </Provider>
    );
    const checboxInput = screen.getByText(/Dochód stały/i);
    expect(checboxInput).toBeInTheDocument();
  });
});
