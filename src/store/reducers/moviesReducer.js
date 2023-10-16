import { combineReducers } from "@reduxjs/toolkit";
import nowPlayingMoviesReducer from "./nowPlayingMoviesReducer";
import popularMoviesReducer from "./popularMoviesReducer";
import topRatedMoviesReducer from "./topRatedMoviesReducer";
import upComingMoviesReducer from "./upComingMoviesReducer";

export const moviesReducer = combineReducers({
  popular: popularMoviesReducer,
  nowPlaying: nowPlayingMoviesReducer,
  topRated: topRatedMoviesReducer,
  upcoming: upComingMoviesReducer
});