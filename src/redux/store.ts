import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import transactionsReducer from "./transactionsSlice";
import urlReducer from "./urlSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  theme: themeReducer,
  transactions: transactionsReducer,
  url: urlReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
