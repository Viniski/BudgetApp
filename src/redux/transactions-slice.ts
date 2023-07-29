import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/data/initial-transaction';
import type { InitialTransactionElement } from '@/data/initial-transaction';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    add(state, action: PayloadAction<InitialTransactionElement>) {
      state.push(action.payload);
    },
    edit(state, action: PayloadAction<InitialTransactionElement>) {
      const index = state.findIndex((tranasaction) => tranasaction.id === action.payload.id);
      // eslint-disable-next-line no-param-reassign
      state[index] = action.payload;
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter((tranasaction) => tranasaction.id !== action.payload);
    },
  },
});

export const { add, edit, remove } = transactionsSlice.actions;
export default transactionsSlice.reducer;
