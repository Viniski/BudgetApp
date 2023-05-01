import { screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import { renderWithProviders } from "../../../helpers/testUtils";

const mockedOnChange = jest.fn();

describe("Input", () => {
  it("should render input element", () => {
    renderWithProviders(
      <Input type="text" onChange={mockedOnChange} placeholder={"Od"} />
    );
    const input = screen.getByPlaceholderText(/od/i);
    expect(input).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    renderWithProviders(
      <Input type="number" onChange={mockedOnChange} placeholder={"Od"} />
    );
    const input = screen.getByPlaceholderText(/od/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 100 } });
    expect(input.value).toBe("100");
  });

  it("should not be able to type a string in input of type number", () => {
    renderWithProviders(
      <Input type="number" onChange={mockedOnChange} placeholder={"Od"} />
    );
    const input = screen.getByPlaceholderText(/od/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "lorem ipsum" } });
    expect(input.value).toBe("");
  });
});
