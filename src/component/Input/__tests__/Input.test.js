import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Input from "../Input";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const mockedOnChange = jest.fn();

describe("Input", () => {
  it("should render input element", () => {
    render(
      <Provider store={store}>
        <Input type="text" onChange={mockedOnChange} placeholder={"Od"} />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/od/i);
    expect(input).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(
      <Provider store={store}>
        <Input type="number" onChange={mockedOnChange} placeholder={"Od"} />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/od/i);
    fireEvent.change(input, { target: { value: 100 } });
    expect(input.value).toBe("100");
  });

  it("should not be able to type a string in input of type number", () => {
    render(
      <Provider store={store}>
        <Input type="number" onChange={mockedOnChange} placeholder={"Od"} />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/od/i);
    fireEvent.change(input, { target: { value: "lorem ipsum" } });
    expect(input.value).toBe("");
  });
});
