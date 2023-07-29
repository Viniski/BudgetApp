import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './theme-slice';
import transactionsReducer from './transactions-slice';
import urlReducer from './url-slice';

const persistConfig = {
  key: 'root',
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
