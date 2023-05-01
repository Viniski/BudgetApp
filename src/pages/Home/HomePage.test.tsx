import { App } from "../../App";
import { renderWithProviders } from "../../helpers/testUtils";

describe("Title page", () => {
  test("should display correct title page", () => {
    renderWithProviders(<App />);

    const title = document.title;
    expect(title).toBe("BudgetApp by Viniski");
  });
});
