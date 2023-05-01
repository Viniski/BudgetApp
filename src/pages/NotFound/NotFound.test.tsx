import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NotFound } from "./NotFound";
import { renderWithProviders } from "../../helpers/testUtils";

describe("Not Found component", () => {
  test("should renders heading element", () => {
    renderWithProviders(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const headingElement = screen.getByRole("heading", { name: "404" });

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toBeInstanceOf(HTMLHeadingElement);
  });
});
