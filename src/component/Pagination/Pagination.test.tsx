import { render, screen } from "@testing-library/react";
import { useTransactionSection } from "../TransactionsSection/hooks/useTransactionSection";
import { Pagination } from "./Pagination";

const { paginate } = useTransactionSection("all");

describe("Header name", () => {
  it("should render the header name given in title props", () => {
    render(
      <Pagination
        cardNumber={12}
        paginate={() => paginate(2)}
        perPage={5}
        isDarkTheme={true}
      />
    );
    const paginateButton = screen.getByRole("button", { name: "2" });
    expect(paginateButton).toBeInTheDocument();
  });
});
