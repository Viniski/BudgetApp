import { createSlice } from "@reduxjs/toolkit";
import { initialUrl } from "../data/initialState";

export const urlSlice = createSlice({
  name: "url",
  initialUrl,
  reducers: {
    updateHomeURL(state, action) {
      state.homeLink = action.payload;
    },
    updateExpenseURL(state, action) {
      state.expenseLink = action.payload;
    },
    updateIncomeURL(state, action) {
      state.incomeLink = action.payload;
    },
  },
});

export const { updateHomeURL, updateExpenseURL, updateIncomeURL } =
  urlSlice.actions;
export default urlSlice.reducer;
