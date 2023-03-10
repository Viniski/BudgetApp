import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeLink: "/",
  expenseLink: "/wydatki",
  incomeLink: "/dochody",
};

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
