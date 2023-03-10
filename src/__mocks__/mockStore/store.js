import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../../redux/themeSlice";
import transactionsReducer from "../../redux/transactionsSlice";
import urlReducer from "../../redux/urlSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    transactions: transactionsReducer,
    url: urlReducer,
  },
});
