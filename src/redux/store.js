import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./themeSlice";
import transactionsReducer from "./transactionsSlice";
import urlReducer from "./urlSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    transactions: transactionsReducer,
    url: urlReducer,
  },  
});