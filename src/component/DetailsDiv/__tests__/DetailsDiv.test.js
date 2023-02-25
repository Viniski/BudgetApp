import { render, screen } from "@testing-library/react";
import React from "react";
import DetailsDiv from "../DetailsDiv";

describe("Details div", () => {
  const expectedCategory = "Transport";
  const expectedValue = 100;

  it("should render same text passed into category prop", () => {
    render(
    <DetailsDiv category={expectedCategory} value={expectedValue} />
    );
    const category = screen.getByText("Transport");
    expect(category).toBeInTheDocument();
  });

  it("should render the value in details div given in props", () => {
    render(
    <DetailsDiv category={expectedCategory} value={expectedValue} />
    );
    const value = screen.getByText("100");
    expect(value).toBeInTheDocument();
  });
});
