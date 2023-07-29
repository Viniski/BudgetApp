import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/data/initial-url';

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    updateHomeURL(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.homeLink = action.payload;
    },
    updateExpenseURL(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.expenseLink = action.payload;
    },
    updateIncomeURL(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.incomeLink = action.payload;
    },
  },
});

export const { updateHomeURL, updateExpenseURL, updateIncomeURL } = urlSlice.actions;
export default urlSlice.reducer;
