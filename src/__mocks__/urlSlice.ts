import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../data/initialUrl";

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    updateHomeURL(state, action: PayloadAction<string>) {
      state.homeLink = action.payload;
    },
    updateExpenseURL(state, action: PayloadAction<string>) {
      state.expenseLink = action.payload;
    },
    updateIncomeURL(state, action: PayloadAction<string>) {
      state.incomeLink = action.payload;
    },
  },
});

export const { updateHomeURL, updateExpenseURL, updateIncomeURL } =
  urlSlice.actions;
export default urlSlice.reducer;
