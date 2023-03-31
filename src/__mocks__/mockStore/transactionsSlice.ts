import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../data/initialTransaction";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    edit(state, action) {
      let index = state.findIndex(
        (tranasaction) => tranasaction.id === action.payload.id
      );
      state[index] = action.payload;
    },
    remove(state, action) {
      return state.filter((tranasaction) => tranasaction.id !== action.payload);
    },
  },
});

export const { add, edit, remove } = transactionsSlice.actions;
export default transactionsSlice.reducer;
