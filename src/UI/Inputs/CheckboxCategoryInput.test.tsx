import { render, screen } from "@testing-library/react";
import { CheckboxCategoryInput } from "./CheckboxCategoryInput";
import { Provider } from "react-redux";
import store from "../../redux/store";

const mockedOnChange = jest.fn();

describe("CheckboxInput", () => {
  it("should render checkbox input element", () => {
    render(
      <Provider store={store}>
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
