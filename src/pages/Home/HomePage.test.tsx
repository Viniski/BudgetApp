import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { App } from "../../App";
import store from "../../redux/store";

describe("Title page", () => {
  const MockApp = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

  test("display correct title page", () => {
    render(<MockApp />);

    const title = document.title;
    expect(title).toBe("BudgetApp by Viniski");
  });
});
