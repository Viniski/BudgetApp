import { render, screen } from "@testing-library/react";
import { AddPage } from "./AddPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../redux/store";

const MockComponent = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <AddPage type="expense" name="wydatek" />
      </MemoryRouter>
    </Provider>
  );
};

describe("Add page", () => {
  it("should display button with correct title of add page", () => {
    render(<MockComponent />);

    const button = screen.getByRole("button", { name: /Dodaj wydatek/i });
    expect(button).toBeInTheDocument();
  });
});
