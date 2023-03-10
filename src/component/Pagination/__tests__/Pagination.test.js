import { render, screen } from "@testing-library/react";
import React from "react";
import Pagination from "../Pagination";

describe("Header name", () => {
  it("should render the header name given in title props", () => {
    render(
      <Pagination cardNumber={12} paginate={2} perPage={5} themeDark={true} />
    );
    const paginateButton = screen.getByRole("button", { name: 2 });
    expect(paginateButton).toBeInTheDocument();
  });
});
