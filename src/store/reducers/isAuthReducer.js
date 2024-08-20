import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  user: null,
  isAuth: false,
  isLoading: false
}

const isAuthSlice = createSlice ({
  name: 'isAuth',
  initialState,

  reducers: {
    LogIn: {
      reducer: (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        // console.log(state);
        // console.log(state.isAuth);
      }
    },
    Logout: {
      reducer: (state) => {
        state.user = null;
        state.isAuth = false;
      }
    }
  }
});

export const {LogIn, Logout} = isAuthSlice.actions;
export default isAuthSlice.reducer;