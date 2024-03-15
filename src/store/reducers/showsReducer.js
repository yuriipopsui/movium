import { combineReducers } from "@reduxjs/toolkit";
import tvShowReducer from "./tvShowReducer";

export const showsReducer = combineReducers({
  tvShows: tvShowReducer
})