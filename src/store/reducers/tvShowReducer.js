import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getTvShows = createAsyncThunk("movies/getTvShows", async () => {
  try {
    const res = await axios.get(
      `discover/tv?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&language=en-US&page=1`
    );
    // console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  shows: [],
  isLoad: false,
  error: null,
};

const getTvShowsSlice = createSlice({
  name: "tv_shows",
  initialState,

  extraReducers: (builder) => {
    builder
    .addCase(getTvShows.pending, (state) => {
      // console.log("loading");
      return {
        ...state,
        status: "loading",
        isLoad: true,
      };
    })
    .addCase(getTvShows.fulfilled, (state, action) => {
      return {
        ...state,
        status: "Success",
        isLoad: false,
        shows: action.payload,
      };
    })
    .addCase(getTvShows.rejected, (state, action) => {
      return {
        ...state,
        isLoad: false,
        error: {
          message: action.payload,
        },
      };
    });
  },
});

export default getTvShowsSlice.reducer;
