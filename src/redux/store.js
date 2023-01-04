import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./themeSlice";
import transactionsReducer from "./transactionsSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    transactions: transactionsReducer,
  },  
});