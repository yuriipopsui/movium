import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getUpcomingMovies = createAsyncThunk(
  'movies/upcoming',
  async () => {
    try {
      const res = await axios.get(`movie/upcoming?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&language=en-US&page=1`)
      .then(res => console.log(res.data.results));
      return res.data.results;
    } catch (error) {
      console.log(error.message);
    }
  } 
);

const initialState = {
  movies: [],
  isLoad: false,
  error: null
}

const upcomingMoviesSlice = createSlice({
  name: 'upcoming-movies',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getUpcomingMovies.pending, (state) => {
      state.status = 'Loading';
      state.isLoad = true;
      console.log(state.status);
    })
    .addCase(getUpcomingMovies.fulfilled, (state, action) => {
      state.status = 'Success';
      state.isLoad = false;
      state.movies = action.payload;
      console.log(state.status);
      console.log(state.movies);
    })
    .addCase(getUpcomingMovies.rejected, (state, action) => {
      state.status = 'Failed & Rejected';
      state.isLoad = false;
      state.error = action.error.message;
      console.log(state.status);
    })
  }
});

export default upcomingMoviesSlice.reducer;