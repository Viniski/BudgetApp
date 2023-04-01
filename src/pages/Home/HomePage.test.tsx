import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/store";
import React from "react";
import { App } from "../../App";

describe("Title page", () => {
  const MockApp = () => {
    return (
      <Provider store={mockStore}>
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
