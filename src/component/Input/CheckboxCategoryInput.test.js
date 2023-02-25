import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import CheckboxCategoryInput from "./CheckboxCategoryInput";
import { Provider } from "react-redux";
import store from "../../redux/store";

const mockedOnChange = jest.fn();

describe("CheckboxInput", () => {
  it("should render checkbox input element", () => {
    render(
      <Provider store={store}>
        <CheckboxCategoryInput
          type="ale"
          onChange={mockedOnChange}
          value={["Dochód stały", "Dochód dodatkowy"]}
        />
      </Provider>
    );
    const checboxInput = screen.getByText(/Dochód stały/i);
    expect(checboxInput).toBeInTheDocument();
  });

//   it("should checkbox input element be clicked", () => {
//     render(
//       <Provider store={store}>
//         <CheckboxCategoryInput
//           type="ale"
//           onChange={mockedOnChange}
//           value={["Dochód stały", "Dochód dodatkowy"]}
//         />
//       </Provider>
//     );
//     const checboxInput = screen.findByLabelText(/Dochód stały/i);
    //expect(checboxInput.value).toBe(true);
  //});

  //   it("should not be able to type a string in input of type number", () => {
  //     render(
  //       <Provider store={store}>
  //         <Input type="number" onChange={mockedOnChange} placeholder={"Od"} />
  //       </Provider>
  //     );
  //     const input = screen.getByPlaceholderText(/od/i);
  //     fireEvent.change(input, { target: {value: "lorem ipsum" }});
  //     expect(input.value).toBe("");
  //   });
});
