import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getNowPlayingMovies = createAsyncThunk (
  'movies/getNowPlaying',
  async () => {
    try {
      const res = await axios
        .get(
          `movie/now_playing?api_key=${
            import.meta.env.VITE_APP_API_KEY
          }&language=en-US&page=1`
        )
        .then((res) => console.log(res.data.results));
      return res.data.results;
    } catch (error) {
      console.log(error.message);
    }
  }
)

const initialState = {
  movies: [],
  isLoad: false,
  error: null
}

const nowPlayingMoviesSlice = createSlice ({
  name: 'now-playing',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getNowPlayingMovies.pending, (state) => {
      state.status = 'loading';
      state.isLoad = true;
      console.log(state.status);
    })
    .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
      state.status = 'Success';
      state.isLoad = false;
      state.movies = action.payload;
      console.log(state.status);
      console.log(state.movies);
    })
    .addCase(getNowPlayingMovies.rejected, (state, action) => {
      state.status = 'Failed & Rejected';
      state.isLoad = false;
      state.error = action.error.message;
      console.log(state.status);
    });
  }
});

export default nowPlayingMoviesSlice.reducer;