import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getSearchedItems = createAsyncThunk('search/setSearchTerm', async (searchTerm) => {
  try {
    const res = await axios.get(
      `search/movie?api_key=${
        import.meta.env.VITE_APP_API_KEY}&query=${searchTerm}
        &include_adult=false&language=en-US&page=1`
    );

        // console.log(res.data.results);
        return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  searchTerm: '',
  isLoad: false,
  items: [],
  error: ''
}

const searchSlice = createSlice({
  name: 'search',
  initialState,

  reducers: {
    setSearchTerm: (state, action) => {
      return {
        ...state,
        searchTerm: action.payload
      }
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(getSearchedItems.pending, (state) => {
      return {
        ...state,
        isLoad: true,
      };
    })
    .addCase(getSearchedItems.fulfilled, (state, action) => {
      return {
        ...state,
        isLoad: false,
        items: action.payload
      };
    })
    .addCase(getSearchedItems.rejected, (state, action) => {
      return {
        ...state,
        isLoad: false,
        error: {
          message: action.payload,
        }
      };
    })
  }
});

export const {setSearchTerm} = searchSlice.actions;
export default searchSlice.reducer;