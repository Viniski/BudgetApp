import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogle: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    updateTheme(state, action) {
      state = action.payload;
    },
  },
});

export const { toogle, updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
