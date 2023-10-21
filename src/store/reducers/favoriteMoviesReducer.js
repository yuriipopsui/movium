import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movies: [],
}

const favoriteMoviesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites(state, action) {
      state.movies = [...state.movies, action.payload]
    },
    removeFavorites(state, action) {
      state.movies = state.movies.filter(id => id !== action.payload)
    }
  }
});

export const {addFavorites, removeFavorites} = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;