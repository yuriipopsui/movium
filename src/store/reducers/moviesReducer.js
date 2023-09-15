import { combineReducers } from "@reduxjs/toolkit";
import nowPlayingMoviesReducer from "./nowPlayingMoviesReducer";
import popularMoviesReducer from "./popularMoviesReducer";
import topRatedMoviesReducer from "./topRatedMoviesReducer";
import upcomingMoviesreducer from "./upcomingMoviesreducer";

export const moviesReducer = combineReducers({
  popular: popularMoviesReducer,
  nowPlaying: nowPlayingMoviesReducer,
  topRated: topRatedMoviesReducer,
  upcoming: upcomingMoviesreducer
});