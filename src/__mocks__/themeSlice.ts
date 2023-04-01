import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../data/InitialTheme";

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogle: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toogle } = themeSlice.actions;
export default themeSlice.reducer;
