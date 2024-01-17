import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getMovieById = createAsyncThunk(
  'getMovieByid',
  async (id) => {
    try {
      const res = await axios.get(
        `movie/${id}?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&language=en-US`
      )
      // .then((res) => console.log(res.data));
     return res.data; 
    } catch(error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  movie: [],
  isLoading: false,
}

const getMovieByIdSlice = createSlice({
  name: 'getMovie',
  initialState,

  extraReducers: (builder) => {
    builder
    .addCase(getMovieById.pending, (state) => {
      state.status = 'loading';
      state.isLoading = true;
    })
    .addCase(getMovieById.fulfilled, (state, action) => {
      state.status = 'success';
      state.isLoading = false;
      state.movie = action.payload;
    })
    .addCase(getMovieById.rejected, (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
      state.action = action.error.message;
    })
  }
});

export default getMovieByIdSlice.reducer;