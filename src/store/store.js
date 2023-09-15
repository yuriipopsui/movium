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
// import getPopularSlice from "./reducers/popularMoviesReducer";
// import nowPlayingMoviesSlice from './reducers/nowPlayingMoviesReducer';

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

// const moviesReducer = combineReducers({
//   popular: getPopularSlice,
//   nowPlaying: nowPlayingMoviesSlice
// });

const rootReducer = combineReducers ({
      movies: moviesReducer

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
});

export const persistor = persistStore(store);

export default store;
