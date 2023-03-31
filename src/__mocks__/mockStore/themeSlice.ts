import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../data/InitialTheme";

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogle: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toogle } = themeSlice.actions;
export default themeSlice.reducer;
