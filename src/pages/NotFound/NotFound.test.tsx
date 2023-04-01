import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/store";
import { NotFound } from "./NotFound";

describe("Not Found component", () => {
  test("renders heading element", () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </Provider>
    );
    const headingElement = screen.getByRole("heading", { name: "404" });

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toBeInstanceOf(HTMLHeadingElement);
  });
});
