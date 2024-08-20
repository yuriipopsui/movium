import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { moviesReducer } from './reducers/moviesReducer';
import { showsReducer } from './reducers/showsReducer';
import  searchReducer  from './reducers/searchReducer';
import usersReducer from './reducers/usersReducer';
import isAuthReducer from './reducers/isAuthReducer';

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const rootReducer = combineReducers ({
      movies: moviesReducer,
      shows: showsReducer,
      search: searchReducer,
      users: usersReducer,
      user: isAuthReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;
