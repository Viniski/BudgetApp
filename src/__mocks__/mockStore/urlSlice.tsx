import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../data/initialUrl";

export const urlSlice = createSlice({
  name: "url",
  initialState,
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
