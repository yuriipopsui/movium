import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  try {
    const res = await axios.get(
      `discover/movie?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&language=en-US&page=1`
    );
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  movies: [],
  isLoad: false,
  error: null,
};

const getMoviesSlice = createSlice({
  name: "movies",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        return {
          ...state,
          status: "loading",
          isLoad: true,
        };
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        return {
          ...state,
          status: "Success",
          movies: action.payload,
          isLoad: false,
        };
      })
      .addCase(getMovies.rejected, (state, action) => {
        return {
          ...state,
          status: "Rejected & Failed",
          isLoad: false,
          error: {
            message: action.payload,
          }
        }
      });
  },
});

export default getMoviesSlice.reducer;
