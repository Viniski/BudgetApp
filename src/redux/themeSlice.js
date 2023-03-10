import { createSlice } from "@reduxjs/toolkit";
import { initialTheme } from "../data/initialState";

export const themeSlice = createSlice({
  name: "theme",
  initialTheme,
  reducers: {
    toogle: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toogle } = themeSlice.actions;
export default themeSlice.reducer;
