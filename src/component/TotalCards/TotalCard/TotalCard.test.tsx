import { render, screen } from "@testing-library/react";
import { TotalCard } from "./TotalCard";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../redux/store";

const MockComponent = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <TotalCard />
      </MemoryRouter>
    </Provider>
  );
};

describe("Total card", () => {
  it("should display correct amount of total transactions", () => {
    render(<MockComponent />);

    const paragraph = screen.getByText(/1703 PLN/i);
    expect(paragraph).toBeInTheDocument();
  });
});
