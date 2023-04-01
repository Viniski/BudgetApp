import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../redux/themeSlice";
import transactionsReducer from "../redux/transactionsSlice";
import urlReducer from "../redux/urlSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    transactions: transactionsReducer,
    url: urlReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
