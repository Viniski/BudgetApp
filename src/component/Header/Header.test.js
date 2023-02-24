import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../App";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Header name", () => {
  const expectedTitle = "Strona główna";

  it("should render the header name given in title props", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const header = screen.getByRole("heading", { name: "Strona główna" });
    expect(header).toBeInTheDocument();
  });
});
