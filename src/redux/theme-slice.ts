import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDarkTheme: false },
  reducers: {
    toogle: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toogle } = themeSlice.actions;
export default themeSlice.reducer;
