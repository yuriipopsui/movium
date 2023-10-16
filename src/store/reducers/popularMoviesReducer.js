import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getPopularMovies } from "../../helpers";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;


export const getPopular = createAsyncThunk(
  'movies/getPopular',
  async () => {
    try {
      const res = await axios
        .get(
          `movie/popular?api_key=${
            import.meta.env.VITE_APP_API_KEY
          }&language=en-US&page=1`
        )
        // .then((res) => console.log(res.data.results));
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

const getPopularSlice = createSlice({
  name: 'popular',
  initialState,

  extraReducers: (builder) => {
    builder
    .addCase(getPopular.pending, (state) => {
      state.status = 'loading';
      state.isLoad = true;
    })
    .addCase(getPopular.fulfilled, (state, action) => {
      state.status = 'Success';
      state.movies = action.payload;
      state.isLoad = false;
    })
    .addCase(getPopular.rejected, (state, action) => {
      state.status = 'Rejected & Failed';
      state.isLoad = false;
      state.error = action.error.message;
    })
  }
});

export default getPopularSlice.reducer;