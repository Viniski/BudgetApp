import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Header name", () => {
  it("should render the header name given in title props", () => {
    render(
      <Pagination
        cardNumber={12}
        paginate={() => {}}
        perPage={5}
        isDarkTheme={true}
      />
    );
    const paginateButton = screen.getByRole("button", { name: "2" });
    expect(paginateButton).toBeInTheDocument();
  });
});
