import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../data/initialTransaction";
import type { initialTransactionElement } from "../data/initialTransaction";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    add(state, action: PayloadAction<initialTransactionElement>) {
      state.push(action.payload);
    },
    edit(state, action: PayloadAction<initialTransactionElement>) {
      let index = state.findIndex(
        (tranasaction) => tranasaction.id === action.payload.id
      );
      state[index] = action.payload;
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter((tranasaction) => tranasaction.id !== action.payload);
    },
  },
});

export const { add, edit, remove } = transactionsSlice.actions;
export default transactionsSlice.reducer;
